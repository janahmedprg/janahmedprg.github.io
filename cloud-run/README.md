# Cloud Run Runpod Proxy

This service keeps the Runpod API key off the GitHub Pages frontend.

It uses Firestore to enforce the per-IP prompt limit across Cloud Run restarts
and scaled instances. The raw IP is not stored; the document id is a salted
SHA-256 hash of the client IP.

## Firestore Setup

Enable Firestore in the same Google Cloud project as Cloud Run, then make sure
the Cloud Run service account can read/write Firestore documents. The default
Compute service account usually works if you grant it a Firestore role such as
`Cloud Datastore User`.

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
  --set-env-vars "^|^RUNPOD_ENDPOINT=https://api.runpod.ai/v2/jev8kihe4yxycu|ALLOWED_ORIGIN=https://janahmedprg.github.io,http://localhost:3000|MAX_PROMPT_LENGTH=100|MAX_PROMPTS_PER_IP=5|PROMPT_LIMIT_WINDOW_MS=604800000|FIRESTORE_DATABASE_ID=runpod-ip-limiter|FIRESTORE_COLLECTION=runpodPromptLimits|IP_HASH_SALT=change-this-salt" \
  --set-secrets RUNPOD_API_KEY=RUNPOD_API_KEY:latest
```

Cloud Run will build the container for you from `package.json` and `server.js`.

Then set the React build-time env var to the Cloud Run URL:

```sh
REACT_APP_LLM_CHAT_ENDPOINT=https://YOUR_CLOUD_RUN_URL/runpod-chat
REACT_APP_LLM_PROMPT_LIMIT=100
```

For local testing:

```sh
RUNPOD_API_KEY=your_key_here \
ALLOWED_ORIGIN=http://localhost:3000 \
MAX_PROMPT_LENGTH=100 \
MAX_PROMPTS_PER_IP=5 \
PROMPT_LIMIT_WINDOW_MS=604800000 \
FIRESTORE_DATABASE_ID=runpod-ip-limiter \
FIRESTORE_COLLECTION=runpodPromptLimits \
IP_HASH_SALT=change-this-salt \
npm start
```

`MAX_PROMPTS_PER_IP` counts prompt submissions that pass local validation per
client IP within the configured window. Polling a running Runpod job does not
count against the limit.
