import React from 'react'
import './card.styles.css'

export const Card = (props) =>
<div className="card-container">
    <img src={'https://robohash.org/$'+props.monster.id+'?set=set3&size=180x180'} alt="monster"/>
    <h1 > {props.monster.name}</h1>
    <p>{props.monster.email}</p>
    <p>{props.monster.id}</p>
</div>