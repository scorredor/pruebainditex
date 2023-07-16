import { render, screen } from '@testing-library/react';
import { DataTable } from '.'

describe('Pruebas DataGrid componente', () => {

    const columnsDataGrid = [
        {
            field: 'id',
            headerText: 'Id',
            flex: 1,
            minWidth: 10
        },
        {
            field: 'title',
            headerText: 'Title',
            flex: 8,
            minWidth: 500
        },
        {
            field: 'date',
            headerText: 'Date',
            flex: 1,
            minWidth: 100
        },
        {
            field: 'duration',
            headerText: 'Duration',
            flex: 1,
            minWidth: 50
        },
    ]

    const rows = [
        { id: 1, title: 'Snow1', date: '12/12/2023', duration: '14:00' },
        { id: 2, title: 'Snow2', date: '12/12/2023', duration: '15:00' },
        { id: 3, title: 'Snow3', date: '12/12/2023', duration: '16:00' },
        { id: 4, title: 'Snow4', date: '12/12/2023', duration: '17:00' },
        { id: 5, title: 'Snow5', date: '12/12/2023', duration: '18:00' },
    ];

    test('Muestra todas las cabeceras correctamente', () => {
        render(<DataTable columns={columnsDataGrid} rows={rows} onRowClick={jest.fn()}></DataTable>)
        expect(screen.getByText('Title'))
        expect(screen.getByText('Date'))
        expect(screen.getByText('Duration'))
    })

    test('Muestra las filas correctamente', () => {
        render(<DataTable columns={columnsDataGrid} rows={rows} onRowClick={jest.fn()}></DataTable>)
        expect(screen.getByText('Snow1'))
        expect(screen.getAllByText('12/12/2023').length > 0)
        expect(screen.getByText('14:00'))
    })
})
