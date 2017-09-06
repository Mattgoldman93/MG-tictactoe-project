
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
--header "Authorization: Token token=$TOKEN" \
--include \
--request GET

echo
