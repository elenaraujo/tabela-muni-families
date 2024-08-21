import React from 'react'
import AmmunitionCalculator from '../AmmunitionCalculator/AmmunitionCalculator'
import Divider from '../Divider/Divider'
import ProductPrices from '../ProductsPrices/ProductPrices'
import './Body.css'

const Body = () => {
  return(
    <div class='body'>
      <AmmunitionCalculator />
      <Divider />
      <ProductPrices />
    </div>
  )
}

export default Body
