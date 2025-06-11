import { useState } from 'react'
import './PlantSelection.css'
import plantIcon from '../../assets/plant.svg'
import buildingIcon from '../../assets/house.svg'
import waterIcon from '../../assets/water-drop-png-plumbing-sewer-repair-septic-service-36.png'
import shrubIcon from '../../assets/shrub-icon.png'
import flowerIcon from '../../assets/flower-icon.png'
import treeIcon from '../../assets/tree-icon.png'
import smallRock from '../../assets/small-rock.png'
import triangleRock from '../../assets/triangle-rock.png'
import wideRock from '../../assets/wide-rock.png'

function PlantSelection({plantData, setCurPlantInfo, setCurPlantIcon}) {

  console.log(plantData)

  return (
    <div className='container'>
      <div className='category-container' style={{justifyContent: 'center', width: '100%', fontSize: "30px", padding: 0}}>
        <img src={plantIcon} style={{width: '27%'}}></img>
      </div>
      <Category type={"Shrub"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <Category type={"Perennial"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <Category type={"Tree"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <div className='category-container' style={{justifyContent: 'center', width: '97%', fontSize: "30px"}}>
        <img src={buildingIcon} style={{width: '20%'}}></img>
      </div>
      <Category type={"Rock"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <Category type={"Fence"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <Category type={"Statue"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <Category type={"Steps"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <Category type={"Table"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <div className='category-container' style={{justifyContent: 'center', width: '97%', fontSize: "30px"}}>
        <img src={waterIcon} style={{width: '20%'}}></img>
      </div>
      <Category type={"Fountain"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <Category type={"Pond"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
      <Category type={"Pool"} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Category>
    </div>
    )
}

function Category({type, plantData, setCurPlantInfo, setCurPlantIcon}) {
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
        &&  <Plants type={type} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Plants> }
      { arrowDirection == "down" && (type == "Rock")  /* add other categories here*/ 
        &&  <Structure type={type} plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}></Structure> }
    </>
  )
}

function Plants({type, plantData, setCurPlantInfo, setCurPlantIcon}) {

  const addPlant = (item) => {
    console.log("Adding plant" + type)
    setCurPlantInfo(item);
    if (item.type == 'Shrub') {
      console.log(shrubIcon);
      setCurPlantIcon(shrubIcon);
    } else if (item.type == 'Perennial') {
      console.log(flowerIcon);
      setCurPlantIcon(flowerIcon)
    } else {
      console.log(treeIcon);
      setCurPlantIcon(treeIcon)
    }
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
              <div className='plus-button' onClick={() => addPlant(item)}> + </div>
            </div>
            <p> {item.info}</p>
            <strong> Scores: Carbon: ({item.carbonScore}/3), Pollination: ({item.pollinationScore}/10), Water: ({item.waterScore}/6) </strong>
          </div>
        </div>
      ) 
    })
  )
}

function Structure({type, plantData, setCurPlantInfo, setCurPlantIcon}) {

  const addPlant = (type) => {
    console.log("Adding plant")
    // functionality here, might be a global var situation
    if (type == 'Small Rock') {
      console.log(smallRock);
      setCurPlantIcon(smallRock);
    } else if (type == 'Triangle Rock') {
      console.log(triangleRock);
      setCurPlantIcon(triangleRock)
    } else {
      console.log(wideRock);
      setCurPlantIcon(wideRock)
    }
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
              <div className='plus-button' onClick={() => addPlant(item.name)}> + </div>
            </div>
            <p> {item.info}</p>
          </div>
        </div>
      ) 
    })
  )
}


export default PlantSelection