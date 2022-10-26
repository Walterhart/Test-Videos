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
        Also includes abort handling
     */
    useEffect (() => {
        const abortConst = new AbortController();

        setTimeout(() => {
            console.log('use effect ran')
            fetch(url, {signal: abortConst.signal})
                .then(res => {
                    if (!res.ok){
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
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    }else{
                        setError(err.message);
                        console.log(err.message);
                        setIsPending(false);
                    }
                })
         }, 0);
         return () => abortConst.abort();
    }, [url]);
    return {data, isPending, error};
}
export default useFetch;