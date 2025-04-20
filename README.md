

```markdown
# 🐘 Express + PostgreSQL (Docker) User API

This project is a simple RESTful API built with **Express.js** and **PostgreSQL**, containerized using **Docker**. It provides CRUD functionality for user management.

## 🧱 Features

- Create, Read, Update, and Delete (CRUD) users
- Input validation using Joi
- Centralized error handling middleware
- PostgreSQL integration with Docker
- Environment-based configuration

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Set up environment variables

Create a `.env` file in the `config` or root directory:

```dotenv
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=userdb
```

### 3. Run PostgreSQL with Docker

Make sure Docker is installed, then run:

```bash
docker run --name user-db -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_DB=userdb -p 5432:5432 -d postgres
```

### 4. Install dependencies

```bash
npm install
```

### 5. Create the users table

Run this script once to initialize the DB table:

```bash
node scripts/createUserTable.js
```

### 6. Start the server

```bash
npm run dev
```

---

## 📬 API Endpoints

| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| GET    | `/user`          | Get all users        |
| GET    | `/user/:id`      | Get user by ID       |
| POST   | `/user`          | Create a new user    |
| PUT    | `/user/:id`      | Update user by ID    |
| DELETE | `/user/:id`      | Delete user by ID    |

All user inputs are validated using Joi for schema consistency.

---

## 🧪 Project Structure

```
├── config/
│   └── db.js                 # PostgreSQL connection setup
├── controllers/
│   └── userController.js     # Request handling logic (not included in uploads)
├── middlewares/
│   ├── errorHandler.js       # Centralized error handler
│   └── inputValidator.js     # Input validation middleware
├── models/
│   └── userModel.js          # DB query logic
├── routes/
│   └── userRoutes.js         # Express route definitions
├── scripts/
│   └── createUserTable.js    # User table creation
├── data.sql                  # Sample data insert (if applicable)
└── server.js                 # Entry point for API server (assumed)
```

---

## 📦 Sample SQL Script

If you want to preload data, run:

```bash
psql -h localhost -U postgres -d userdb -f data.sql
```

---

## 🙌 Contributing

PRs and suggestions welcome! Make sure to open an issue first to discuss major changes.

---

## 📄 License

[MIT](LICENSE)
```



Let me know if you'd like to include `docker-compose`, Swagger docs, or instructions for deployment!
