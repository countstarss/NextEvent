/*
TODO: Starting page
MARK: - Starting page
*/
// 

/*
TODO: 使用getStaticProps获取数据
MARK: - getStaticProps
*/
import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-util";

function HomePage(props) {

    const featuredEvents = props.events;

    if(!featuredEvents || featuredEvents.length === 0) {
        return <p>Data fetching Failed</p>
    }

    return<div className="home">
        <h1 className="title">Events</h1>  
        <EventList Events={featuredEvents}/>
    </div>
}

export async function getStaticProps() {

    const featuredEvents = await getFeaturedEvents()

    return {
        props: { 
            events:featuredEvents
         },
         revalidate:600 // 十分钟更新一次
    };
}

export default HomePage;