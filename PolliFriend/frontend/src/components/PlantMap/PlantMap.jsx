import { useEffect, useState } from 'react'
import './PlantMap.css'
import map from '../../assets/istockphoto-1322626419-612x612.jpg'
import shrub from '../../assets/plant.svg'
import grid from '../../assets/grid.png'
var i = 1;
function PlantMap({ curPlantIcon, curPlantInfo, setCarbonScore, setWaterScore, setPollinScore}) {
    // console.log(curPlantInfo.plantData.plants[i].type)
    // useEffect = ({
    //     handleMapClick
    // }, [])
    const handleMapClick = (e) => {
        // need this to refresh as the user scrolls down
        const rect = e.target.getBoundingClientRect();
        console.log(e)
        const x = e.clientX;
        const y = e.screenY - rect.top;
        console.log(curPlantInfo)

        setItems([...items, { x, y, type: "plant" }]);
        // Variables are set up I just need to add calcs here
        console.log(curPlantInfo)
        setCarbonScore();
        setPollinScore();
        setWaterScore();
        // setItems((prevItems) =>
        //     prevItems.map((item, i) => (i === index ? newValue : item))
        // );
        i++;
    };
    //Temporary tests, to connect to the database
    const [items, setItems] = useState([]);
    // document.addEventListener("scroll", handleMapClick);

    return (
        <>
            <h1 style={{ color: "black" }}>
                {/* Initial Idea for grid, mostl likely will scrap but kept this here in case */}
                {/* <form >
                    <label>
                        Yard Dimensions:
                        <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
                        <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
                    </label>
                </form> */}

            </h1>
            <div className="map-container" onClick={handleMapClick} >
                <img src={grid} alt="Garden Map" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '30%' }} />

                {/* display clicks, could also be the issue with the dots */}
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`item ${item.type}`}
                        style={{
                            position: 'absolute',
                            top: item.y,
                            left: item.x,
                            backgroundImage: `url(${curPlantIcon})`,
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                            transform: 'translate(-50%, -50%)',

                        }}
                    />
                ))}
            </div>
            {/* <img src="" alt="" /> */}
        </>
    )
}

export default PlantMap
