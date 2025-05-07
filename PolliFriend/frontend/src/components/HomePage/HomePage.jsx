import './HomePage.css'
import Banner from '../Banner/Banner'
import BoxButton from '../BoxButton/BoxButton'


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

                <div className='PlanSection'>
                    <div className='PlanDesctiption'>
                        <p>
                        Plan out a layout of how your garden should look and what plants work best for you.
                        </p>
                    </div>
                    <BoxButton title={"Plan Your Garden"} pageURL={"/GardenPlanPage"}></BoxButton>
                </div>

                <div className='EducationSection'>
                    <BoxButton title={"What is Sustainable gardening"} pageURL={"/EducationPage"}></BoxButton> 
                    <div className='EducationDesctiption'>
                        <p>
                        Learn more about how to sustainably maintain your garden and what plants might be ideal for your environment.
                        </p>
                    </div>
                </div>

                <div className='CommunitySection'>
                    <div className='CommunityDesctiption'>
                        <p>
                        Look at examples submitted from the community of their garden before and after remodeling it.
                        </p>
                    </div>
                    <BoxButton title={"Community Examples"} pageURL={"/CommunityPage"}></BoxButton>
                </div>
            </div>
        </div>
    )
}

export default HomePage
