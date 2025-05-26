import { useState } from 'react'
import './PlantSelection.css'
import temp from '../../assets/Osoberry-Image.jpeg'

function PlantSelection({plantData}) {

  console.log(plantData)

  return (
    <div className='container'>
      <Category name={"Shrub"} plantData={plantData}></Category>
      <Category name={"Perennial"} plantData={plantData}></Category>
      <Category name={"Tree"} plantData={plantData}></Category>
      <Category name={"Ferns"} plantData={plantData}></Category>
      <Category name={"Fruits"} plantData={plantData}></Category>
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
        item.type == name && 
        <div className='plant-container'>
          <img src={item.image} alt='img' style={{width: '20%', height: '100%'}}></img>
          <div className='plant-info-container'>
            <div className='plant-title-container'>
              {item.name} 
              <div className='plus-button'> + </div>
            </div>
            <p> {item.info}</p>
            <strong> Scores: Carbon: ({item.carbonScore}/3), Pollination: ({item.pollinationScore}/10), Water: ({item.waterScore}/6) </strong>
          </div>
        </div>
      ) 
    })
  )
}

export default PlantSelection