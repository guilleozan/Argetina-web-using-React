import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const SpecialEventsPage = () => {
    return (
        <div>
               <div className='spiner-whatsnew center'> 
            <p> <Spinner  animation="grow" role="status" > </Spinner> </p>
            <p className="font-spiner" >COOMING SOON</p>
    </div>
        </div>
    );
}

export default SpecialEventsPage;
