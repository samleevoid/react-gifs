
//RECORDA SNIPPET rafc

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {

    // const categories = ['One Punch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball']);
    
    // const handleAdd = () => {
    //     // no utilitzar el push perquè muta una constant, utilitzar el setCategories
    //     // categories.push('pipa');
    //     // console.log(categories);

    //     //setCategories( 'Pipa' ); //això maxaca el array original
    //     setCategories( [...categories, 'Pipet'] ); //mantenim el que ja hi ha i afegim lo nou (operador spred)
    // }


    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            
            <ol>
                {
                    categories.map( category => 
                        // <li key={ cat }>{ cat }</li>
                        <GifGrid 
                            key = {category}
                            category = { category } 
                        />
                    )
                }
            </ol>
        </>
    )
}


export default GitExpertApp;

