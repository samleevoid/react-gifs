import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true //això estat inicial
    });

    useEffect( () => { //executem únicament si la categoria canvia
        
        getGifs( category )
            .then( imgs => {
                // setTimeout( () => {
                    // console.log(imgs);
                    setState({
                        data: imgs,
                        loading: false
                    })
                // }, 1000 );
                
            })

    }, [category]) // la llista de dependencies la deixem buida així no renderitza tot el codi (prement un botó que no hi és al codi)


    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     });
    // }, 3000 );
    
    return state; //retornem objecte
}
