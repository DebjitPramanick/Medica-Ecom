import React,{useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import ProductList from '../components/ProductList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/Home.css"
import Product from '../components/Product'
import { listProducts } from '../actions/ProdcutActions'

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    const productList = useSelector( state => state.productList);
    const {loading,error,products} = productList;

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }  
            },
            {
                breakpoint: 900,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }  
            },
            {
                breakpoint: 680,
                settings: {
                    dots: true,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }  
            },
            
        ]
    }

    return (
        <div className="home-page-container">

            <div className="banner-container">

                <Slider {...settings}>

                    <div className="banners">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyBpBSrbBgb2gdbG8Obu8I-jUeTtq_r9sew&usqp=CAU" alt=""/>
                    </div>
                    <div className="banners">
                      <img src="https://png.pngitem.com/pimgs/s/157-1575236_transparent-medicine-png-medicine-images-hd-png-png.png" alt=""/>
                    </div>
                    <div className="banners">
                        <img src="data:image/jpeg;base64,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" alt=""/>
                    </div>
                    <div className="banners">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSr1NvGW89oHTyvok29v9dbalHMSDjs1qEQ&usqp=CAU" alt=""/>
                    </div>

                </Slider>
            
            </div>
            
            <ProductList/>


            <div className="home-product-slider">

                <h2 className="sec-title">More Products</h2>

                <Slider {...settings2}>

                    {products && products.map((product)=>{
                            return(
                                <Product key={product._id} product={product} /> 
                            )
                        })
                    }

                </Slider>
            </div>


        </div>
    )
}

export default Home
