### TypeScript + Mongoose + MongoDB + Express API Server

## Prerequisites

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

Clone the repository and run

    $ yarn   # or npm install

Make a copy of `.env.example` as `.env` and update your application details and database credentials.

Bring up stack,

    $ docker-compose up

Navigate to http://localhost/api-docs/ to verify application is running from docker.

Bring down stack,

    $ docker-compose down

## Tests

    $ yarn test


