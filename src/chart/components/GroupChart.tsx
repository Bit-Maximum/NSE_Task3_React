import { tGroup } from "../groupdata";

import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { axisClasses } from '@mui/x-charts';
import { LineChart} from '@mui/x-charts/LineChart';

import * as React from "react";
import SettingChart from "./SettingChart";


interface GroupChartProps {
    data: tGroup;
}


function GroupChart ({data}: GroupChartProps) {
    const [series, setSeries] = React.useState({
        "Максимальная цена": true ,
        "Средняя цена": true,
        "Минимальная цена": true,
    });

    const activeSeriesCount = Object.values(series).filter(Boolean).length;
    const [isBar, setIsBar] = React.useState(true);

    let seriesY = Object.entries(series)
        .filter(item => item[1])
        .map(item => {
            return {"dataKey": item[0], "label": item[0]}
        });


    const chartSetting = {
        height: 500,
        yAxis: [
            {
                label: 'Цена ($)',
            }
        ],
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-10px, 0)',
            },
        }
    };

    return(
        <Container maxWidth="lg">

            {isBar === true ? (
            <BarChart
                dataset={ data }
                xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                series={ seriesY }
                barLabel={activeSeriesCount === 1 ? "value" : undefined}
                slotProps={{
                    legend: {
                        position: { vertical: 'bottom', horizontal: 'middle'},
                        padding: 0,
                    },
                }}
                {...chartSetting}
            />) : (
            <LineChart
                dataset={ data }
                xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                series={ seriesY}
                slotProps={{
                    legend: {
                        position: { vertical: 'bottom', horizontal: 'middle' },
                        padding: 0,
                    },
                }}
                {...chartSetting}
            />)}

            <SettingChart series={ series } setSeries={ setSeries } isBar={isBar} setIsBar={setIsBar}/>

        </Container>
    )
}

export default GroupChart ;