import Navbar from "../components/Navbar";
import GroupGrid from "./components/GroupGrid";

import {tGroup} from "./groupdata";

import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import GroupChart from "./components/GroupChart";

type tSelect = "Категория" | "Город" | "Срок хранения" | "Продавец";

const urlMap: Record<tSelect, string> = {
    "Категория": "http://127.0.0.1:5000/api/v1/products/stats/category",
    "Город": "http://127.0.0.1:5000/api/v1/products/stats/city",
    "Срок хранения": "http://127.0.0.1:5000/api/v1/products/stats/vitality",
    "Продавец": "http://127.0.0.1:5000/api/v1/products/stats/employee",
};

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Категория");
    const [groupData, setGroupData] = React.useState<tGroup>([]);

    const fetchGroupData = async (selectedGroup: tSelect) => {
        try {
            const response = await fetch(urlMap[selectedGroup]);
            if (response.ok) {
            const data = await response.json();
            setGroupData(data.stats);
            }
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    };

    React.useEffect(() => {
        fetchGroupData(group);
    }, [group]);

    const handleChange = (event: SelectChangeEvent) => {
        const selectedGroup = event.target.value as tSelect;
        setGroup(selectedGroup);
    };

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


            <GroupChart data={groupData} />
            <GroupGrid data={groupData} />

        </div>
    );
}

export default Chart;