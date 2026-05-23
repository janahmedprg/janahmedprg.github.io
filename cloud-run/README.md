# Cloud Run Runpod Proxy

This service keeps the Runpod API key off the GitHub Pages frontend.

## Deploy From Source

From this directory:

```sh
printf "your_runpod_key_here" | gcloud secrets create RUNPOD_API_KEY --data-file=-
```

```sh
gcloud run deploy personal-web-runpod-proxy \
  --source . \
  --region us-east1 \
  --allow-unauthenticated \
  --set-env-vars "^|^RUNPOD_ENDPOINT=https://api.runpod.ai/v2/l1jz4gjpz9u3bq|ALLOWED_ORIGIN=https://janahmedprg.github.io,http://localhost:3000" \
  --set-secrets RUNPOD_API_KEY=RUNPOD_API_KEY:latest
```

Cloud Run will build the container for you from `package.json` and `server.js`.

Then set the React build-time env var to the Cloud Run URL:

```sh
REACT_APP_LLM_CHAT_ENDPOINT=https://YOUR_CLOUD_RUN_URL/runpod-chat
```

For local testing:

```sh
RUNPOD_API_KEY=your_key_here \
ALLOWED_ORIGIN=http://localhost:3000 \
npm start
```
