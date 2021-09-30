import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeFood from '../HomeFood/HomeFood';
import HomeShop from '../HomeShop/HomeShop';

const Home = () => {
   const [meals, setMeals] = useState([]);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
         .then(res => res.json())
         .then(data => setMeals(data.meals));
   }, []);

   useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
         .then(res => res.json())
         .then(data => setProducts(data));
   }, []);


   return (
      <div>
         <NavLink className="text-decoration-none text-dark" to="/restaurent">
            <h1 className="bg-warning mt-0 py-2 text-center">VIsit Restaurent For All Food</h1>
            <div className="row row-cols-lg-4 row-cols-1 gy-4 mx-3">
               {
                  !meals ? <div className="text-danger"><h1>Search With a Valid Name</h1></div>
                     :
                     meals.length !== 0 ?
                        meals.map(meal => <HomeFood meal={meal} key={meal.strId}></HomeFood>)
                        :
                        <div><h1>Loading.......</h1></div>
               }
            </div>
         </NavLink>

         <NavLink className="text-decoration-none text-dark" to="/shop">
            <h1 className="bg-warning mt-0 py-2 text-center mb-3">VIsit Shop for Shoping</h1>
            <div className="row row-cols-1 row-cols-lg-4 gy-4  mx-3">
               {
                  !meals ? <div className="text-danger"><h1>Search With a Valid Name</h1></div>
                     :
                     meals.length !== 0 ?
                        products.slice(20, 28).map(product => <HomeShop product={product}></HomeShop>)
                        :
                        <div><h1>Loading.......</h1></div>
               }
            </div>
         </NavLink>
      </div>
   );
};

export default Home;