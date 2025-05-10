import { tGroup }  from "../groupdata";
import {
    DataGrid,
    GridRowsProp,
    GridColDef,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridFilterModel,
} from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React, { useEffect } from "react";

type GroupProps = {
    data: tGroup;
    onFilterChange: (filteredData: tGroup) => void;
};


function GroupGrid({data, onFilterChange}: GroupProps) {
    const [rows, setRows] = React.useState<GridRowsProp>(data);
    const [filterModel, setFilterModel] = React.useState<GridFilterModel>({items: []});

    useEffect(() => {
        setRows(data);
    }, [data]);

    const columns: GridColDef[] = [
        { field: 'Группа', flex: 0.5},
        { field: 'Минимальная цена', flex: 0.5},
        { field: 'Максимальная цена', flex: 0.5},
        { field: 'Средняя цена', flex: 0.5},
    ];

    const applyFilters = (data: tGroup, filterModel: GridFilterModel): tGroup => {
        if (!filterModel.items.length) return data;

        return data.filter(row => {
            return filterModel.items.every(filterItem => {
                const value = row[filterItem.field as keyof typeof row];
                const filterValue = filterItem.value;
                console.log(filterItem.operator)

                const numericFields = ['Минимальная цена', 'Максимальная цена', 'Средняя цена'];
                const isNumericField = numericFields.includes(filterItem.field);
                const numericValue = isNumericField ? Number(value) : -1;
                const numericFilterValue = isNumericField && filterValue ? Number(filterValue) : null;

                switch (filterItem.operator) {
                    case 'contains':
                        return String(value).toLowerCase().includes(String(filterValue).toLowerCase());

                    case 'doesNotContain':
                        return !String(value).toLowerCase().includes(String(filterValue).toLowerCase());

                    case 'equals':
                        if (isNumericField)
                            return numericValue === numericFilterValue;
                        return String(value).toLowerCase() === String(filterValue).toLowerCase();

                    case 'doesNotEqual':
                        if (isNumericField)
                            return numericValue !== numericFilterValue;
                        return String(value).toLowerCase() !== String(filterValue).toLowerCase();

                    case 'startsWith':
                        return String(value).toLowerCase().startsWith(String(filterValue).toLowerCase());

                    case 'endsWith':
                        return String(value).toLowerCase().endsWith(String(filterValue).toLowerCase());

                    case 'isEmpty':
                        return value === null || value === undefined || value === '';

                    case 'isNotEmpty':
                        return value !== null && value !== undefined && value !== '';

                    case 'isAnyOf':
                        if (!Array.isArray(filterValue)) return false;
                        if (isNumericField) {
                            return filterValue.map(Number).includes(numericValue);
                        }
                        return filterValue.map(String).includes(String(value));
                    default:
                        return true;
                }
            });
        });
    };

    const handleFilterModelChange = (newFilterModel: GridFilterModel) => {
        setFilterModel(newFilterModel);
        const filteredData = applyFilters(data, newFilterModel);
        onFilterChange(filteredData);
    };

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <Box sx={{ flexGrow: 1 }} />
                <GridToolbarExport/>
            </GridToolbarContainer>
        );
    }

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                getRowId={(row) => row.Группа}
                slots={{
                    toolbar: CustomToolbar,
                }}
                slotProps={{
                    pagination: {
                        rowsPerPageOptions: [ 10, 20, 30, 100 ],
                    }
                }}
                filterModel={filterModel}
                onFilterModelChange={handleFilterModelChange}
            />
        </Container>
    );
}

export default GroupGrid;