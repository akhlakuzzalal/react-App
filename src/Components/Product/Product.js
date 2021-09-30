import { Card, CardActions, Button, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Product = (props) => {
   const { name, img, seller, price } = props.product
   // console.log(props.product)
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
                  {name.slice(0, 15)}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  By : {seller}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Price : ${price}
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">Share</Button>

               <Button size="small">Buy Now</Button>


            </CardActions>
         </Card>
      </div>
   );
};

export default Product;