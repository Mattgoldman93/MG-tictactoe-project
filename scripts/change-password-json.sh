#!/bin/bash

# ID=113 OLDPW="papas" NEWPW="huevos" TOKEN=BAhJIiU0Nzk3YjA5ZGIzMmMxYmVjMzRiNzUyNGI1MTlkMjU1ZAY6BkVG--a0f46370727c8eda35022139114190545066dd07 sh scripts/change-password-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"

API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
--include \
--request PATCH \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "passwords": {
    "old": "'"${OLDPW}"'",
    "new": "'"${NEWPW}"'"
  }
}'

echo
