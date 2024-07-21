// Event detail page
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getEventById,getAllEvents } from "@/helper/api-util";
import EventContent from "@/components/events/event-content";
import EventLogistics from "@/components/events/event-logistics";
import EventTitle from "@/components/events/event-title";
import Comments from "@/components/input/comments";

const EventDetailPage = (props) => {
  const router = useRouter();

  const { event } = props;
  // console.log(router.query);
  // const eventId = router.query.eventId;
  if(!event) {
      router.push('/404');
    return null; 
  }

  return <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content="find a lot of events that allow you to evolve"
        />
      </Head>
      <EventTitle event={event}/>
      <div className="eventDetail">
        <EventLogistics 
          // title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
        <EventContent >
          <h3>{event.description}</h3>
        </EventContent>
        <Comments eventId={event.id} />
      </div>
  </>
}

//TODO: 在这里需要添加context，因为我们需要确定我们为那一个id获取数据
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId)

  return {
    props:{
      event:event
    },
    revalidate: 30
  }
}

// MARK: - getStaticPaths
export async function getStaticPaths(context) {

  const allEvent = await getAllEvents();
  // const ids = allEvent.map((event) => event.id)

  const paths = allEvent.map((event) => ({ 
      params:{ eventId: event.id } 
  }));
  console.log(paths);
  return {
      paths,
      // 每次都渲染所有的页面，可能会浪费很多时间和资源
      // 打开fallback之后，即使是没有在上面列出的路由，也可以被即时加载
      fallback: false
  };
}

export default EventDetailPage;