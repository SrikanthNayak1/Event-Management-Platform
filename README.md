Project live link 
https://cerebrascoder.com/p/266432
![Image](https://github.com/user-attachments/assets/3ff126fa-43e8-484f-8221-0189e03508c6)


Event Management Platform
A full-stack web application that allows users to create, manage, and view events in real-time.

Live Demo
Frontend: Deployed on Vercel
Backend: Deployed on Render
📌 Features
Frontend (React.js)
✅ User Authentication (Register/Login with JWT)
✅ Event Dashboard (View upcoming and past events)
✅ Event Creation Form (Title, Description, Date, Image Upload)
✅ Real-Time Attendee Count (WebSockets)
✅ Responsive UI

Backend (Node.js + Express.js)
✅ Secure JWT Authentication
✅ Event Management API (CRUD operations)
✅ Real-Time Updates with Socket.IO
✅ MongoDB Atlas or Planetscale Database

🛠 Tech Stack
Frontend
React.js
Axios (API calls)
React Router (Navigation)
Tailwind CSS / Material UI
Backend
Node.js with Express.js
MongoDB Atlas / Planetscale
JWT (Authentication)
Socket.IO (Real-Time)
Cloudinary (Image Hosting)
Deployment
Frontend: Vercel / Netlify
Backend: Render / Railway.app
Database: MongoDB Atlas / Planetscale
🚀 Installation Guide
1️⃣ Clone the Repositories
sh
Copy
Edit
git clone https://github.com/yourusername/event-management-frontend.git
git clone https://github.com/yourusername/event-management-backend.git
2️⃣ Backend Setup
sh
Copy
Edit
cd event-management-backend
npm install
Create a .env file in the backend folder
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://<your-mongodb-url>
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Start the backend server:

sh
Copy
Edit
npm start
3️⃣ Frontend Setup
sh
Copy
Edit
cd ../event-management-frontend
npm install
npm start
🛠 API Endpoints
Authentication
POST /api/auth/register → Register a new user
POST /api/auth/login → Login and receive JWT token
Events
POST /api/events → Create an event
GET /api/events → Get all events
GET /api/events/:id → Get event details
PUT /api/events/:id → Update event
DELETE /api/events/:id → Delete event
📝 Test User Credentials
json
Copy
Edit
{
  "email": "testuser@example.com",
  "password": "testpassword"
}
📸 Screenshots
Include screenshots of the UI.

🔗 Links
Frontend Repo: GitHub
Backend Repo: GitHub
Live Frontend: Vercel
Live Backend: Render
🙌 Contributing
Want to contribute? Fork the repository and submit a PR.

📜 License
This project is open-source and available under the MIT License.


