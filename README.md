# Nexora

Nexora is a MERN stack e-commerce application built with React, Node.js, Express and MongoDB.

The project includes JWT-based authentication, Redux state management, product and cart functionality, and checkout flow. The application was also tested locally using Selenium WebDriver with Python.

## Features

* User registration and login
* JWT-based authentication
* Product listing and product details
* Shopping cart
* Cart quantity management
* Checkout flow
* Redux Toolkit for application state
* REST APIs with Node.js and Express
* MongoDB database
* Local end-to-end testing with Selenium

## Tech Stack

### Frontend

* React.js
* JavaScript
* React Hooks
* Redux Toolkit
* Axios
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST APIs
* JWT Authentication
* MongoDB

### Testing

* Selenium WebDriver
* Python

### Tools

* Git
* GitHub
* Postman

## Application Flow

```text
User
  ↓
React Frontend
  ↓
Redux / Axios
  ↓
Express REST API
  ↓
JWT Authentication
  ↓
MongoDB
```

## Authentication

Nexora uses JWT for user authentication.

After login, the server returns a JWT token. The frontend stores the token and sends it with protected API requests. The backend middleware verifies the token before allowing access to protected routes.

```text
Login
  ↓
Backend verifies credentials
  ↓
JWT generated
  ↓
Token stored on client
  ↓
Token sent with protected requests
  ↓
Backend verifies token
```

## State Management

Redux Toolkit is used to manage application-level state.

The main purpose of Redux in the project is to keep shared data such as authentication information and cart state available across different components without relying on prop drilling.

## Testing

The application was tested using **Selenium WebDriver with Python**.

The Selenium tests were performed against the application running locally on `localhost`. The tests cover user interactions and important application flows from the browser level.

Example flow:

```text
Open Application
      ↓
Login
      ↓
Browse Products
      ↓
Add Product to Cart
      ↓
Update Cart
      ↓
Checkout
```

## Project Structure

```text
Nexora/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── hooks/
│   │   └── ...
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── tests/
│   └── selenium/
│
├── README.md
└── package.json
```

> Folder names may vary depending on the current project structure.

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Nexora
```

### 2. Install dependencies

Install frontend dependencies:

```bash
cd client
npm install
```

Install backend dependencies:

```bash
cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file in the backend and add the required configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Use the environment variables required by your current configuration.

### 4. Start the backend

```bash
cd server
npm run dev
```

### 5. Start the frontend

```bash
cd client
npm run dev
```

The application can then be accessed through the local Vite development URL.

## Selenium Tests

Make sure both the frontend and backend are running locally before executing the Selenium tests.

Install the Python dependencies:

```bash
pip install selenium
```

Run the Selenium test script:

```bash
python <test-file>.py
```

## API

The backend exposes REST APIs for the main application functionality, including:

* Authentication
* Products
* Cart
* Orders
* Payment

Protected endpoints require a valid JWT token.

## What I Worked On

During the development of Nexora, I worked on:

* Building the frontend using React
* Managing shared state with Redux Toolkit
* Implementing JWT authentication
* Creating REST APIs using Node.js and Express
* Connecting the application with MongoDB
* Implementing cart and checkout functionality
* Testing user flows using Selenium and Python
* Debugging frontend and backend API integration

## Project Status

Nexora is a completed learning/project implementation built to practice MERN stack development, authentication, state management, API integration and browser automation testing.

## Author

**Piyush Negi**

Full Stack Developer

* GitHub: `<your-github-profile>`
* Portfolio: `<your-portfolio>`
