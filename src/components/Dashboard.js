import React, { useState, useEffect } from 'react';
import { getRecipes } from '../actions/recipesActions';
import { connect } from 'react-redux';

const Dashboard = (props) => {

    useEffect(() => {
        console.log('useEffect')
        props.getRecipes(props.userData.id)
    }, [])

    return (
        <div>
            <h3>id: {props.userData.id}</h3>
            <h3>User: {props.userData.username}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.authReducer,
        recipesData: state.recipesReducer
    }
  }
  
  export default connect(mapStateToProps, { getRecipes })(Dashboard);
