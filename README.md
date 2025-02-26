# CRUD App with React and Redux Toolkit

This is a CRUD (Create, Read, Update, Delete) application built using React and Redux Toolkit with `createAsyncThunk` for handling asynchronous operations.

## Features

- **Create User**: Add new user details including name, email, age, gender, and description.
- **Read Users**: Display a list of all users with search and filter functionality.
- **Update User**: Edit existing user details.
- **Delete User**: (Assumed feature) Delete a user.
- **Navigation**: Navigation bar with links to create and read pages.
- **State Management**: Uses Redux Toolkit for state management.
- **Routing**: Uses React Router for navigation between different pages.
- **Responsive Design**: Designed to be responsive and works well on different screen sizes.
- **MockAPI Integration**: Uses [MockAPI](https://mockapi.io/) to simulate backend operations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ashish-off/CRUD-rtk-createAsyncThunk.git
   ```
2. Navigate to the project directory:
   ```bash
   cd crud_app_react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

## API

This project uses a mock API from [MockAPI](https://mockapi.io/) to demonstrate the usage of `createAsyncThunk` for handling asynchronous operations. The API endpoints include:

- `GET /users`: Fetch all users.
- `POST /users`: Create a new user.
- `PUT /users/:id`: Update an existing user.
- `DELETE /users/:id`: Delete a user.

## License

This project is licensed under the MIT License.
