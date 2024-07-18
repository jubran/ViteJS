import { useCallback } from 'react';
import EmptyForm from '../forms/emptyForm';


export default function CallApiNew({onClose}) {
  const handleSubmit = useCallback((newFormData) => {
    post('http://', {
        newFormData,
    });
  }, []);

  return (
    <div>
      <EmptyForm onSubmit={handleSubmit}  onClose={onClose}/>
    </div>
  );
}

function post(url, data) {
  console.log( url);
  console.log(data);
}
