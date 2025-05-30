#  NayaCircle- Final Project Requirements & Wireframe

## 🎯 Project Overview
**FindFriend** is a map-first platonic social connection platform designed to help relocating individuals find genuine local friendships through verified, location-based matching.

---

## 🧱 Final Tech Stack

### Frontend
- **React.js** with **Tailwind CSS**
- **React Router** for navigation
- **React Leaflet** or **Google Maps React** for interactive maps
- **Axios** for API calls
- **React Hook Form** for form management

### Backend
- **Node.js** with **Express.js**
- **Socket.io** for real-time chat
- **Multer** for image uploads
- **Helmet** for security headers
- **Rate limiting** middleware

### Database & Storage
- **MongoDB** with **Mongoose ODM**
- **Cloudinary** for image storage
- **Redis** for session management

### Authentication & Verification
- **Clerk API** for email verification & user management
- **DigiLocker API** for Aadhaar verification
- **JWT** for secure API authentication

### Maps & Location
- **Google Maps API** or **Mapbox API**
- **Browser Geolocation API**
- **Geocoding API** for address conversion

### Deployment
- **Frontend**: Vercel/Netlify
- **Backend**: Railway/Heroku
- **Database**: MongoDB Atlas

---

## 🔐 Complete Authentication Flow

### Step 1: Email Signup (Clerk)
```
1. User visits landing page
2. Clicks "Join Now"
3. Clerk handles email signup + verification
4. User receives email confirmation
5. Redirected to profile setup
```

### Step 2: Profile Setup
```
1. Basic info: Name, Age, Bio
2. Interests selection (multi-select)
3. Purpose selection: Study buddy, Coffee friend, Evening walks, etc.
4. Profile photo upload
5. Location permission request
```

### Step 3: Identity Verification (Optional but Recommended)
```
1. DigiLocker integration for Aadhaar verification
2. User gets "Government ID Verified" badge
3. Higher visibility in search results
```

---

## 🗺️ Map-First Core Features

### 1. Interactive Map Dashboard
- **Default view**: User's location with 5km radius
- **User pins**: Different colors for verification status
- **Cluster markers**: Group nearby users
- **Distance circles**: 1km, 3km, 5km, 10km options
- **Real-time updates**: New users appear automatically

### 2. Smart Filtering System
```
Sidebar Filters:
├── Distance: 1km - 50km slider
├── Age Range: 18-25, 26-35, 36-45, 45+
├── Interests: Checkboxes (max 5 selections)
├── Availability: Morning, Afternoon, Evening, Weekend
├── Verification: Verified only toggle
└── Gender: All, Same gender, Opposite gender
```

### 3. Profile Preview Popup
```
When user clicks map pin:
├── Profile photo + verification badge
├── Name, Age, Distance (e.g., "2.3km away")
├── Top 3 interests as tags
├── Purpose/Looking for text
├── "Send Friend Request" button
└── "View Full Profile" link
```

### 4. Connection Request System
```
Friend Request Flow:
1. Click "Send Friend Request"
2. Popup: Write short intro message (max 150 chars)
3. Send request
4. Recipient gets notification
5. Accept/Decline with optional message
6. If accepted → Chat unlocked
```

### 5. Chat & Meeting System
```
Chat Features:
├── Text messaging only (no media initially)
├── "Suggest Meeting" button
├── Meeting confirmation system
├── Post-meeting feedback option
└── Report/Block functionality
```

---

## 🎨 Wireframe Structure

### Landing Page
```
┌─────────────────────────────────────────┐
│ [LOGO] FindFriend    [Login] [Sign Up]  │
├─────────────────────────────────────────┤
│                                         │
│     Make Real Friends. Nearby.          │
│           Verified.                     │
│                                         │
│    [Join Now - It's Free]              │
│                                         │
│  📍 Location-First  ✅ Verified         │
│  🤝 Platonic Only   🛡️ Safe           │
│                                         │
│           How It Works                  │
│  1. Sign Up  2. Get Verified  3. Meet  │
│                                         │
│         [Testimonials Section]          │
└─────────────────────────────────────────┘
```

### Main Dashboard (Map View)
```
┌─────────────────────────────────────────┐
│ [☰] FindFriend    [🔔] [👤Profile]     │
├──────────┬──────────────────────────────┤
│ FILTERS  │                              │
│          │        INTERACTIVE           │
│ Distance │          MAP                 │
│ [1-50km] │                              │
│          │     📍 You are here          │
│ Age      │                              │
│ [18-45]  │  🔵 John(2km) 🟢 Sarah(1km) │
│          │                              │
│ Interests│  🔴 Mike(5km) 🟡 Priya(3km) │
│ [☑Study] │                              │
│ [☑Coffee]│                              │
│          │                              │
│ [Apply]  │     [Zoom: + -]  [📍My Loc] │
└──────────┴──────────────────────────────┘
```

