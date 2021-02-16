import React, {useState} from 'react';
import './Cards.scss';

const Card = function Card({title, img, link, tags, handleDelete, index}) {
    const [color, changeColor] = useState('blue');

    return (
        <div className={`card ${color}`} key={title} onClick={() => {
            if (color === 'blue') {
                changeColor('red');        
            } else {
                changeColor('blue');
            }
            }}>
            <h1>{title}</h1>
            <a href={link}>
                <img src={img}/>
            </a>
            {tags.map(tag => <p key={tag} >{tag}</p>)}
            <button onClick={() => {handleDelete(index)}}>Delete</button>
        </div>
    )
}

export default Card;