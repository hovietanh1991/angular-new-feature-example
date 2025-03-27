#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define paths
PATH_TO_LOG_FILE="../dist/log"

# List of Angular applications
APPS=("angular-classic" "angular-zoneless" "angular-zoneless-signal" "angular-zoneless-signal-standalone" "angular-zoneless-signal-standalone-on-push")

# Ensure log directories exist
mkdir -p "$PATH_TO_LOG_FILE"

# Ensure cleanup runs on EXIT, SIGINT (Ctrl+C), and SIGTERM
trap cleanup EXIT SIGINT SIGTERM

# Function to build an application
build_app() {
  local app_name=$1
  echo "Building $app_name..."
  npm run "$app_name":build
}

# Function to serve an application
serve_app() {
  local app_name=$1
  echo "Serving $app_name..."
  npm run "$app_name":serve-static > "$PATH_TO_LOG_FILE/$app_name-server.log" 2>&1 &
}

# Function to check if the application is available on port 4200 using curl
wait_for_app() {
  local app_name=$1
  echo "Waiting for $app_name to be available on port 4200..."

  # Log the output of curl to PATH_TO_LOG_FILE
  sleep 2
  while ! curl --silent --head --fail http://localhost:4200 >> "$PATH_TO_LOG_FILE/curl_output.log" 2>&1; do
    sleep 2
  done
  echo "$app_name is now running."
}

# Function to run performance tests multiple times and archive reports
run_tests() {
  local app_name=$1
  echo "Running performance tests for $app_name..."

  # Run performance test
  npm run "$app_name":test-performance:windows
}

# Function to stop the application server
cleanup() {
  local app_pid=$(netstat -ano | grep :4200 | awk 'NR==1 {print $5}')
  echo "Stopping app on PID=$app_pid"
  taskkill //F //PID $app_pid
}

# Iterate over all applications
for app in "${APPS[@]}"; do
  echo "----------------------------------"
  echo "Processing $app..."

  # Step 1: Build the application
  build_app "$app"

  # Step 2: Serve the application
  serve_app "$app"

  # Step 3: Wait for the application to be available using curl
  wait_for_app "$app"

  # Step 4: Run performance tests and archive reports
  run_tests "$app"

  # Step 5: Cleanup is now handled automatically via `trap`
  cleanup

  echo "Completed tests for $app."
  echo "----------------------------------"
done

echo "All tests completed successfully!"

# Summarize the results
echo "Start summarizing performance report..."
sh ./summarize-performance-report.sh

# Summarize the results
echo "Start summarizing file size..."
sh ./summarize-file-size.sh



