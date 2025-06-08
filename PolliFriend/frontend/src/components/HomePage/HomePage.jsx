import './HomePage.css'
import HomeBanner from '../HomePage/HomeBanner'
import BoxButton from '../BoxButton/BoxButton'


function HomePage() {

    return (
        
        <div className='Body'>
            <HomeBanner name={"HomePage"}></HomeBanner>
            
            <div className='PlanSection'>
                <div className='PlanPreview'></div>
                <div className='PlanDesctiption'>
                    <p>
                    Plan out a layout of how your garden should look and what plants work best for you.
                    </p>
                </div>
                <BoxButton title={"Plan Your Garden"} pageURL={"/GardenPlanPage"}></BoxButton>
            </div>

            <div className='EducationSection'>
                <div className='EducationPreview'></div>
                <div className='EducationDesctiption'>
                    <p>
                    Learn more about how to sustainably maintain your garden and what plants might be ideal for your environment.
                    </p>
                </div>
                <BoxButton title={"What is Sustainable gardening"} pageURL={"/EducationPage"}></BoxButton> 
            </div>

            <div className='CommunitySection'>
                <div className='CommunityPreview'></div>
                <div className='CommunityDesctiption'>
                    <p>
                    Look at examples submitted from the community of their garden before and after remodeling it.
                    </p>
                </div>
                <BoxButton title={"Community Examples"} pageURL={"/CommunityPage"}></BoxButton>
            </div>
        </div>
    )
}

export default HomePage