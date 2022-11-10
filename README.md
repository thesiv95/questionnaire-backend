# Setup instructions

1. `npm i`
2. set environment variables in `.env` file (see `.env.example`)
3. `npm start`
4. you can use Postman configuration (see `postman.json`) - set `baseURL` variable (in this file port is `3333`)
5. create DB with `questionnare` name
6. run `POST <your_server_url>/dbInit` query - demo data will be inserted into DB
7. table schemas are also included