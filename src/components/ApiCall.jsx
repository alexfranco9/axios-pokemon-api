import React, { useState } from 'react';
import axios from 'axios';

const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    
    const GetPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(res => {
                console.log(res)
                setPokemon(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            
            <button onClick={ GetPokemons } className="btn btn-info"> Fetch Pokemons! </button>
            
            {
                pokemon ?
                pokemon.map(poke => {
                    return <ul >
                        <li className="display-5">
                        {poke.name}
                        </li>
                    </ul>
                })
                : ""
            }
        </div>
    )
}

export default ApiCall;