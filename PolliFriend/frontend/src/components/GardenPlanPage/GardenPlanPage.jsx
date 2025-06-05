import './GardenPlanPage.css'
import tempMap from '../../assets/temp.svg'
import Banner from '../Banner/Banner.jsx'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
)
import PlantSelection from '../PlantSelection/PlantSelection.jsx'
import { useEffect, useState } from 'react'
import PlantMap from '../PlantMap/PlantMap.jsx';


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
                    "Content-Type": "application/json"
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
        switch (type) {
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

    const data = {
        labels: ['Fire safty', 'CO2 consumption', 'Water Consumption', 'Plants'],
        datasets: [{
            label: 'Garden Stats',
            data: [65, 59, 80, 81],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(98, 98, 97, 0.2)',
                'rgba(61, 105, 224, 0.2)',
                'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(98, 98, 97)',
                'rgb(61, 105, 224)',
                'rgb(255, 205, 86)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                min: 0,
                max: 100
            }
        },
        plugins: {
            legend: {
                display: false,
                title: {
                    font: {
                        weight: 'bold'
                    }
                }
            },
            title: {
                display: true,
                text: 'Garden Stats',
                font: {
                    weight: 'bold',
                    size: 20
                }
            }
        }
    }

    return (
        <>
            <Banner name={"Garden Planning Page"}></Banner>
            {/* <div> */}
            <div className='garden-map'>

                {/* <div className='add'>
                    <button title='Add Plants' onClick={() => buttonClick('plant')} className='add-plant'></button>
                    <button title='Add Building' onClick={() => buttonClick('building')} className='add-building'></button>
                    <button title='Add Water' onClick={() => buttonClick('water')} className='add-water'></button>
                    <button title='Add Road' onClick={() => buttonClick('other')} className='add-other'></button>
                </div> */}
                {/* <div className='map-container'> */}
                    {/* <div className='map'> */}
                    {/* <div> */}
                    {plantSelection && <PlantSelection plantData={plantData}> </PlantSelection>}
                    {/* </div> */}
                    {/* </div> */}
                    <PlantMap></PlantMap>
                    {/* <img src={tempMap} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img> */}
                    
                {/* </div> */}
            </div>
            <div className='garden-barChart'>

<Bar data={data} options={options}></Bar>

</div>

        </>
    )
}

export default GardenPlanPage
