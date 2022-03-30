import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meals = ({meal}) => {
    console.log(meal)
    const{strMeal,strMealThumb,strInstructions,idMeal}=meal
    let navigate = useNavigate()
    const ShowMealDetails=()=>{
        const path=`/rstaurant/${idMeal}`
        navigate(path)
    }
    return (
        <div>
            <img className='w-60 mx-auto' src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0,100)}</p>
            <Link className='mr-4 bg-gray-500 rounded px-2' to={'/rstaurant'+ idMeal}>Click</Link>
            <button onClick={ShowMealDetails} className='bg-indigo-500 rounded px-2'>{strMeal}</button>
        </div>
    );
};

export default Meals;