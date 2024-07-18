import { useCallback } from "react";
import UpdatedForm from "../forms/updatedForm";


export default function CallApiUpdate({onClose,updatedData}) {
    const handleSubmit = useCallback((newFormData) => {
      post('http://', {
          newFormData,
      });
    }, []);
  
    return (
      <div>
        <UpdatedForm onSubmit={handleSubmit}  onClose={onClose} updatedData={updatedData}/>
      </div>
    );
  }
  
  
  
  function post(url, data) {
    console.log( url);
    console.log(data);
  }
  