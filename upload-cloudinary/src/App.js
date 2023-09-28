import "./App.css";
import { useState } from "react";

function App() {
  const [image, setImage] = useState("");

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "vbmhojl9");

    fetch("https://api.cloudinary.com/v1_1/dwxthuhzs/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className='App'>
      {/* https://api.cloudinary.com/v1_1/demo/image/upload */}
      {/* dwxthuhzs */}
      <input type='file' onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={submitImage}>Upload</button>
    </div>
  );
}

export default App;
