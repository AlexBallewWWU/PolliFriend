import { useState } from 'react'
import './PlantSelection.css'

function PlantSelection({plantData}) {

  console.log(plantData)

  return (
    <div className='container'>
      <Category name={"Shrub"} plantData={plantData}></Category>
      <Category name={"Perennial"} plantData={plantData}></Category>
      <Category name={"Tree"} plantData={plantData}></Category>
    </div>
    )
}

function Category({name, plantData}) {
  const [arrowDirection, setArrowDirection] = useState("up");

  const changeArrowDirection = () => {
    setArrowDirection(arrowDirection == "up" ? "down" : "up");
  }

  return (
    <>
      <div className='category-container' onClick={changeArrowDirection}>
        <div className='category'> 
          {name}
          { arrowDirection == "up" ?  <div className='arrow-up'/> : <div className='arrow-down'/> }
        </div>
      </div>
      { arrowDirection == "down" &&  <Plants name={name} plantData={plantData}></Plants> }
    </>
  )
}

function Plants({name, plantData}) {


  return (
    plantData.plants.map((item) => {
      {console.log(item.type + " " + name)}

      return (
        item.type == name && <div className='plant-container'>{item.name}</div>
      ) 
    })
  )
}

export default PlantSelection