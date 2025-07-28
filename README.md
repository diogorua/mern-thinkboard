# mern-thinkboard

This project is a complete notes application using MongoDB, Express, React and Node.js with important features like rate limiting (using Upstash, a serveless data platform) and responsive design.

You can see the notes application [here](https://mern-thinkboard-5f1v.onrender.com)

## Highlights:

- 🧱 Full-Stack App Built with the MERN Stack (MongoDB, Express, React, Node)
- ✨ Create, Update and Delete Notes with Title and Description
- 🛠️ Build and Test a Fully functional REST API
- ⚙️ Rate Limiting with Upstash Redis
- 🚀 Completely Responsive UI

## .env Setup

### ```/backend```

```
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

## 🔧 Run the backend

```cd backend```

```npm install```

```npm run dev```

## 🖥️ Run the frontend

```cd frontend```

```npm install```

```npm run dev```
