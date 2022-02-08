# Dialog PWA Test Backend

Chamada curl funcional:

```bash
curl -g \
-X POST \
-H "Content-Type: application/json" \
-d '{"query":"query{list(name: \"dot jen\"){_id age company email eyeColor index name phone picture}}"}' \
http://localhost:4000/graphql
```

Resultado esperado:

```json
{
	"data": {
		"list": [
			{
				"_id": "5f1d7f3e5dc58af42fc39242",
				"age": 32,
				"company": "HOPELI",
				"email": "dotsonjennings@hopeli.com",
				"eyeColor": "blue",
				"index": 0,
				"name": "Dotson Jennings",
				"phone": "+1 (919) 551-3493",
				"picture": "https://i.pravatar.cc/200?u=5f1d7f3e5dc58af42fc39242"
			}
		]
	}
}
```
