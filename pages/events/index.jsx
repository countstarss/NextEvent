import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";



const AllEventsPage = () => {

  const router = useRouter()
  const  events = getAllEvents();
  function findEventsHandler(year,month) {
    const fullPath=`/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <div className="home">
        <h1 className="title">All Events</h1>  
        <EventList Events={events}>
          <EventSearch onSearch={findEventsHandler}/>
        </EventList>
    </div>
  )
}

export default AllEventsPage;
