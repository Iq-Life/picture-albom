import {FC, memo, useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {AlbumsType} from "../../../api/pictures-api";

export const ControlledSelect: FC<ControlledSelectType> = memo(({
                                                                     setCurrentAlbum,albums
                                                                 }) => {

    const [albumId, setAlbumId] = useState<string | number>('');
    const [open, setOpen] = useState(false);

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

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                minWidth: 120,
                backgroundColor: '#20262d',
                color: '#1976d2'
            },
        },
    };

const setAlbums =
    albums.map(album => (<MenuItem key={album.userId} value={album.id}>{album.id}. {album.title}</MenuItem>))

    return (
        <div>
            <FormControl sx={{m: 1, minWidth: 120}}>
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
                    MenuProps={MenuProps}
                >
                    <MenuItem value="">
                        <em>all</em>
                    </MenuItem>
                    {setAlbums}
                </Select>
            </FormControl>
        </div>
    );
})
//type
type ControlledSelectType = {
    albums: AlbumsType[]
    setCurrentAlbum: (albumId: number) => void
}