### Profile Preview Popup
```
┌─────────────────────────────────────────┐
│                    ✕                    │
│  [📸 Profile Photo]     ✅ Verified     │
│                                         │
│  Sarah, 24 • 1.2km away                │
│                                         │
│  🎯 Coffee ☕ Reading 📚 Movies 🎬       │
│                                         │
│  "Looking for study buddies and         │
│   weekend coffee companions!"           │
│                                         │
│  [Send Friend Request] [View Profile]   │
└─────────────────────────────────────────┘
```

### Friend Request Modal
```
┌─────────────────────────────────────────┐
│           Send Friend Request           │
├─────────────────────────────────────────┤
│  To: Sarah, 24                          │
│                                         │
│  Write a short intro message:           │
│  ┌─────────────────────────────────────┐ │
│  │ Hi! I'm also looking for study      │ │
│  │ buddies. Would love to connect!     │ │
│  │                                     │ │
│  └─────────────────────────────────────┘ │
│  Characters: 67/150                     │
│                                         │
│  [Cancel]              [Send Request]   │
└─────────────────────────────────────────┘
```

### Chat Interface
```
┌─────────────────────────────────────────┐
│ ← Sarah • Online                        │
├─────────────────────────────────────────┤
│                                         │
│  Sarah: Thanks for connecting! 😊        │
│                              2:30 PM    │
│                                         │
│      You: Hi! Ready to study together? │
│                              2:35 PM    │
│                                         │
│  Sarah: Yes! Coffee tomorrow?           │
│                              2:36 PM    │
│                                         │
│             [Suggest Meeting]           │
│                                         │
├─────────────────────────────────────────┤
│ [Type your message...]        [Send]    │
└─────────────────────────────────────────┘
```

---

## 📊 Database Schema

### Users Collection
```javascript
{
  clerkId: String,
  email: String,
  name: String,
  age: Number,
  bio: String,
  profilePhoto: String,
  location: {
    type: "Point",
    coordinates: [longitude, latitude]
  },
  interests: [String],
  purpose: [String],
  isVerified: Boolean,
  verificationDate: Date,
  isActive: Boolean,
  lastSeen: Date,
  createdAt: Date
}
```

### Connections Collection
```javascript
{
  requester: ObjectId,
  recipient: ObjectId,
  status: "pending" | "accepted" | "declined",
  message: String,
  requestDate: Date,
  responseDate: Date
}
```

### Messages Collection
```javascript
{
  connectionId: ObjectId,
  sender: ObjectId,
  message: String,
  timestamp: Date,
  isRead: Boolean
}
```

---

## 🚀 Development Phases

### Phase 1: MVP (4-6 weeks)
- Clerk authentication setup
- Basic map with user pins
- Profile creation & management
- Simple friend request system
- Basic chat functionality

### Phase 2: Enhanced Features (2-3 weeks)
- DigiLocker verification
- Advanced filtering
- Meeting suggestion system
- Real-time notifications

### Phase 3: Polish & Deploy (1-2 weeks)
- UI/UX improvements
- Performance optimization
- Security enhancements
- Production deployment

---

## 🛡️ Security & Privacy Features

1. **Data Protection**: All personal data encrypted
2. **Location Privacy**: Approximate location only (500m radius)
3. **Report System**: Quick reporting for inappropriate behavior
4. **Moderation**: Automated + manual content moderation
5. **Block Function**: Instant blocking with no trace back
6. **Safe Meeting**: In-app meeting confirmation system

---

## 📈 Success Metrics

- **User Engagement**: Daily active users, session duration
- **Connection Quality**: Accepted friend requests ratio
- **Meeting Success**: Confirmed real-world meetings
- **User Retention**: 7-day and 30-day retention rates
- **Safety Score**: Reports per user ratio

---

This is a **strong, industry-level project** that demonstrates:
✅ Full-stack development skills
✅ Real-world problem solving
✅ User experience design
✅ Security considerations
✅ Scalable architecture



## 📁 Complete File Structure

### Frontend (React.js)
```
NayaCircle-frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── Modal.jsx
│   │   ├── auth/
│   │   │   ├── SignUp.jsx
│   │   │   ├── SignIn.jsx
│   │   │   └── ProfileSetup.jsx
│   │   ├── map/
│   │   │   ├── MapContainer.jsx
│   │   │   ├── UserPin.jsx
│   │   │   ├── ProfilePopup.jsx
│   │   │   └── FilterSidebar.jsx
│   │   ├── profile/
│   │   │   ├── UserProfile.jsx
│   │   │   ├── EditProfile.jsx
│   │   │   └── VerificationBadge.jsx
│   │   ├── connections/
│   │   │   ├── FriendRequestModal.jsx
│   │   │   ├── ConnectionsList.jsx
│   │   │   └── PendingRequests.jsx
│   │   └── chat/
│   │       ├── ChatInterface.jsx
│   │       ├── MessageBubble.jsx
│   │       ├── ChatList.jsx
│   │       └── MeetingSuggestion.jsx
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── ChatPage.jsx
│   │   ├── SettingsPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useGeolocation.js
│   │   ├── useSocket.js
│   │   └── useLocalStorage.js
│   ├── services/
│   │   ├── api.js
│   │   ├── mapService.js
│   │   ├── socketService.js
│   │   └── clerkService.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validation.js
│   │   └── formatters.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── SocketContext.jsx
│   │   └── LocationContext.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tailwind.css
│   │   └── components.css
│   ├── App.jsx
│   ├── index.js
│   └── setupTests.js
├── package.json
├── tailwind.config.js
├── .env.local
├── .gitignore
└── README.md
```

