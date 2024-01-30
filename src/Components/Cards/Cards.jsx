import React from 'react'
import { CardsData } from '../Data/Data'
import Card from '../Card/Card'
import './Cards.css'

const Cards = () => {
  return (
    <div className='Cards'>
      {CardsData.map((card, index) => {
        return (<div className="parentContainer" key={index}>
          <Card
          title = {card.title}
          // boxShadow = {card.color.boxShadow}
          barvalue = {card.barvalue}
          remaining = {card.remaining}
          icon = {card.icons}
          used = {card.used}
          total = {card.total}
          />
        </div>)  
      })}
      
    </div>
  )
}

export default Cards;
