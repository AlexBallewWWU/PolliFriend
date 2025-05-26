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


function GardenPlanPage() {
    const buttonClick = (type) => {
        console.log(type)
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
            <div>
                <div className='garden-map'>
                    <div className='add'>
                        <button title='Add Plants' onClick={() => buttonClick('plant')} className='add-plant'></button>
                        <button onClick={() => buttonClick('building')} className='add-building'></button>
                        <button onClick={() => buttonClick('water')} className='add-water'></button>
                        <button onClick={() => buttonClick('other')} className='add-other'></button>
                    </div>
                    <div className='map'>
                        <img src={tempMap} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>

                    </div>
                    <div className='garden-barChart'>
                       
                        <Bar data = {data} options = {options}></Bar>

                    </div>
                    {/* <div className='garden-stats'>
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
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default GardenPlanPage
