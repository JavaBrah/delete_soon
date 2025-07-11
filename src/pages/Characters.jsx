import axios from "axios";
import { useState, useEffect } from 'react'

export default function Characters(){
    const [validResponse, setValidResponse] = useState(true);
    const [err, setErr] = useState(false);
    const [characterData, setCharacterData] = useState([]);

    const getCharacterData = async () => {
        try{
            const response = await axios.get("https://rickandmortyapi.com/api/character");
            const chars = response.data.results;
            setCharacterData(chars);
            setValidResponse(true)
            setErr(false);
            
        } catch(error){
            setValidResponse(false);
            setErr(true)
            console.error()
        }
    };

    useEffect(() => {
        getCharacterData();
        
    }, [])
    
    
    
    return(
        <>
            <div>
                <p>Characters page</p>
                {console.log(characterData)}
            </div>
        </>
    );
};