import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
   const [products, setProducts] = useState([]);
   const [display, setDisplay] = useState([]);

   useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
         .then(res => res.json())
         .then(data => setProducts(data));
   }, []);


   const handleInput = (event) => {
      const single = products.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()));
      setDisplay(single);
      // setProducts(single)
   };

   return (
      <div>
         <h1 className="text-center bg-warning mt-0 text-danger py-2 mb-0">Wellcome To Our Shop <span className="text-success">Found {display.length} products</span></h1>
         <div className="bg-warning py-3 d-flex justify-content-center">
            <input onChange={handleInput} className="form-control w-75" type="text" placeholder="Search a Product Name" />
         </div>
         <div className="row row-cols-lg-4 row-cols-1 mx-3 gy-4 mt-2">
            {
               !products ? <div className="text-danger"><h1>Search With a Valid Name</h1></div>
                  :
                  display.length !== 0 ?
                     display.map(product => <Product product={product}></Product>)
                     :
                     <div className="w-100"><h1>Search A Name Of Your Product</h1></div>
            }
         </div>

      </div>
   );
};

export default Shop;