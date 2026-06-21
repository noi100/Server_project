# 🎓 Course & User Management API

A robust, enterprise-grade RESTful API backend architecture designed for managing academic or professional educational courses and student/user enrollment registration. 

Built using **Node.js**, **Express**, and **MongoDB** (via Mongoose), this platform strictly adheres to clean architectural design principles separating routing layers, business controllers, database services, data-model validation schema layers, and middleware filters.

---

## ✨ Key Features

- **Course Management Ecosystem:** Full RESTful CRUD operations to discover, register, update, and terminate educational courses containing pricing structures and curriculum definitions.
- **User Enrollment System:** Scalable CRUD operations for registering users/students and associating them directly with specific course tracks.
- **Robust Schema & Data Validation:** Mongoose database schemas with built-in validation mechanisms (e.g., automated structured string checking for the `@` character on user emails).
- **Global Logging Middleware:** Intercepts incoming requests to visually display real-time terminal metrics including execution timestamp, HTTP verb, path parameters, and payload data bodies.
- **Centralized Error Handling Architecture:** Decoupled global error handler middleware combined with a custom `AppError` class subclass wrapper to properly parse runtime operational failures and return sanitized status codes.

---

## 🛠 Tech Stack & Tools

- **Runtime Environment:** Node.js
- **Web Framework:** Express.js (ES Modules import syntax)
- **Database Object Modeling:** MongoDB via Mongoose Object Data Modeling (ODM)
- **Environment Management:** Dotenv system configuration module

---

## 📁 Project Architecture & Layout

The project structure is organized around a highly modular layer separation design:

```text
├── config/
│   └── db.js                 # Established asynchronous connection interface to MongoDB
├── controllers/
│   ├── course.controllers.js # Course request payload parser and response binder
│   └── user.controllers.js   # User request payload parser and response binder
├── middlewares/
│   ├── error.middlewares.js  # Global exception handler & custom operational AppError class
│   └── global.middlewares.js # Interactive logger analyzing incoming methods & endpoints
├── models/
│   ├── modelCourse.js        # Monitored Course collection validation schema layout
│   └── modelUser.js          # Monitored User collection validation schema layout
├── routes/
│   ├── course.route.js       # Mapping course REST endpoints to specific controllers
│   └── users.route.js        # Mapping user REST endpoints to specific controllers
├── services/
│   ├── course.services.js    # Data access service querying Mongoose Course collections
│   └── user.services.js      # Data access service querying Mongoose User collections
├── app.js                    # Core Express initialization, JSON middleware binding & routes mounting
├── index.js                  # Environment configuration mapper object (.env wrapper)
└── server.js                 # Network listener bootstrap mounting database connection
