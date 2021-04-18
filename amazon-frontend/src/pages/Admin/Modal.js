import React,{useState} from 'react'

function Modal() {
    const [name,setname]=useState('');
    const [image,setimage]=useState('');
    const [description,setdes]=useState('');
    const [stock,setstock]=useState('');
    const [price,setprice]=useState('');

    function submit()
    {
        console.log(name + description + price + stock);
    }

    return (
       <div>
           <form>
            <label for="name" onChange={()=>setname(e.target.value)} >name:</label>
            <input type="text" /><br />

            <label for="image">image</label>
            <button>upload</button><br />
            
            <label for="description" onChange={()=>setdes(e.target.value)}>description</label>
            <input type="text" /><br />

            <label for="price" onChange={()=>setprice(e.target.value)}>price:</label>
            <input type="text" /><br />

            <label for="stock" onChange={()=>setstock(e.target.value)}>stock:</label>
            <input type="text" /><br />
           
           <button onClick={submit}>Submit</button>
           </form>
       </div>
    )
}

export default Modal;
