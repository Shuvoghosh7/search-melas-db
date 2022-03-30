import React from 'react';

const Meals = ({meal}) => {
    const{strMeal,strMealThumb,strInstructions}=meal
    return (
        <div>
            <img className='w-60 mx-auto' src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0,100)}</p>
        </div>
    );
};

export default Meals;