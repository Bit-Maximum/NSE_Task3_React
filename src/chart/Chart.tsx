import Navbar from "../components/Navbar";
import GroupGrid from "./components/GroupGrid";

import {categories, cities, vitality, employees} from "./groupdata";

import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import GroupChart from "./components/GroupChart";
import SettingChart from "./components/SettingChart";

type tSelect = "Категория" | "Город" | "Срок хранения" | "Продавец";

const dataMap = {
    "Категория": categories,
    "Город": cities,
    "Срок хранения": vitality,
    "Продавец": employees,
};

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Категория");
    const [groupData, setGroupData] = React.useState(categories);

    const handleChange = (event: SelectChangeEvent) => {
        const selectedGroup = event.target.value as tSelect;
        setGroup(selectedGroup);
        setGroupData(dataMap[selectedGroup]);
    }

    return (
        <div>
            <Navbar active="3"/>

            <Box sx={{ width:"200px", m:"auto", mt:"20px"}}>
                <FormControl fullWidth>
                    <InputLabel> Группировать по </InputLabel>
                    <Select
                        id="select-group"
                        value={ group }
                        label="Группировать по"
                        onChange={ handleChange }
                    >
                        <MenuItem value="Категория"> Категории </MenuItem>
                        <MenuItem value="Город"> Городу </MenuItem>
                        <MenuItem value="Срок хранения"> Сроку хранения </MenuItem>
                        <MenuItem value="Продавец"> Продавцу </MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <GroupChart data={groupData}/>
            <GroupGrid data={groupData}/>
        </div>
    );
}

export default Chart;