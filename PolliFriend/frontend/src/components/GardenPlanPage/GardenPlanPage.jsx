import './GardenPlanPage.css'
import tempMap from '../../assets/temp.svg'
import Banner from '../Banner/Banner.jsx'


function GardenPlanPage() {
    const buttonClick = (type) => {
        console.log(type)
    }

    return (
        <>
            <Banner name={"Garden Planning Page"}></Banner>
            <div>
                <div className='garden-map'>
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
            </div>
        </>
    )
}

export default GardenPlanPage
