import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

const Recipes = ({ userData }) => {

    const [recipeList, setRecipeList] = useState([])

    const fetchData = () => {
        axiosWithAuth()
        .get(`api/recipes/${userData.id}`)
        .then(res => {
            console.log('handleSubmit res:', res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    }, [recipeList])

    return (
        <div>
            <h3>id: {userData.id}</h3>
            <h3>User: {userData.username}</h3>
        </div>
    )
}

export default Recipes
