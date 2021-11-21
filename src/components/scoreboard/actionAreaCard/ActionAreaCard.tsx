import {FC, memo, useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export const ActionAreaCard: FC<ActionAreaCardType> = memo(({
                                                                text, thumbnailUrl,
                                                                id, fullImageUrl
                                                            }) => {

    const [toggle, setToggle] = useState<boolean>(false)
    const close = () => setToggle(false)
    const open = () => setToggle(true)

    const styleBox = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
    }

    return (
        <div>
            {toggle ?
        <Modal
            open={toggle}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleBox}>
                <img src={fullImageUrl} alt={'full size'} onClick={close}/>
            </Box>
        </Modal>
                : ''}
            <Card sx={{width: 345, bgcolor: '#1e1e1e'}}>
                <CardActionArea onClick={open}>
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