import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const HomeFood = (props) => {
   const { strMeal, strMealThumb } = props.meal
   return (
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

            </CardContent>

         </Card>
      </div>
   );
};

export default HomeFood;