import React, { useState, useRef } from 'react'
import "../../styles/Modal.css"
import axios from "../../Axios"

function Modal({ handleClose }) {

    const pdImage = useRef()

    const [name, setname] = useState('');
    const [imageFile, setImageFile] = useState({});
    const [description, setdes] = useState('');
    const [stock, setstock] = useState(0);
    const [price, setprice] = useState(0);

    const toBase64 = () => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    async function submit(e) {
        e.preventDefault()

        if (name && description && price && stock && imageFile) {
            let image = await toBase64()
            const product = {
                name,
                description,
                price,
                stock,
                image
            }
            axios.post('/api/products/seed', product)
                .then(res => console.log(res))
        }

        else {
            alert("Please fill all the fields.")
        }
    }

    return (
        <div>
            <form className="modal-form">

                <h1>Upload new product</h1>

                <div className="text-field">
                    <label for="name">Name:</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} value={name} />
                </div>


                <div className="text-field">
                    <label for="image">Image:</label>
                    <input type="file" accept="image/" onChange={(e) => setImageFile(e.target.files[0])} ref={pdImage}></input>
                </div>


                <div className="text-field">
                    <label for="description">Desc:</label>
                    <textarea cols="42" rows="10" onChange={(e) => setdes(e.target.value)} value={description}></textarea>
                </div>


                <div className="text-field">
                    <label for="price">Price:</label>
                    <input type="text" onChange={(e) => setprice(e.target.value)} value={price} />
                </div>


                <div className="text-field">
                    <label for="stock">Stock:</label>
                    <input type="text" onChange={(e) => setstock(e.target.value)} value={stock} />
                </div>

                <div className="btn-container">
                    <button onClick={submit} className="submit-btn">Submit</button>
                    <button onClick={handleClose} className="close-btn">Close</button>
                </div>

            </form>
        </div>
    )
}

export default Modal;
