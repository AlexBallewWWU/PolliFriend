import { useState } from 'react'
import './PlantSelection.css'
import plantIcon from '../../assets/plant.svg'
import buildingIcon from '../../assets/house.svg'
import waterIcon from '../../assets/water-drop-png-plumbing-sewer-repair-septic-service-36.png'

function PlantSelection({plantData}) {

  console.log(plantData)

  return (
    <div className='container'>
      <div className='category-container' style={{justifyContent: 'center', width: '97%', fontSize: "30px", padding: 0}}>
        <img src={plantIcon} style={{width: '27%'}}></img>
      </div>
      <Category type={"Shrub"} plantData={plantData}></Category>
      <Category type={"Perennial"} plantData={plantData}></Category>
      <Category type={"Tree"} plantData={plantData}></Category>
      <div className='category-container' style={{justifyContent: 'center', width: '97%', fontSize: "30px"}}>
        <img src={buildingIcon} style={{width: '20%'}}></img>
      </div>
      <Category type={"Rock"} plantData={plantData}></Category>
      <Category type={"Fence"} plantData={plantData}></Category>
      <Category type={"Statue"} plantData={plantData}></Category>
      <Category type={"Steps"} plantData={plantData}></Category>
      <Category type={"Table"} plantData={plantData}></Category>
      <div className='category-container' style={{justifyContent: 'center', width: '97%', fontSize: "30px"}}>
        <img src={waterIcon} style={{width: '20%'}}></img>
      </div>
      <Category type={"Fountain"} plantData={plantData}></Category>
      <Category type={"Pond"} plantData={plantData}></Category>
      <Category type={"Pool"} plantData={plantData}></Category>
      {/* <Category name={"Fruits"} plantData={plantData}></Category> */}

    </div>
    )
}

function Category({type, plantData}) {
  const [arrowDirection, setArrowDirection] = useState("up");

  const changeArrowDirection = () => {
    setArrowDirection(arrowDirection == "up" ? "down" : "up");
  }

  return (
    <>
      <div className='category-container' onClick={changeArrowDirection}>
        <div className='category'> 
          {type}
          { arrowDirection == "up" ?  <div className='arrow-up'/> : <div className='arrow-down'/> }
        </div>
      </div>
      { arrowDirection == "down" && (type == "Shrub" || type == "Perennial" ||  type == "Tree") 
        &&  <Plants type={type} plantData={plantData}></Plants> }
      { arrowDirection == "down" && (type == "Rock")  /* add other categories here*/ 
        &&  <Structure type={type} plantData={plantData}></Structure> }
    </>
  )
}

function Plants({type, plantData}) {

  const addPlant = () => {
    console.log("Adding plant")
    // functionality here, might be a global var situation
  }

  return (
    plantData.plants.map((item) => {
      return (
        item.type == type && 
        <div className='plant-container'>
          <img src={item.image} alt='img' style={{width: '20%', height: '100%'}}></img>
          <div className='plant-info-container'>
            <div className='plant-title-container'>
              {item.name} 
              <div className='plus-button' onClick={addPlant}> + </div>
            </div>
            <p> {item.info}</p>
            <strong> Scores: Carbon: ({item.carbonScore}/3), Pollination: ({item.pollinationScore}/10), Water: ({item.waterScore}/6) </strong>
          </div>
        </div>
      ) 
    })
  )
}

function Structure({type, plantData}) {

  const addPlant = () => {
    console.log("Adding plant")
    // functionality here, might be a global var situation
  }

  return (
    plantData.plants.map((item) => {
      return (
        item.type == type && 
        <div className='plant-container'>
          <img src={item.image} alt='img' style={{width: '20%', height: '100%'}}></img>
          <div className='plant-info-container'>
            <div className='plant-title-container'>
              {item.name} 
              <div className='plus-button' onClick={addPlant}> + </div>
            </div>
            <p> {item.info}</p>
          </div>
        </div>
      ) 
    })
  )
}


export default PlantSelection