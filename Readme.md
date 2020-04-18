# Install

```sh
git clone git@github.com:Micka33/dataviz-cubejs.git
cd dataviz-cubejs
touch .env
npm install
```

# Fill in .env file

```
CUBEJS_DB_BQ_PROJECT_ID=<YOUR_DB_BQ_PROJECT_ID>
CUBEJS_DB_BQ_KEY_FILE=<YOUR_DB_BQ_KEY_FILE>
CUBEJS_DB_TYPE=bigquery
CUBEJS_API_SECRET=<SECRET>
```

1. Get your Google Cloud Project id and fill in `CUBEJS_DB_BQ_PROJECT_ID`. Or [Create a Google Cloud Project](https://console.cloud.google.com/projectcreate)
2. Get your Google Key file path and fill in `CUBEJS_DB_BQ_KEY_FILE`. Or:
    - [Create a service account in your project](https://console.cloud.google.com/iam-admin/serviceaccounts/create)
    - Add the following roles: `BigQuery Data Viewer`, `BigQuery Metadata Viewer` and `BigQuery Job User`
    - Create key (JSON) and store it (eg: ~/.gcloud/keyname.json)
    - Set the path in your .env file

# Run Backend

```sh
npm run dev
```

Visit [http://localhost:4000/#/build](http://localhost:4000/#/build)

# Run Client

Either through the backend. 
Or

```sh
cd dashboard-app
npm start
```

Visit [http://localhost:3000/](http://localhost:3000/)