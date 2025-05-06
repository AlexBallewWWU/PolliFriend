import './Banner.css'

function Banner({name}) {
    
    return (
        <div className='Header'>
            <div className='Banner'>
                <h1>{name}</h1>
            </div>
            <div className='Boarder'></div>
        </div>
        
    )
}

export default Banner
