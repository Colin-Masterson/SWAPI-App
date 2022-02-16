import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
    },
    {
        field: 'height',
        headerName: 'Height',

        flex: 1,
    },
    {
        field: 'mass',
        headerName: 'Mass',
        flex: 1,
    },
    {
        field: 'created',
        headerName: 'Created',
        flex: 1,
    },
    {
        field: 'edited',
        headerName: 'Edited',
        flex: 1,
    },
];

function Table({ data }) {
    return (
        <div className='table-container'>
            <DataGrid
                rows={data}
                columns={columns}
                getRowId={(row) => row.name}
                disableExtendRowFullWidth={false}
            />
        </div>
    );
}

export default Table;
