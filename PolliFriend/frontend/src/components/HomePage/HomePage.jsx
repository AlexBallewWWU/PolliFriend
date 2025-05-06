import './HomePage.css'
import Banner from '../Banner/Banner'

function HomePage() {

    return (
        <div className='Body'>
            <div className='Banner'>
                <Banner name={"HomePage"}></Banner>
            </div>

            <div className='MainContent'>
                <div className='Title'>
                    <h2>Our Mission Story</h2>
                </div>
                <div className='DiscriptionBox'>
                    <p>At PolliFriend we seek to help everyone from city planners to homeowners create a sustainable and eco-friendly space. Our design space is easy for anyone to understand and learn how to create carbon, pollination, and people friendly spaces. Our education page also allows anyone to learn new things about designing sustainably</p>
                </div>
            </div>
            {/* <h1>HomePage</h1> */}
        </div>
    )
}

export default HomePage
