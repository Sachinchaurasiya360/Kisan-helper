# Kisan Helper - Empowering Farmers Through Technology

A comprehensive web platform designed to support farmers with agricultural guidance, market insights, and direct farmer-to-buyer interactions.

## Features

- **Homepage** - Featured content, farming tips, and weather updates
- **Market Prices** - Real-time crop price tracking
- **Weather Forecast** - AI-driven weather predictions
- **Community Forum** - Discussion space for farmers
- **Expert Consultation** - Connect with agricultural experts
- **Government Schemes** - Information on financial aids
- **Digital Marketplace** - Direct farmer-to-buyer platform
- **Learning Hub** - Farming tutorials and guides
- **Multilingual Support** - Regional language accessibility
- **Contact & Support** - Helpline and chat support

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **State Management**: Redux Toolkit
- **API Integration**: Weather API, Market Price API

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/kisan-helper.git
cd kisan-helper
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Create a .env file in the backend directory with your configuration:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm start
```
