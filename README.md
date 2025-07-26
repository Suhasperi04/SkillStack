# SkillStack

   ```bash
   https://skill-stack-nine.vercel.app/
   ```

A full-stack Learning Management System built with React, Node.js, and MongoDB.

## 🚀 Features

- **User Authentication**: Secure login/register system
- **Course Management**: Create, edit, and manage courses
- **Lecture System**: Upload and manage course lectures
- **Student Dashboard**: Track learning progress
- **Admin Panel**: Comprehensive admin interface
- **Payment Integration**: Stripe payment processing
- **File Upload**: Cloudinary integration for media files
- **Responsive Design**: Modern UI with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Radix UI Components

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Multer (File Upload)
- Cloudinary (Cloud Storage)
- Stripe (Payment Processing)
- bcryptjs (Password Hashing)

## 📁 Project Structure

```
lms/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── features/      # Redux slices
│   │   ├── layout/        # Layout components
│   │   └── lib/           # Utility functions
│   └── public/            # Static assets
└── server/                # Node.js backend
    ├── controllers/       # Route controllers
    ├── models/           # Database models
    ├── routes/           # API routes
    ├── middlewares/      # Custom middlewares
    ├── database/         # Database connection
    └── uploads/          # File uploads
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd lms
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` file in the server directory:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

5. **Run the application**

   **Start the server:**
   ```bash
   cd server
   npm run dev
   ```

   **Start the client (in a new terminal):**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000