### Backend (Node.js + Express)
```
findfriend-backend/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── connectionController.js
│   │   ├── chatController.js
│   │   └── verificationController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Connection.js
│   │   ├── Message.js
│   │   └── Report.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── connections.js
│   │   ├── chat.js
│   │   └── verification.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   ├── rateLimiter.js
│   │   ├── errorHandler.js
│   │   └── cors.js
│   ├── services/
│   │   ├── clerkService.js
│   │   ├── digiLockerService.js
│   │   ├── mapService.js
│   │   ├── uploadService.js
│   │   └── notificationService.js
│   ├── utils/
│   │   ├── database.js
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   └── logger.js
│   ├── config/
│   │   ├── database.js
│   │   ├── redis.js
│   │   ├── cloudinary.js
│   │   └── environment.js
│   ├── sockets/
│   │   ├── socketHandler.js
│   │   ├── chatEvents.js
│   │   └── connectionEvents.js
│   └── app.js
├── tests/
│   ├── unit/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── services/
│   └── integration/
│       ├── auth.test.js
│       ├── users.test.js
│       └── connections.test.js
├── package.json
├── .env
├── .env.example
├── .gitignore
├── server.js
└── README.md
```

### Database Collections Structure

#### MongoDB Collections
```
findfriend_db/
├── users
├── connections
├── messages
├── reports
├── verifications
└── sessions
```

### Environment Variables

#### Frontend (.env.local)
```bash
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_SOCKET_URL=http://localhost:5000
```

#### Backend (.env)
```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/findfriend

# Clerk Authentication
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_webhook_secret

# APIs
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
DIGILOCKER_API_KEY=your_digilocker_api_key
DIGILOCKER_CLIENT_ID=your_digilocker_client_id
DIGILOCKER_CLIENT_SECRET=your_digilocker_client_secret

# Cloud Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Redis (for sessions)
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your_jwt_secret_key

# Email (optional - for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Package.json Dependencies

#### Frontend Dependencies
```json
{
  "name": "findfriend-frontend",
  "version": "1.0.0",
  "dependencies": {
    "@clerk/clerk-react": "^4.30.0",
    "@googlemaps/react-wrapper": "^1.1.35",
    "axios": "^1.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "react-hook-form": "^7.48.0",
    "socket.io-client": "^4.7.0",
    "react-leaflet": "^4.2.1",
    "leaflet": "^1.9.4",
    "react-hot-toast": "^2.4.1",
    "date-fns": "^2.30.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.3",
    "vite": "^4.4.5",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "eslint": "^8.45.0"
  }
}
```

#### Backend Dependencies
```json
{
  "name": "findfriend-backend",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "socket.io": "^4.7.0",
    "@clerk/clerk-sdk-node": "^4.13.0",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "express-rate-limit": "^6.10.0",
    "multer": "^1.4.5-lts.1",
    "cloudinary": "^1.40.0",
    "redis": "^4.6.0",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "joi": "^17.9.2",
    "winston": "^3.10.0",
    "nodemailer": "^6.9.4",
    "axios": "^1.5.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.0",
    "supertest": "^6.3.0",
    "eslint": "^8.45.0"
  }
}
```

### Git Repository Structure
```
findfriend/
├── frontend/          # React frontend
├── backend/           # Node.js backend
├── docs/             # Documentation
│   ├── API.md
│   ├── SETUP.md
│   └── DEPLOYMENT.md
├── .github/
│   └── workflows/
│       ├── frontend-deploy.yml
│       └── backend-deploy.yml
├── README.md
├── .gitignore
└── LICENSE
```

### Development Scripts

#### Frontend (package.json scripts)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext js,jsx",
    "test": "jest"
  }
}
```

#### Backend (package.json scripts)
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src"
  }
}
```

### Deployment Structure

#### Vercel (Frontend)
```
vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

#### Railway/Heroku (Backend)
```
Procfile
web: node server.js
```

This complete file structure provides a professional, scalable foundation for your FindFriend project that will impress recruiters and demonstrate enterprise-level development practices!