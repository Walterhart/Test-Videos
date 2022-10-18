//Componebt fetch data from database
import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

     /*run everytime rerender 
        render at start 
        fetch from db.json then pass json into javascript object
        then takes datas and then change pending false
        includes error handling for conection problems
     */
    useEffect (() => {
        setTimeout(() => {
            console.log('use effect ran')
            fetch(url)
                .then(res => {
                    if(!res.ok){
                      throw Error('Issue fetching data')
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    setError(err.message);
                    console.log(err.message);
                    setIsPending(false);
                })
         }, 0);
    }, [url]);
    return {data, isPending, error};
}
export default useFetch;