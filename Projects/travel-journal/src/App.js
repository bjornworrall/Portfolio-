import React from 'react';
import Header from './components/header';
import Card from "./components/card"
import Data from "./components/data"



function App() {
    const cardData = Data.map(item => {
      return <Card 
      key={item.id}
      item={item}
      />
    })

    return (
      <div >
      <Header />
      {cardData}
    </div>
    )
}

export default App;
