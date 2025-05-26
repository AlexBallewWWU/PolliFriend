import { useEffect, useState } from 'react'
import './PlantMap.css'
import map from '../../assets/istockphoto-1322626419-612x612.jpg'
function PlantMap() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMapClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setItems([...items, { x, y, type: mode }]);
    };
    const [items, setItems] = useState([
        { id: 1, x: 100, y: 150, type: 'plant', label: 'Tomato', icon: '🍅' },
        { id: 2, x: 300, y: 200, type: 'building', label: 'Shed', icon: '🏠' },
    ]);
    const drawPerimeter = () => {
        console.log(x)
        console.log(y)
        return (
            <div
                style={{
                    width: x,
                    height: y,
                    backgroundColor: "black",
                    border: '2px solid black',
                }}
            ></div>
        )
    }
    useEffect(() => {
        // drawPerimeter()

    }, [x, y]);
    return (
        <>
            <h1 style={{ color: "black" }}>
                {/* <form >
                    <label>
                        Yard Dimensions:
                        <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
                        <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
                    </label>
                </form> */}

            </h1>
            <div className="map-container" onClick={handleMapClick} >
                <img src={map} alt="Garden Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                {/* {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`item ${item.type}`}
                        style={{
                            position: 'absolute',
                            top: item.y,
                            left: item.x,
                            width: '20px',
                            height: '20px',
                            backgroundColor: item.type === 'plant' ? 'green' :
                                item.type === 'building' ? 'gray' :
                                    'blue',
                            borderRadius: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                ))} */}
            </div>
            <img src="" alt="" />
        </>
    )
}

export default PlantMap
