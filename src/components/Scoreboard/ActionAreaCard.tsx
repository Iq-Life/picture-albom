import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const ActionAreaCard:React.FC<ActionAreaCardType> = ({text, thumbnailUrl}) => {
    return (
        <Card sx={{ maxWidth: 345, marginTop:5, marginBottom:8}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={thumbnailUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
//type
type ActionAreaCardType ={
    text:string
    thumbnailUrl: string
}