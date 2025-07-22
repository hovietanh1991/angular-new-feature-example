#!/usr/bin/env bash

# List of Angular applications
APPS=("angular-classic" "angular-zoneless" "angular-zoneless-signal" "angular-zoneless-signal-standalone" "angular-zoneless-signal-standalone-on-push")

PATH_TO_APPS="../../dist/apps"
PATH_TO_LIGHTHOUSE="../../dist/lighthouse"
PATH_TO_SUMMARIZE_FILE="$PATH_TO_LIGHTHOUSE/summarize-file-size.md"

generate_table_header_row() {
  echo "  <tr>" >> $PATH_TO_SUMMARIZE_FILE

  # Iterate over all applications
  for app in "${APPS[@]}"; do
    echo "    <th>$app</th>" >> $PATH_TO_SUMMARIZE_FILE
  done

  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE
}

generate_summarize_file_size() {
  echo "  <tr>" >> $PATH_TO_SUMMARIZE_FILE
  for app in "${APPS[@]}"; do
    local appFolder="$PATH_TO_APPS/$app/browser/"
    echo "    <td>" >> $PATH_TO_SUMMARIZE_FILE
    ls -ltrnh $appFolder | grep '.js' | awk '{print "      <code>" $5,$9 "</code><br/>"}' >> $PATH_TO_SUMMARIZE_FILE
    echo "    </td>" >> $PATH_TO_SUMMARIZE_FILE
  done
  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE
}

generate_summarize_total_size() {
  echo "  <tr>" >> $PATH_TO_SUMMARIZE_FILE
  for app in "${APPS[@]}"; do
    local appFolder="$PATH_TO_APPS/$app/browser/"
    echo "    <td>" >> $PATH_TO_SUMMARIZE_FILE
    du -sh $appFolder | awk 'NR==1 {print "      <code>" $1 "</code>"}' >> $PATH_TO_SUMMARIZE_FILE
    echo "    </td>" >> $PATH_TO_SUMMARIZE_FILE
  done
  echo "  </tr>" >> $PATH_TO_SUMMARIZE_FILE
}

echo '<table style="text-align: end">' > $PATH_TO_SUMMARIZE_FILE
generate_table_header_row

echo 'Summarizing file size...'
generate_summarize_file_size

echo 'Summarizing total size...'
generate_summarize_total_size

echo '</table>' >> $PATH_TO_SUMMARIZE_FILE

echo "DONE: Summarize report is written in $PATH_TO_SUMMARIZE_FILE"
