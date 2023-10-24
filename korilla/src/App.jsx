import { useState } from 'react'

import './App.css'
import Receipts from './components/Receipt';

function App() {

  const receipts = [
    {
      id: 1,
      person: 'Jeremy',
      order: {
        main: 'Burrito',
        protein: 'Skirt Steak',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
        drink: 'Thai Iced Tea',
        cost: 22,
      },
      paid: false,
    },
    {
      id: 2,
      person: 'Brittany',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Chicken',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
        drink: 'Korchata',
        cost: 19,
      },
      paid: false,
    },
    {
      id: 3,
      person: 'Tom',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20,
      },
      paid: false,
    },
    {
      id: 4,
      person: 'John',
      order: {
        main: 'Burrito Bowl',
        protein: 'Carnitas',
        rice: 'yellow rice',
        sauce: "Jalapeno Honey",
        toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
        drink: 'Pineapple Jarritos',
        cost: 23,
      },
      paid: true,
    },
  ];


  return (
    <>
    <h1>Korrila</h1>
      <div id='one'>
        
        <Receipts Person={receipts[0].person}
                  Main={receipts[0].order.main} 
                  Protein={receipts[0].order.protein}
                  Rice={receipts[0].order.rice}
                  Sauce={receipts[0].order.sauce}
                  Drink={receipts[0].order.drink}
                  Cost={receipts[0].order.cost}/>

        <Receipts Person={receipts[1].person}
                      Main={receipts[1].order.main} 
                      Protein={receipts[1].order.protein}
                      Rice={receipts[1].order.rice}
                      Sauce={receipts[1].order.sauce}
                      Drink={receipts[1].order.drink}
                      Cost={receipts[1].order.cost}/>

        <Receipts Person={receipts[3].person}
                      Main={receipts[3].order.main} 
                      Protein={receipts[3].order.protein}
                      Rice={receipts[3].order.rice}
                      Sauce={receipts[3].order.sauce}
                      Drink={receipts[3].order.drink}
                      Cost={receipts[3].order.cost}/>

      </div>          
    </>
  )
}

export default App
