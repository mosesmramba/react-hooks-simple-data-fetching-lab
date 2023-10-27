// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogPicture, setDogPic] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
      });
  }, []);
  
  if (!dogPicture) return <p>Loading...</p>;

  return <img src={dogPicture} alt="A Random Dog" />;
}

export default App;
