import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './restaurent.css'

const Restaurent = () => {
   const [meals, setMeals] = useState([]);
   const [food, setFood] = useState('fish')

   useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
         .then(res => res.json())
         .then(data => setMeals(data.meals));
   }, [food]);


   const handleInputField = event => {
      if (meals) {
         setFood(event.target.value)
      }
      else {
         // console.log('enter into else')
         setFood('fish')
      }

   };

   // console.log(meals)

   return (
      <div>
         <h1 className="text-center bg-warning mt-0 text-danger py-2 mb-0">Wellcome To This Restaurent <span className="text-success">Found {meals?.length ? meals.length : 0} Food</span></h1>
         <div className="bg-warning py-3 d-flex justify-content-center">
            <input onChange={handleInputField} className="form-control w-75" type="text" placeholder="Search Your Favorite Food Name" />
         </div>
         <div className="row row-cols-md-2 row-cols-lg-4 row-cols-1 ms-3 mt-4 gy-5">
            {
               !meals ? <div className="text-danger"><h1>Search With a Valid Name</h1></div>
                  :
                  meals.length !== 0 ?
                     meals.map(meal => <Food meal={meal} key={meal.idMeal}></Food>)
                     :
                     <div><h1>Loading.......</h1></div>
            }
         </div>
      </div>
   );
};

export default Restaurent;