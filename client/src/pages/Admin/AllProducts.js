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
    
    const handleClose=(e)=>{
        e.preventDefault()
        setshow(false);
    }
    const handleOpen=()=>setshow(true);

    return (
        <div className="admin-orders-page-container">
             <div style={{
                 display:show?"flex":"none",
                 position:'fixed',
                 width:'100%',
                 height:'100%',
                 zIndex:"20",
                 background:"#0007", 
                 top: '0', 
                 left: '0',
                 alignItems: 'center',
                 justifyContent: 'center'
                 }}>
                 <Modal handleClose={handleClose}/>
                 
             </div>  
           
            <div className="header-sec">
                <h2>Hello {userInfo.name}!</h2>
            </div>
            <button onClick={handleOpen} className="add-product-btn">Add new product</button>
            <ProductList/>
        </div>
    )
}

export default AllProducts
