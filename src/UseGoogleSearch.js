import {useState, useEffect} from 'react';
import API_KEY from "./key";

// const CONTEXT_KEY = "9ec571f86697d07ac";
const CONTEXT_KEY='60b924a5d0c241f2a';

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term])

    return {data};
};

export default useGoogleSearch;
//return a data have access to if and display it;
