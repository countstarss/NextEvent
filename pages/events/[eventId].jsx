// Event detail page
import { useRouter } from "next/router";
import { getEventById } from '../../dummy-data'
import EventContent from "@/components/events/event-content";
import EventLogistics from "@/components/events/event-logistics";

const EventDetailPage = () => {
  const router = useRouter();

  console.log(router.query);
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if(!event) {
    return <h1>No event founded</h1>
  }

  return <>
      <EventLogistics 
        title={event.title}
        date={event.date}
        location={event.location}
        image={event.image}
      />
      <EventContent >
        <h3>{event.description}</h3>
      </EventContent>
  </>
}

export default EventDetailPage;