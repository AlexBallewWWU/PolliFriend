import './GardenPlanPage.css'
import tempMap from '../../assets/temp.svg'
import Banner from '../Banner/Banner.jsx'
import PlantSelection from '../PlantSelection/PlantSelection.jsx'
import { useEffect, useState } from 'react'

function GardenPlanPage() {

    const [plantSelection, setPlantSelection] = useState(true);
    const [plantData, setPlantData] = useState([]);

            // Could cache this this in local storage if we wanted
    useEffect(() => {
        getPlants();
    }, [])

    const getPlants = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/plants", {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json"
                },
            })

            const responseData = await response.json();
            if (response.ok) {
                setPlantData(responseData)
            } else {
                console.log(responseData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const buttonClick = (type) => {
        switch(type) {
            case "plant":
                setPlantSelection(plantSelection ? false : true);
                break;
            case "building":
                break;
            case "water":
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Banner name={"Garden Planning Page"}></Banner>
            {/* <div> */}
                <div className='garden-map'>
                {plantSelection && <PlantSelection plantData={plantData}> </PlantSelection>}   {/* temp location move where ever */}

                    <div className='add'>
                        <button title='Add Plants' onClick={() => buttonClick('plant')} className='add-plant'></button>
                        <button title='Add Building'onClick={() => buttonClick('building')} className='add-building'></button>
                        <button title='Add Water'onClick={() => buttonClick('water')} className='add-water'></button>
                        <button title='Add Road' onClick={() => buttonClick('other')} className='add-other'></button>
                    </div>
                    <div className='map'>
                        <img src={tempMap} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>

                    </div>
                    <div className='garden-stats'>
                        <div className='bg-1'>
                            <div className='stat'></div>
                        </div>
                        <div className='bg-2'>
                            <div className='stat'></div>
                        </div>
                        <div className='bg-3'>
                            <div className='stat'></div>
                        </div>
                        <div className='bg-4'>
                            <div className='stat'></div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default GardenPlanPage
