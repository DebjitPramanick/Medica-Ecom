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
                      <img src="https://cdn.pfizer.com/pfizercom/tiles/Pills-1000x450px.jpg?VersionId=1CnAsPZSBtgEwwVa6CHz38Lg522D1zZ." alt=""/>
                    </div>
                    <div className="banners">
                      <img src="https://healthcare.utah.edu/locations/south-jordan/images/internal-med-billboard.jpg" alt=""/>
                    </div>
                    <div className="banners">
                        <img src="https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/coronavirus/vaccine-hero.ashx?h=500&la=en&mh=500&mw=1300&w=1297&hash=ED466B472CD015FF5CC3288E75EA37EB707B65D3"/></div>
                    <div className="banners">
                        <img src="https://thedestinyformula.com/wp-content/uploads/2018/09/types-of-health.jpg" alt=""/>
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
