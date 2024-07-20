import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/helper/api-util";
import { useRouter } from "next/router";
import Head from "next/head";



const AllEventsPage = (props) => {

  const { events } = props;
  
  //TODO: 搜索按钮

  const router = useRouter()
  function findEventsHandler(year,month) {
    const fullPath=`/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <div className="home">
        <Head>
          <title>All Events</title>
          <meta 
            name="description"
            content="find a lot of events that allow you to evolve"
          />
        </Head>
        <h1 className="title">All Events</h1>  
        <EventList Events={events}>
          <EventSearch onSearch={findEventsHandler}/>
        </EventList>
    </div>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props:{
      events: events
    },
    revalidate:60 // 根据需要程度决定更新时间
  }
}

export default AllEventsPage;
