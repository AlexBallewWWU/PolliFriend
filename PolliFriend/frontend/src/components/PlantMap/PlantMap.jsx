import { useEffect, useState } from 'react'
import './PlantMap.css'
import map from '../../assets/image.png'

function PlantMap({ curPlantIcon, curPlantInfo, setCarbonScore, setWaterScore, setPollinScore}) {

    const [items, setItems] = useState([]);


    const handleMapClick = (e) => {
        // need this to refresh as the user scrolls down
        const rect = e.target.getBoundingClientRect();
        console.log(e)
        const x = e.clientX;
        const y = e.screenY - rect.top;
        console.log(curPlantInfo)

        setItems([...items, { x, y, plantInfo: curPlantInfo, url: curPlantIcon }]);

        const stats = calculateStats(curPlantInfo);
        console.log(stats)

        setCarbonScore(stats.carbonScore);
        setPollinScore(stats.pollinScore);
        setWaterScore(stats.waterScore);
    };

    // function to calculate stats for graph
    const calculateStats = (curPlantInfo) => {

        let carbon = 0;
        let pollin = 0;
        let water = 0;
        let total = 0;

            // state is aysnc so manual update
        if (curPlantInfo.waterScore) {
            carbon = curPlantInfo.carbonScore/3;
            pollin = curPlantInfo.pollinationScore/10;
            water = curPlantInfo.waterScore/6;
            total = 1;
        }

            // all prev items
        items.map( item => {
            console.log(item.plantInfo.pollinationScore)
            if (item.plantInfo.waterScore) {
                carbon += item.plantInfo.carbonScore/3;
                pollin += item.plantInfo.pollinationScore/10;
                water += item.plantInfo.waterScore/6;
                total += 1;
            }
        })
        
        return {carbonScore : (carbon/total) * 100, pollinScore : (pollin/total) * 100, waterScore : (water/total) * 100}
    }

    return (
        <>
            <h1 style={{ color: "black" }}> </h1>
            <div className="map-container" onClick={handleMapClick} >
                <img src={map} alt="Garden Map" style={{ width: '100%', height: '100%', objectFit: 'cover'}} />

                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`item.plant`}
                        style={{
                            position: 'absolute',
                            top: item.y,
                            left: item.x,
                            backgroundImage: `url(${item.url})`,
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundPosition: 'center',
                            backgroundSize: '100%',
                            transform: 'translate(-50%, -50%)',
                            backgroundRepeat: 'no-repeat'

                        }}
                    />
                ))}
            </div>
        </>
    )
}

export default PlantMap
