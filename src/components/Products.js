import React from 'react';
import { useEffect, useState } from "react";
import Woocommerce from "../functions/Woocommerce";


function Products() {
  const [products, setProducts] = useState(0);
    
  useEffect(() => {
        Woocommerce.getProducts()
            .then( (res) => {
                setProducts(res.data)
            } );     
        },[]
    );

  return (
    <ul>
      {Object.values(products).map( (item, index) => {
          return <li key={index}>{index}-{item.name},{item.price} - 
                    {
                      item.images.map( (image, index) => {
                          return <img key={index} src={image.src}></img> 
                        })
                    }   
                </li>
      })
      }
    </ul>
  );
}
  
export default Products