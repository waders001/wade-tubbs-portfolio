# Wade Tubbs - Developer Portfolio

A modern, responsive portfolio website showcasing Wade Tubbs' professional work and technical expertise.

## Features

- **Landing Page**: Animated introduction with gradient background
- **About Page**: Professional bio, timeline, and tech stack
- **Projects Page**: Showcase of key projects with tech details
- **Resume Page**: Experience timeline and skills overview
- **Contact Page**: Contact form with backend integration

## Tech Stack

### Frontend
- React 18 with React Router
- Tailwind CSS for styling
- Framer Motion for animations
- Responsive design (mobile-first)

### Backend
- FastAPI with Python
- MongoDB for data storage
- Contact form submission system
- RESTful API endpoints

## Project Structure

```
/app/
├── backend/           # FastAPI backend
│   ├── server.py      # Main application
│   ├── requirements.txt
│   └── .env
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── .env
└── README.md
```

## Development

### Prerequisites
- Python 3.11+
- Node.js 18+
- MongoDB
- Yarn package manager

### Installation
1. Backend setup:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. Frontend setup:
   ```bash
   cd frontend
   yarn install
   ```

### Running the Application
The application uses supervisor to manage services:

```bash
# Start all services
sudo supervisorctl restart all

# Individual services
sudo supervisorctl restart backend
sudo supervisorctl restart frontend
```

### Environment Variables
- `MONGO_URL`: MongoDB connection string
- `REACT_APP_BACKEND_URL`: Backend API URL for frontend

## Features Details

### Contact Form
- Real-time form validation
- Backend storage in MongoDB
- Success/error feedback
- Responsive design

### Animations
- Smooth page transitions
- Hover effects on cards
- Gradient background animation
- Particle effects on landing page

### Responsive Design
- Mobile-first approach
- Bottom navigation for mobile
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## License

MIT License - see LICENSE file for details