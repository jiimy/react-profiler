import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import PhotoOne from './components/PhotoOne';
import PhotoTwo from './components/PhotoTwo';

function App() {
   const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => 
        response.json()
      )
      .then(data => setPhotos(data.slice(0, 5)));
  }, [setPhotos]);

  // console.log('dd', test);

  return (
    <div className="App">
       <input
        value={message}
        onChange={event => setMessage(event.target.value)}
      />
      <div className="photos">
        <PhotoOne photos={photos} message={message} />
        <PhotoTwo photos={photos} message={message} />
      </div>
    </div>
  );
}

export default App;
