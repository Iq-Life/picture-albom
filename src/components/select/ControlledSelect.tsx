import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

export const ControlledSelect: React.FC <ControlledSelectType> = ({
    setCurrentAlbum
                                                                  }) => {
    const [albumId, setAlbumId] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof albumId>) => {
        setAlbumId(event.target.value);
        setCurrentAlbum(Number(event.target.value))
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="controlled-open-select-label">Album</InputLabel>
                <Select
                    labelId="controlled-open-select-label"
                    id="controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={albumId}
                    label="Album"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>all</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
type ControlledSelectType ={
    setCurrentAlbum: (albumId:number) => void
}

