import Button from '@mui/material/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Aboutfood = (props) => {
   const { strMealThumb, strMeal, strArea, strCategory, strInstructions, strYoutube } = props.meal;
   return props.meal.strMeal ? (
      <div className="row row-cols-lg-2 row-cols-1 gx-3 mx-4">
         <div className="col-lg-3">
            <img className="img-fluid" src={strMealThumb} alt="" />
         </div>
         <div className="col-lg-9">
            <h1>Name : {strMeal}</h1>
            <h3>Area : {strArea}</h3>
            <h2>Catagory : {strCategory}</h2>
            <p>{strInstructions}</p>
            <NavLink className="me-4" to="/restaurent">
               <Button variant="contained">Back Restaurent</Button>
            </NavLink>
            <NavLink to={strYoutube}>
               <Button variant="contained">Youtube Link</Button>
            </NavLink>
         </div>
      </div>
   )
      :
      (
         <div><h2 className="text-center">Go to Another Page And Click On About</h2></div>
      );
};

export default Aboutfood;