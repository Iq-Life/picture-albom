import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SelectAutoWidth: React.FC = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{minWidth: 100 }} color={"primary"}>
                <InputLabel id="demo-simple-select-autowidth-label">Albums</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    label="Age"
                    color={"info"}
                >
                    <MenuItem value="">
                        <em>all</em>
                    </MenuItem>
                    <MenuItem value={10}>Nature</MenuItem>
                    <MenuItem value={21}>Animal</MenuItem>
                    <MenuItem value={22}>Space</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}