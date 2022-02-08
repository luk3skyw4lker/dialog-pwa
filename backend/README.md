# Dialog PWA Test Backend

Chamada curl funcional:

```
curl -g \
-X POST \
-H "Content-Type: application/json" \
-d '{"query":"query{list(name: \"D\"){_id age company email eyeColor index name phone picture}}"}' \
http://localhost:4000/graphql
```
