
import { DataGrid } from '@mui/x-data-grid';
import { fetcher } from 'src/utils/axios';
import useSWR from 'swr';

const swrOptions = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  };
export default function DataGridApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1a'
    const { data, isLoading, error, isValidating } = useSWR(url, fetcher, swrOptions);

    if (error) {
    return <p> {error.message}</p>;
  }
  if (!data) {
    return <p>Loodings</p>;
  }
  console.log(data)

    const columns = [
        {
            field: "userId",
            headerName: "التاريخ",
            headerAlign: "center",
            cellClassName: "dcs-data-theme-cell",
            filterable: false,
            disableColumnMenu: true,
            sortable: false,
            Width: 70,
        },
        {
            field: "title",
            headerName: "التاريخ",
            headerAlign: "center",
            cellClassName: "dcs-data-theme-cell",
            filterable: false,
            disableColumnMenu: true,
            sortable: false,
            Width: 70,
        },
    ]
    return (<>
    <DataGrid 
    columns={columns}
    rows={[data]}
    />
    </>)
}


  