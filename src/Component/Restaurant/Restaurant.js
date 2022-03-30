import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Restaurant = () => {
    const[searchText,setSearchText]=useState('')
    const [meals,setMeals]=useState([])
    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText])
    const searchFood =e =>{
        setSearchText(e.target.value)
    }
    return (
        <div>
            <h5>Find The food You Want</h5>
            <input onChange={searchFood} type="text" name="" id="" className='bg-slate-800 text-white' />
            <br />
            <h1>Result Found:{meals.length}</h1>
          <div className='grid grid-cols-3 gap-4'>
          {
                meals.map(meal => <Meals
                key={meal.idMeal}
                meal={meal}
                />)
            }
          </div>
        </div>
    );
};

export default Restaurant;