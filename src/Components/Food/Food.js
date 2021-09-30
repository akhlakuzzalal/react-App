import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Food = (props) => {
   const { strMeal, strMealThumb, strInstructions, idMeal } = props.meal
   return props.meal.strMeal ? (
      <div className="col">
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               component="img"
               height="140"
               image={strMealThumb}
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {strMeal}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {strInstructions.slice(0, 100)}
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Share</Button>
               <NavLink className="text-decoration-none" to={`/about/${idMeal}`}>
                  <Button size="small">About</Button>
               </NavLink>

            </CardActions>
         </Card>
      </div>
   )
      :
      (
         <div><h2>Loading.......</h2></div>
      );
};

export default Food;