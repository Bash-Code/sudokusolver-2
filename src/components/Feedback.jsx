import React, {useState, useEffect} from 'react';
import {BounceLoader} from 'react-spinners'
import "./App.css"


function FeedBack() {
    const [image, setImage] = useState([]);
    const [isImage, setIsImage] = useState(false);
    useEffect(() => {
        async function fetchAPI() {
            let response  = await fetch('http://localhost:5000/solution', {
                 headers : {
                     'Accept': 'application/json'
                 }
            })
            const blob = await response.blob();
            setImage(URL.createObjectURL(blob));
            setIsImage(true);


        }
        fetchAPI()
    },[])
    if(isImage){
       return (
           <div className="feedback">
           <br/>
           <img src={image} alt="sudoku"/>
           </div>
       );
    }else{
       return (
           <div className="feedback">
           <br/>
           </div>
       )
    }

}


export default FeedBack;