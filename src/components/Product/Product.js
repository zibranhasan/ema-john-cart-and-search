import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = ({product,handleAddToCart}) => {
    const {name,img,seller,price,ratings}=product;
   
    return (
        <div className='product'>
           <img src={img} alt></img>
           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p>price:${price}</p>
           <p><small>seller:{seller}</small></p>
           <p><small>rating:{ratings}</small> starts</p>
           </div>
          <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
            <p className='btn-text'>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;