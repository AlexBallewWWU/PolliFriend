import './Banner.css'
import logo from '../../../public/PolliFriendLogo.png'

function Banner({name}) {
    
    return (
        <div className='Header'>
            <div className='Banner'>
                <img style={{height : '4em', padding : '2%'
                }} src={logo}></img>
                <h1>{name}</h1>
            </div>
            <div className='Boarder'></div>
        </div>
        
    )
}

export default Banner
