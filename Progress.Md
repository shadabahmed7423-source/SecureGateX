# API Documentation

This document lists all APIs created so far for the SecureGateX backend, including HTTP methods, endpoints, request/response formats, authentication requirements, and brief descriptions.

---

## Authentication APIs

### 1. Register User

- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "accessToken": "jwt_token",
    "refreshToken": "jwt_refresh_token",
    "user": {
      "id": "string",
      "name": "string",
      "email": "string"
    }
  }
  ```
- **Description:** Registers a new user and returns JWT tokens.

---

### 2. Login User

- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "accessToken": "jwt_token",
    "refreshToken": "jwt_refresh_token",
    "user": {
      "id": "string",
      "name": "string",
      "email": "string"
    }
  }
  ```
- **Description:** Authenticates user and returns JWT tokens.

---

### 3. Refresh Access Token

- **Endpoint:** `/auth/refresh-token`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "refreshToken": "jwt_refresh_token"
  }
  ```
- **Response:**
  ```json
  {
    "accessToken": "jwt_token"
  }
  ```
- **Description:** Returns a new access token using a valid refresh token.

---

### 4. Logout

- **Endpoint:** `/auth/logout`
- **Method:** `POST`
- **Headers:**  
  `Authorization: Bearer <accessToken>`
- **Response:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```
- **Description:** Logs out the user (optional: invalidates refresh token).

---

### 5. Get Current User Profile

- **Endpoint:** `/user/me`
- **Method:** `GET`
- **Headers:**  
  `Authorization: Bearer <accessToken>`
- **Response:**
  ```json
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "string",
    "joined": "date"
  }
  ```
- **Description:** Returns the authenticated user's profile.

---

## Standards Used

- **Authentication:** JWT (access and refresh tokens)
- **Request/Response Format:** JSON
- **Status Codes:**  
  - `200 OK` for success  
  - `201 Created` for resource creation  
  - `400 Bad Request` for validation errors  
  - `401 Unauthorized` for authentication errors  
  - `404 Not Found` for missing resources  
  - `500 Internal Server Error` for server errors
- **Headers:**  
  - `Authorization: Bearer <token>` for protected routes

---

> _Update this document as new APIs are added or existing ones are modified._