# Wildlife Species Detector Frontend

Web-based tool for identifying wildlife species from images using machine learning. Built with React and styled with custom CSS, this project allows users to upload an image and receive a species prediction with confidence.

<img width="1396" height="678" alt="Screenshot_2025-05-28_at_5 37 29_PM" src="https://github.com/user-attachments/assets/11a3ebba-cedb-4fcb-aad9-8c8c162ed7a7" />

<img width="1390" height="697" alt="Screenshot_2025-05-28_at_5 37 47_PM" src="https://github.com/user-attachments/assets/32d4f912-fad1-456f-a3ac-7d3e62bd695f" />


## Features 
- Upload wildlife images directly from your device
- Predicts species with a mock ML model (ready to integrate with a real backend)
- Clean UI with a natural color scheme
- Displays species name and prediction confidence
- Includes an about section for project background


## Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/wildlife-detector-app.git
cd wildlife-detector-app
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Start the development server:
```bash
npm run dev
```

Visit http://localhost:5173 in your browser to see the app in action.


## About This Project
This app was developed to demonstrate computer vision in wildlife conservation. The UI is built using React, and the prediction logic is currently mocked to simulate ML results. Future versions will integrate a trained species classification model.



## ML Integration (Coming Soon)
To integrate the real machine learning model, connect the handleImageUpload function in App.jsx to a backend API that returns prediction results based on the uploaded image.



## Tech Stack
- React
- Vite
- Node.js
- Custom CSS 








