/*
import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      // Simulate prediction result
      setPrediction({ species: 'Bobcat', confidence: 0.92 });
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">
         Wildlife Species Detector
      </h1>

      <div className="card">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
        />
        {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
        {prediction && (
          <div className="prediction">
            <p className="species">Species: {prediction.species}</p>
            <p className="confidence">Confidence: {(prediction.confidence * 100).toFixed(1)}%</p>
          </div>
        )}
      </div>

      <footer className="footer">
        machine learning student network
      </footer>
    </div>
  );
}

export default App;
*/

import { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      // Simulate prediction result
      setPrediction({ species: 'Bobcat', confidence: 0.92 });
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">
        Wildlife Species Detector
      </h1>

      <div className="card">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="file-input"
        />
        {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
        {prediction && (
          <div className="prediction">
            <p className="species">Species: {prediction.species}</p>
            <p className="confidence">Confidence: {(prediction.confidence * 100).toFixed(1)}%</p>
          </div>
        )}
      </div>

      {/*About Section */}
      <div className="about-section">
        <h2>About the Project</h2>
        <p>
          This project was created to help identify wildlife species from trap camera images.
          Our machine learning model was trained on a diverse dataset to predict species
          using image classification. Upload an image to see what the model detects!
        </p>
      </div>

      <footer className="footer">
        • machine learning student network •
      </footer>
    </div>
  );
}

export default App;
