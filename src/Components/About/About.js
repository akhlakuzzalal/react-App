import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Aboutfood from '../AboutFood/Aboutfood';

const About = () => {
   const [details, setDetails] = useState({})
   const { id } = useParams();
   useEffect(() => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      fetch(url)
         .then(res => res.json())
         .then(data => setDetails(data.meals[0]));
   }, [id]);


   return (
      <div>
         <h1 className="bg-warning mt-0 py-2 text-center">About <span>{details.strMeal}</span></h1>
         <Aboutfood meal={details}></Aboutfood>
      </div>
   );
};

export default About;