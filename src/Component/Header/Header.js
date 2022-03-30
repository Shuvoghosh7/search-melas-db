import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black text-white p-4'>
            <Link className='mr-5' to='/'>Home</Link>
            <Link to='/rstaurant'>Restaurant</Link>
            
        </div>
    );
};

export default Header;