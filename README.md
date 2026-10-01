# 🐘 Express + PostgreSQL User API

This project is a simple RESTful API built with **Express.js** and **PostgreSQL**. It provides CRUD functionality for user management.

## 🧱 Features

- Create, Read, Update, and Delete (CRUD) users
- Input validation using Joi
- Centralized error handling middleware
- PostgreSQL integration (local install or Docker)
- Environment-based configuration

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/thesauravsingh/CRUDApp.git
cd CRUDApp
```

### 2. Set up environment variables

Copy the template and fill in your password (`.env` is ignored by git):

```bash
cp .env.example .env
```

```dotenv
PORT=3001
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=express-crud
```

### 3. Run PostgreSQL

Either use a local install (for example `brew install postgresql@18`, then `createdb express-crud`), or Docker:

```bash
docker run --name user-db -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_DB=express-crud -p 5432:5432 -d postgres
```

### 4. Install dependencies

```bash
npm install
```

### 5. Start the server

```bash
npm run dev
```

The `users` table is created automatically on startup (`src/data/createUserTable.js`).

---

## 📬 API Endpoints

| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| GET    | `/api/user`         | Get all users        |
| GET    | `/api/user/:id`     | Get user by ID       |
| POST   | `/api/user`         | Create a new user    |
| PUT    | `/api/user/:id`     | Update user by ID    |
| DELETE | `/api/user/:id`     | Delete user by ID    |

Request body for POST and PUT: `{"name": "...", "email": "..."}`. All user inputs are validated using Joi for schema consistency.

---

## 🧪 Project Structure

```
src/
├── config/
│   └── db.js                 # PostgreSQL connection pool
├── controllers/
│   └── userController.js     # Request handling logic
├── data/
│   ├── createUserTable.js    # Creates the users table on startup
│   └── data.sql              # Table definition
├── middlewares/
│   ├── errorHandler.js       # Centralized error handler
│   └── inputValidator.js     # Input validation middleware
├── models/
│   └── userModel.js          # DB query logic
├── routes/
│   └── userRoutes.js         # Express route definitions
└── index.js                  # Entry point for the API server
```

---

## 🙌 Contributing

PRs and suggestions welcome! Make sure to open an issue first to discuss major changes.
