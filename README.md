# Hotel Room Reservation System

## Overview
This is a hotel room reservation system that optimally assigns rooms based on availability and travel time constraints. The system consists of a **React.js frontend** and a **Node.js backend**.

## Live Demo
- **Frontend:** https://unstop-assessment-frontend-eight.vercel.app/ (Production) |  http://localhost:5173/ (Localhost)
- **Backend:** https://unstop-assessment-backend.onrender.com (Production) | http://localhost:5000/ (Backend)

## Local Setup

### Backend Setup
2. Navigate to the backend folder:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the `backend` directory and add the following:
   ```sh
   PORT=5000
   DATABASE_URL=mongodb+srv://rahulrana2000rr:NrHTRidvjFh8mLYV@reservations.2kqff.mongodb.net/ (I know it should not ne here.)
   ```
5. Start the backend server:
   ```sh
   npm start
   ```
   The backend will be running on **http://localhost:5000**.

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the `frontend` directory and add the following:
   ```sh
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```
4. Start the frontend application:
   ```sh
   npm start
   ```
   The frontend will be running on **http://localhost:5173/**.

## Usage
- Open **http://localhost:5173/** in a browser.

## Deployment
Backend is deployed on **Render**.
Frontend is deployed on **Vercel**
