import { useCallback } from 'react';
import EmptyForm from '../forms/emptyForm';
import { Stack } from '@mui/system';


export default function CallApiNew({onClose}) {
  const handleSubmit = useCallback((newFormData) => {
    post('http://', {
        newFormData,
    });
  }, []);

  return (
    <Stack>
      <EmptyForm onSubmit={handleSubmit}  onClose={onClose}/>
    </Stack>
  );
}

function post(url, data) {
  console.log( url);
  console.log(data);
}
