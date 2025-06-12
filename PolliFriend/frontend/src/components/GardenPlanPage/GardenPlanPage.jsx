import './GardenPlanPage.css'
import Banner from '../Banner/Banner.jsx'
import PlantSelection from '../PlantSelection/PlantSelection.jsx'
import { useEffect, useState } from 'react'
import PlantMap from '../PlantMap/PlantMap.jsx';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
)

function GardenPlanPage() {

    const [plantData, setPlantData] = useState([]);
    const [curPlantIcon, setCurPlantIcon] = useState('');
    const [curPlantInfo, setCurPlantInfo] = useState('');
    const [carbonScore, setCarbonScore] = useState(0);
    const [waterScore, setWaterScore] = useState(0);
    const [pollinScore, setPollinScore] = useState(0);


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

    const data = {
        labels: ['CO2 consumption', 'Water Consumption', 'Pollination'],
        datasets: [{
            label: 'Garden Stats',
            data: [carbonScore, waterScore, pollinScore],
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
            <div className='garden-map'>
                    <PlantSelection plantData={plantData} setCurPlantInfo={setCurPlantInfo} setCurPlantIcon={setCurPlantIcon}> </PlantSelection>
                    <PlantMap curPlantIcon={curPlantIcon} curPlantInfo={curPlantInfo} setCarbonScore={setCarbonScore} setWaterScore={setWaterScore} setPollinScore={setPollinScore}></PlantMap>
            </div>
            <div className='garden-barChart'>
                <Bar data={data} options={options}></Bar>
            </div>
        </>
    )
}

export default GardenPlanPage
