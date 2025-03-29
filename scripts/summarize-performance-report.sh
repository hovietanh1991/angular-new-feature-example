#!/usr/bin/env bash

# List of Angular applications
APPS=("angular-classic" "angular-zoneless" "angular-zoneless-signal" "angular-zoneless-signal-standalone" "angular-zoneless-signal-standalone-on-push")

PATH_TO_LIGHTHOUSE="../dist/lighthouse"
PATH_TO_SUMMARIZE_FILE="$PATH_TO_LIGHTHOUSE/summarize-performance-report.md"

generate_table_header_row() {
  echo "  <tr>" >> $PATH_TO_SUMMARIZE_FILE
  echo "    <th>Page</th>" >> $PATH_TO_SUMMARIZE_FILE
  echo "    <th>Performance</th>" >> $PATH_TO_SUMMARIZE_FILE

  # Iterate over all applications
  for app in "${APPS[@]}"; do
    echo "    <th>$app</th>" >> $PATH_TO_SUMMARIZE_FILE
  done

  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE
}

generate_summarize_for_page() {
  local pageName=$1
  local pageDescription=$2

  echo "  <tr>" >> $PATH_TO_SUMMARIZE_FILE
  echo '    <td rowspan="5">' >> $PATH_TO_SUMMARIZE_FILE
  echo "      <code>$pageName</code><br/>" >> $PATH_TO_SUMMARIZE_FILE
  echo "      <div>$pageDescription</div>" >> $PATH_TO_SUMMARIZE_FILE
  echo '    </td>' >> $PATH_TO_SUMMARIZE_FILE

  echo '    <td>First Contentful Paint</td>' >> $PATH_TO_SUMMARIZE_FILE
  for app in "${APPS[@]}"; do
    local reportFile="$PATH_TO_LIGHTHOUSE/$app/$pageName-report.report.json"
    echo "    <td><code>$(jq -r '.audits."first-contentful-paint".displayValue' $reportFile)</code></td>" >> $PATH_TO_SUMMARIZE_FILE
  done
  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE

  echo "  <tr>" >> $PATH_TO_SUMMARIZE_FILE
  echo '    <td>Largest Contentful Paint</td>' >> $PATH_TO_SUMMARIZE_FILE
  for app in "${APPS[@]}"; do
    local reportFile="$PATH_TO_LIGHTHOUSE/$app/$pageName-report.report.json"
    echo "    <td><code>$(jq -r '.audits."largest-contentful-paint".displayValue' $reportFile)</code></td>" >> $PATH_TO_SUMMARIZE_FILE
  done
  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE

  echo "  <tr>" >> $PATH_TO_SUMMARIZE_FILE
  echo '    <td>Total Blocking Time</td>' >> $PATH_TO_SUMMARIZE_FILE
  for app in "${APPS[@]}"; do
    local reportFile="$PATH_TO_LIGHTHOUSE/$app/$pageName-report.report.json"
    echo "    <td><code>$(jq -r '.audits."total-blocking-time".displayValue' $reportFile)</code></td>" >> $PATH_TO_SUMMARIZE_FILE
  done
  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE

  echo "  <tr>" >> $PATH_TO_SUMMARIZE_FILE
  echo '    <td>Speed Index</td>' >> $PATH_TO_SUMMARIZE_FILE
  for app in "${APPS[@]}"; do
    local reportFile="$PATH_TO_LIGHTHOUSE/$app/$pageName-report.report.json"
    echo "    <td><code>$(jq -r '.audits."speed-index".displayValue' $reportFile)</code></td>" >> $PATH_TO_SUMMARIZE_FILE
  done
  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE

  echo '  <tr style="background-color: lightgray; font-weight: bold; color: black;">' >> $PATH_TO_SUMMARIZE_FILE
  echo '    <td>Score</td>' >> $PATH_TO_SUMMARIZE_FILE
  for app in "${APPS[@]}"; do
    local reportFile="$PATH_TO_LIGHTHOUSE/$app/$pageName-report.report.json"
    echo "    <td>$(jq '.categories.performance.score' $reportFile)</td>" >> $PATH_TO_SUMMARIZE_FILE
  done
  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE
}

echo '<table style="text-align: end">' > $PATH_TO_SUMMARIZE_FILE
generate_table_header_row

echo 'Summarizing report for cart-page...'
generate_summarize_for_page "cart-page" "(page with form input)"

echo 'Summarizing report for product-list-page...'
generate_summarize_for_page "product-list-page" "(contains inline list of ~30 items)"

echo 'Summarizing report for shipping-page...'
generate_summarize_for_page "shipping-page" "(contains list ~200 items fetched via http client)"

echo '</table>' >> $PATH_TO_SUMMARIZE_FILE

echo "DONE: Summarize report is written in $PATH_TO_SUMMARIZE_FILE"
