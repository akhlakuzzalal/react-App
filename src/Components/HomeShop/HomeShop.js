import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const HomeShop = (props) => {
   const { name, img } = props.product;
   return (
      <div className="col">
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               component="img"
               height="140"
               image={img}
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {name.slice(0, 12)}
               </Typography>

            </CardContent>

         </Card>
      </div>
   );
};

export default HomeShop;