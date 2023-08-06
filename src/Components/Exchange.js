import { useState } from "react"
import  db  from "../firebase";
import styled from "styled-components"

const Exchange = (props) => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleUpload = (event) => {
        const file = event.target.files[0];
        setImage(URL.createObjectURL(file))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const bookData = {
            imageURL: image,
            title: title,
            description: description,
        };

        db.collection("books").add(bookData);
        
    }

    return(
        <div>
        <h1>Product Upload</h1>
        <div>
          <input type="file" name="image" onChange={handleUpload} />
          <img src={image} alt="Product Image" />
        </div>
        <input type="text" name="title" value={title} onChange={setTitle} />
        <input type="text" name="description" value={description} onChange={setDescription} />
        <button onClick={handleSubmit}>Submit</button>
      </div>

    )
} 

export default Exchange;