import React, { Component } from 'react';

class recipie extends Component{
    render(){
        const {title, img, instructions} = this.props;
        const ingr = this.props.ingr.map((ing, index) =>(
            <li key = {index}>{ing}</li> ));
            
        return(
            <div>
            <h1>Recipie { title }</h1>
            <img src={img} alt={title} height="250px"/>
            <ul>
                {ingr}
            </ul>
            <h4>Instructions :</h4>
            <p> {instructions} </p>
            
            </div>
        );
    }
}
export default recipie;