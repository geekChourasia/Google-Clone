import React, {useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';


function Search({hideButton=false}) { //this is actually a props which i meant to false first
    const[{ }, dispatch]=useStateValue();
    const[input,setInput]=useState('');
    const history= useHistory(); //to using the history


    const search=(e)=>{
        e.preventDefault();

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })


        history.push('/search');

        // console.log('you are searching >>>>' ,input);
    }

    return (
        <form className="search">
            <div className='search_input'>
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={(e)=>setInput(e.target.value)}/>
                <MicIcon />
            </div>


            {!hideButton ? (<div className="search_buttons">
            <Button  type="submit" onClick={search}  variant="outlined">Google Search </Button>
            <Button variant="outlined">I'm Feeling Lucky </Button>
            {/* variant="outlined" maked outline */}

            </div> ):(

             <div className="search_buttons">
            <Button className="search_buttonsHidden" type="submit" onClick={search}  variant="outlined">Google Search </Button>
            <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky </Button>
            {/* variant="outlined" maked outline */}

            </div>
            )}
            

            {/* when it changes to a form using the submit button when ever we hit enter , it will render inputValue  */}
         </form> 
    )
}

export default Search;