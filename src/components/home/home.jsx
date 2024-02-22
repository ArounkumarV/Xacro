import React from 'react'
import Search from "../search-engine/searchEngine";
import HomeBground from "../homeBground/homeBground";
import Card from "../card/card";
import CardTwo from "../card-2/cardTwo";
import CardThree from "../card-3/cardThree";
import CardFour from "../card-4/cardFour";



export default function home() {
  return (
    <div>
        <HomeBground/>        
        <Card/>
        <CardTwo/>
        <CardFour/>
        <CardThree/>
        
    </div>
  )
}
