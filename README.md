# Node.js Products API

[![CI](https://github.com/MELNYCHUK-spec/node-app/actions/workflows/ci.yml/badge.svg)](https://github.com/MELNYCHUK-spec/node-app/actions/workflows/ci.yml)

A RESTful API built with Node.js, Express, and SQLite for managing products. This application provides full CRUD (Create, Read, Update, Delete) operations.
## Features

- ✅ RESTful API with Express.js
- ✅ SQLite database for data persistence
- ✅ CORS support for cross-origin requests
- ✅ Environment variable configuration
- ✅ Comprehensive unit tests with Jest

## Prerequisites

- Node.js 18.x or 20.x
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/MELNYCHUK-spec/node-app.git
cd node-app
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (optional):
```bash
cp .env.example .env
```

Edit `.env` file to set custom ports:
```
PORT=5000
CLIENT_PORT=3000
```

## Usage

### Start the server

```bash
npm start
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## Project Structure

```
node-app/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI/CD configuration
├── index.js                # Main application file
├── test.js                 # Test suite
├── jest.config.js          # Jest configuration
├── package.json            # Project dependencies
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Testing

The project includes comprehensive tests covering all CRUD operations:

- Create product
- Read all products
- Read single product
- Update product
- Delete product
- Error handling (404 cases)



