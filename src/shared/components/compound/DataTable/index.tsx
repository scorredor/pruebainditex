import styles from './index.module.scss'
import { DataGrid, GridColDef, GridColumnHeaderParams, GridRenderCellParams } from '@mui/x-data-grid';
import { DataGridColumn } from './model/DataTableModel';
import { InternalLink } from '../../basic/internalLink';
import { EpisodieModelLite } from '../../../../modules/podcast/domain/models/store/podcastEpisodiesStoreModel';

interface Props {
    columns: DataGridColumn[],
    rows: EpisodieModelLite[],
    onRowClick : (e : number) => void
}

export const DataTable = (props: Props) => {

    const buildColumns = () => {
        const gridColumnsDef: GridColDef[] = [];
        let gridColumnDef: GridColDef
        props.columns.forEach((column) => {
            if (column.field !== 'id') {
                gridColumnDef = {
                    field: column.field,
                    headerName: column.headerText,
                    headerAlign: 'left',                    
                    flex: column.flex,
                    editable: false,
                    sortable: false,
                    disableColumnMenu: true,
                    cellClassName: styles.cellClassName,
                    minWidth: column.minWidth,                    
                }

                gridColumnDef.renderHeader = (params: GridColumnHeaderParams) => (
                    <p className={styles.dataGridContainer__header}>{params.colDef.headerName}</p>
                )
                gridColumnDef.renderCell = (params: GridRenderCellParams) => {
                    if (column.field === 'title')
                        return <InternalLink text={params.value} />
                    return <p className={styles.dataGridContainer__row}>{params.value}</p>
                }
                gridColumnsDef.push(gridColumnDef)
            }
        })

        return gridColumnsDef;
    }

    return (
        <DataGrid
            rows={props.rows}
            columns={buildColumns()}            
            className={styles.dataGridContainer}
            autoHeight
            onRowClick={(e) => props.onRowClick(Number(e.id))}
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? styles.dataGridContainer__row___grayBackGround : ''
              }
        />
    )
}