#TOKEN=BAhJIiVlY2Y3ZTUyYjMyZjZlYmYxNWYxZjRlYWU2NjE4YjdiMgY6BkVG--33a1a1fba33702242677914f56b5dfc7f4d9a86f sh scripts/create-game.sh
curl --include --request POST "http://tic-tac-toe.wdibos.com/games" \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-type: application/json" \
--data '{
}'

echo
