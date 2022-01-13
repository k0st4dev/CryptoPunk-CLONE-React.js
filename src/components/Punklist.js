import React from 'react'
import CollectionCard from './CollectionCard'
import './Punklist.css'

export const Punklist = ({punkListData, setSelectedPunk}) => {
  return (
    <div className='punkList'>
        {punkListData.map(punk=>(
          <div onClick={() => setSelectedPunk(punk.token_id)}>
            <CollectionCard
                key={punk.token_id}
                id={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
            />
          </div>
        ))}
    </div>
  )
}
