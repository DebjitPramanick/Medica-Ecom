import React, {useEffect,useState} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { listProducts } from '../../actions/ProdcutActions';
import ProductList from '../../components/ProductList'
import "../../styles/AllProducts.css"
import Modal from './Modal'

const AllProducts = () => {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const [show,setshow]=useState(false);
    
    const handleClose=()=>setshow(false);
    const handleOpen=()=>setshow(true);

    return (
        <div className="admin-orders-page-container">
             <div style={{display:show?"block":"none",position:'absolute',width:'100%',height:'100%',zIndex:"20",background:"#0007"}}>
                 <Modal />
                 <button onClick={handleClose}>close</button>      
             </div>  
           
            <div className="header-sec">
                <h2>Hello {userInfo.name}!</h2>
            </div>
            <button onClick={handleOpen}>Add new product</button>
            <ProductList/>
        </div>
    )
}

export default AllProducts
