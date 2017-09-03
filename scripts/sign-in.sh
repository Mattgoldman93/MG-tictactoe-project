#!/bin/bash

# sh scripts/sign-in.sh

API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
URL_PATH="/post"
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode ''

echo
