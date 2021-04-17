// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // el usestate torna a renderitzar tot el codi, es possible que ens posem en cicles infinits, per això utilitzarem useEffect.

    // const [images, setImages] = useState([]);
    
    const { data:images, loading } = useFetchGifs( category );

    // console.log(state);
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p> }

            <div className="card-grid">
                    {
                        images.map( img => (
                            // <li key={ id }>{ title }</li> 
                            // <GifGridItem  
                            //     key={img.id}
                            //     img={ img } 
                            // /> // altra manera desestructuran molt usada:

                            <GifGridItem
                                key={img.id}
                                { ...img }
                            />
                        ))                    
                    }
                
            </div>
        </>
    )
}
