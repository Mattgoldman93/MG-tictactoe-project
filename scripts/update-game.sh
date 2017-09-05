curl --include --request POST "http://tic-tac-toe.wdibos.com/games/${ID}" \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "passwords": {
  }
}'

echo
