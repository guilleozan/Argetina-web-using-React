import React from 'react';
import Cards from '../reusable-components/Cards';
import "./../styles/home.css";

const MoviesPage = () => {
    return (
        <div className='home'>

            <h1> <strong>MORE MOVIES</strong></h1>
            <Cards/>
            <hr/>
            <Cards/>
            
            
        </div>
    );
}

export default MoviesPage;
