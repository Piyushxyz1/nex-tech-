# Nexora

Nexora is a MERN stack e-commerce application built using React, Node.js, Express and MongoDB.

The project includes JWT-based authentication, Redux state management, product and cart functionality, and checkout flow. The application was also tested locally using Selenium WebDriver with Python.

## Features

* User registration and login
* JWT-based authentication
* Product listing and product details
* Shopping cart
* Cart quantity management
* Checkout flow
* Redux Toolkit for application state management
* REST APIs using Node.js and Express
* MongoDB database
* Local browser testing using Selenium

## Tech Stack

**Frontend**

* React.js
* JavaScript
* React Hooks
* Redux Toolkit
* Axios
* HTML5
* CSS3

**Backend**

* Node.js
* Express.js
* REST APIs
* JWT
* MongoDB

**Testing**

* Selenium WebDriver
* Python

**Tools**

* Git
* GitHub
* Postman

## Application Flow

User → React Frontend → Redux / Axios → Express REST API → JWT Authentication → MongoDB

## Authentication

Nexora uses JWT-based authentication.

After a successful login, the backend generates a JWT token. The frontend stores the token and sends it with protected API requests. Backend middleware verifies the token before allowing access to protected routes.

## State Management

Redux Toolkit is used for managing shared application state.

It is mainly used for authentication-related data and cart state so that this information can be accessed across different components.

## Testing

The application was tested using Selenium WebDriver with Python.

Testing was performed against the application running locally on `localhost`. Selenium was used to automate browser interactions and test important user flows.

The tested flow includes:

Login → Browse Products → Add to Cart → Update Cart → Checkout

## Getting Started

### Clone the Repository

Clone the Nexora repository and navigate to the project directory.

### Install Dependencies

Install the required dependencies for both the frontend and backend using npm.

### Environment Variables

Configure the required backend environment variables such as:

* MongoDB connection string
* JWT secret
* Server port

### Run the Application

Start the backend and frontend development servers separately and open the local frontend URL in your browser.

## Selenium Testing

Make sure the frontend and backend are running locally before executing the Selenium tests.

The Selenium test scripts are written in Python and use Selenium WebDriver to interact with the application through the browser.

## API

The backend provides REST APIs for the main application functionality, including:

* Authentication
* Products
* Cart
* Orders
* Payment

Protected APIs require a valid JWT token.

## Development Work

The main development work included:

* Building the frontend with React
* Using React Hooks for component logic
* Managing application state with Redux Toolkit
* Implementing JWT authentication
* Developing REST APIs with Node.js and Express
* Integrating MongoDB
* Implementing cart and checkout functionality
* Testing user flows with Selenium and Python
* Debugging frontend and backend API integration

## Project Status

Nexora is a completed MERN stack project developed to practice full-stack application development, authentication, state management, API integration and browser automation testing.

## Author

**Piyush Negi**

Full Stack Developer

GitHub: `<your-github-profile>`

Portfolio: `<your-portfolio>`
