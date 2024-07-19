/*
TODO: Starting page
MARK: - Starting page
*/
// 

import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";

function HomePage() {
    const featuredEvents = getFeaturedEvents()
    console.log(featuredEvents);


    return<div className="home">
        <h1 className="title">Events</h1>  
        <EventList Events={featuredEvents}/>
    </div>
}

export default HomePage;