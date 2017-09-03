#!/bin/bash

# ID=113 TOKEN=BAhJIiUzOTFhNzUyOTI0OGQ0OGExNjQzNjA3YWJhYTVmMjBiYQY6BkVG--d8f9b235a18214db12e2fe316a605389ced9221b sh scripts/sign-out.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/delete?id=$ID"
API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN" \
echo
