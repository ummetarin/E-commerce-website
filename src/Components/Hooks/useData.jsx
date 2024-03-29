import { useEffect, useState } from "react";


const useData = () => {
    const [dressdata,setdressData] = useState([]);
    const[loading,setLoad]=useState(true)

    useEffect(() => {
      fetch('/datadress.json')
        .then(res => res.json())
        .then(data => {
          setdressData(data); 
          setLoad(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
    
    return [dressdata,loading]
};

export default useData;