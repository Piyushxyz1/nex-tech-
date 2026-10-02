# Nexora — MERN E-Commerce Platform

Nexora is a full-stack e-commerce web application built using the **MERN stack**, designed to provide a complete shopping workflow from product discovery to cart management and checkout.

The application uses **React Hooks and Redux Toolkit** for frontend state management and **JWT-based authentication** for securing user sessions and protected backend APIs.

The project was also tested locally using **Selenium with Python** to automate and validate key user workflows against the application running on `localhost`.

---

## Overview

Nexora demonstrates the development of a modern full-stack web application with a focus on:

* Component-based frontend development with React
* Global state management using Redux Toolkit
* JWT-based authentication and protected routes
* RESTful backend APIs
* MongoDB-based data persistence
* Cart and checkout workflows
* Automated browser testing using Selenium
* Local end-to-end workflow validation

---

## Key Features

### Authentication

* User registration and login
* JWT-based authentication
* Protected API routes
* Token-based session handling
* Authentication-aware frontend state

### Product Management

* Product listing and browsing
* Product details
* Category-based product organization
* Search and filtering functionality

### Shopping Cart

* Add products to cart
* Update product quantities
* Remove products from cart
* Persistent cart state through backend APIs
* Redux-based cart state management

### Checkout

* Checkout workflow
* Order-related data handling
* Authentication-protected checkout operations

### Automated Testing

* Browser automation using Selenium
* Python-based test scripts
* End-to-end testing of critical user workflows
* Tests executed against the locally running application

---

## Technology Stack

### Frontend

* React.js
* React Hooks
* Redux Toolkit
* HTML5
* CSS3
* JavaScript
* Axios

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication

### Database

* MongoDB

### Testing

* Selenium WebDriver
* Python

### Development Tools

* Git
* GitHub
* Postman
* VS Code

---

## Application Architecture

Nexora follows a traditional MERN full-stack architecture:

```text
                    ┌──────────────────────┐
                    │      React.js        │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Node.js /        │
                    │     Express.js       │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
                               │ Mongoose
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │       Database       │
                    └──────────────────────┘
```

Authentication flow:

```text
User
  │
  ▼
React Login
  │
  ▼
Express Authentication API
  │
  ▼
Credential Verification
  │
  ▼
JWT Generated
  │
  ▼
Frontend Stores Token
  │
  ▼
Token Sent With Protected Requests
  │
  ▼
JWT Middleware
  │
  ▼
Protected API Resource
```

---

## State Management

Redux Toolkit is used as the centralized state management solution for application-wide state.

The frontend manages important state such as:

* Authentication token
* Authentication status
* Shopping cart
* Cart item quantities

React Hooks are used throughout the application for component state, lifecycle management and interaction with application services.

---

## Authentication

Nexora uses **JSON Web Tokens (JWT)** for authentication.

The general authentication flow is:

```text
Login
  ↓
Backend validates credentials
  ↓
JWT generated
  ↓
Token returned to frontend
  ↓
Token stored on client
  ↓
Protected requests include token
  ↓
Backend middleware validates token
  ↓
Request proceeds to protected controller
```

Protected backend routes validate the JWT before allowing access to authenticated resources.

---

## Selenium Testing

Nexora includes automated browser testing using **Selenium with Python**.

The tests were executed against the application running locally on `localhost`.

### Testing Scope

The Selenium test suite was used to validate important user-facing workflows such as:

* Opening the application
* User authentication
* Navigation
* Product interaction
* Cart operations
* Checkout-related workflows

The purpose of the Selenium implementation was to demonstrate automated end-to-end browser testing rather than production-scale test infrastructure.

### Testing Flow

```text
Selenium + Python
        │
        ▼
Launch Local Application
        │
        ▼
Browser Automation
        │
        ▼
User Interaction
        │
        ▼
Application Response
        │
        ▼
Assertions / Validation
```

---

## Project Structure

A simplified project structure is:

```text
Nexora/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── redux/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── selenium/
│   ├── tests/
│   └── requirements.txt
│
├── .gitignore
├── README.md
└── package.json
```

> The exact directory structure may vary depending on the current project version.

---

## Environment Variables

Create the required environment files for the frontend and backend.

Example backend configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Example frontend configuration:

```env
VITE_API_URL=http://localhost:5000
```

Do not commit `.env` files or secrets to the repository.

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL

cd nexora
```

### 2. Install Backend Dependencies

```bash
cd server

npm install
```

### 3. Configure Backend Environment Variables

Create:

```text
server/.env
```

and add the required configuration.

### 4. Start the Backend

```bash
npm run dev
```

The backend will start on the configured local port.

---

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd client

npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

The React development server will provide the local application URL, typically:

```text
http://localhost:5173
```

---

## Running Selenium Tests

Make sure both the frontend and backend are running locally before executing the Selenium tests.

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Then execute the Selenium test suite:

```bash
python test_file.py
```

Replace `test_file.py` with the appropriate test entry point in the repository.

---

## API Architecture

The backend follows a REST API architecture.

Typical request flow:

```text
React Component
      │
      ▼
Axios / HTTP Request
      │
      ▼
Express Route
      │
      ▼
Authentication Middleware
      │
      ▼
Controller
      │
      ▼
MongoDB
      │
      ▼
JSON Response
      │
      ▼
Redux / React State
      │
      ▼
UI Update
```

---

## Security Considerations

The project implements several basic application security practices:

* JWT-based authentication
* Protected backend routes
* Environment variables for sensitive configuration
* Server-side authentication validation
* `.gitignore` configuration to prevent accidental secret commits

For production deployment, additional security hardening would be required depending on the deployment environment and application requirements.

---

## Testing Approach

The project combines application-level development with automated browser testing.

### Manual Testing

Functional workflows were manually verified during development.

### Automated Testing

Selenium was used to automate browser-based workflows against the locally running application.

This provides coverage for critical user journeys and helps identify regressions during development.

---

## Future Improvements

Potential improvements include:

* Production-grade automated test pipeline
* Expanded Selenium test coverage
* Unit and API integration testing
* CI/CD integration for automated testing
* Containerized deployment
* Kubernetes-based deployment
* Enhanced application monitoring
* Improved test reporting

---

## Learning Outcomes

Through Nexora, the project provided practical experience with:

* Full-stack MERN application development
* React component architecture
* React Hooks
* Redux Toolkit state management
* REST API development
* JWT authentication
* MongoDB integration
* Frontend-backend communication
* Automated browser testing with Selenium
* Python-based test automation
* Git and GitHub workflow

---

## Project Status

**Status:** Completed / Maintained

Nexora was developed as a full-stack learning and portfolio project with a focus on practical MERN development, authentication, state management and automated end-to-end testing.

---

## Author

### Piyush Negi

**Full Stack Developer | DevOps**

* GitHub: YOUR_GITHUB_URL
* LinkedIn: YOUR_LINKEDIN_URL
* Portfolio: YOUR_PORTFOLIO_URL
