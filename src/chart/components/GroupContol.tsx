import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export type tSelect = "Страна" | "Год" | "Тип";

function GroupControl(group: tSelect) {
    return (
        <Box sx={{ width:"200px", m:"auto", mt:"20px"}}>
            <FormControl fullWidth>
                <InputLabel> Группировать по </InputLabel>
                <Select
                    id="select-group"
                    value={ group }
                    label="Группировать по"
                >
                    <MenuItem value="Страна"> Стране </MenuItem>
                    <MenuItem value="Год"> Году </MenuItem>
                    <MenuItem value="Тип"> Типу </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default GroupControl;