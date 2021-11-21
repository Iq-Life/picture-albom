import {FC, memo, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

export const ActionAreaCard: FC<ActionAreaCardType> = memo(({
                                                                text, thumbnailUrl,
                                                                id, fullImageUrl
                                                            }) => {

    const [toggle, setToggle] = useState<boolean>(false)

    return (
        <div>
            {toggle ?
               <div/>
                : ''}
            <Card sx={{width: 345, bgcolor: '#1e1e1e'}}>
                <CardActionArea onClick={() => setToggle(!toggle)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={thumbnailUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{color: 'white'}} gutterBottom variant="h5" component="div">
                            photo id: {id}
                        </Typography>
                        <Typography sx={{color: '#ffffffb3'}} variant="body2" color="text.secondary">
                            {text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
})
//type
type ActionAreaCardType = {
    id: number
    text: string
    thumbnailUrl: string
    fullImageUrl: string
}