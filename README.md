# 🤝 NayaCircle

> **Make Real Friends. Nearby. Verified.**

A map-first platonic social connection platform designed to help relocating individuals find genuine local friendships through verified, location-based matching.

 🌟 Features
- 🗺️ **Interactive Map Discovery** - Find friends through location, not swipes
- ✅ **Government ID Verification** - Safe connections via DigiLocker integration
- 🎯 **Purpose-Driven Matching** - Study buddies, coffee companions, workout partners
- 💬 **Secure Chat System** - Connect safely with verified users
- 🛡️ **Safety First** - Report, block, and moderation features
- 📱 **Mobile Responsive** - Works seamlessly on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account
- Clerk account (for authentication)
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/findfriend.git
   cd findfriend
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Add your API keys to .env file
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.local.example .env.local
   # Add your API keys to .env.local file
   npm run dev
   ```

4. **Open your browser**
   ```
   Frontend: http://localhost:3000
   Backend:  http://localhost:5000
   ```

## 🔧 Environment Variables

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
DIGILOCKER_API_KEY=your_digilocker_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
```

### Frontend (.env.local)
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## 📱 Usage

1. **Sign Up** - Create account with email verification
2. **Setup Profile** - Add interests, purpose, and photo
3. **Get Verified** - Optional Aadhaar verification for trust badge
4. **Explore Map** - Find nearby users looking for friends
5. **Connect** - Send friend requests with personalized messages
6. **Meet Safely** - Chat and plan meetings through the app

## 🛠️ Tech Stack

**Frontend:**
- ⚛️ React.js + Tailwind CSS
- 🗺️ Google Maps API / Leaflet
- 🔐 Clerk Authentication
- 🔌 Socket.io Client

**Backend:**
- 🟢 Node.js + Express.js
- 🍃 MongoDB + Mongoose
- ⚡ Socket.io
- ☁️ Cloudinary (Image Storage)

**APIs & Services:**
- 🔒 DigiLocker (ID Verification)
- 📧 Clerk (Authentication)
- 🗺️ Google Maps (Location)

## 📊 Project Structure

```
findfriend/
├── 📁 frontend/          # React application
├── 📁 backend/           # Node.js API server
├── 📁 docs/              # Documentation
└── 📄 README.md          # You are here
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 🐛 Found a Bug?
- Check if it's already reported in [Issues](https://github.com/yourusername/findfriend/issues)
- If not, create a new issue with detailed description

### 💡 Feature Requests
- Open an issue with the `enhancement` label
- Describe the feature and its benefits

## 📈 Roadmap

- [ ] 🎓 College Integration (Student verification)
- [ ] 👥 Group Activities & Events
- [ ] 🧠 Mental Wellness Resources
- [ ] 🌐 Multi-language Support
- [ ] 📊 Advanced Analytics Dashboard

## 🔒 Security

- All user data is encrypted
- Location data is approximated (500m radius)
- Government ID verification through official DigiLocker API
- Comprehensive reporting and moderation system

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [Vikash3456](https://github.com/Vikash3456)
- LinkedIn: [vikashkush345](https://linkedin.com/in/vikashkush345)
- Email:vikashkush29@gmail.com
**⭐ Star this repo if you found it helpful!**
</div>
