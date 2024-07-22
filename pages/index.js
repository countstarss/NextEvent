import Head from "next/head";
import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-util";
import NewsletterRegistration from "@/components/input/newsletter-registration";

function HomePage(props) {

    const featuredEvents = props.events;

    if (!featuredEvents || featuredEvents.length === 0) {
        return <p>Data fetching Failed</p>
    }

    return <div className="home">
        <Head>
            <title>NextJS Event</title>
            <meta 
                name="name" 
                content='find a lot of events that allow you to evolve' 
            />
        </Head>
        <h1 className="title">Events</h1>
        <EventList Events={featuredEvents} />
        <NewsletterRegistration />
    </div>
}

/*
TODO: 使用getStaticProps获取数据
MARK: - getStaticProps
*/
export async function getStaticProps() {

    const featuredEvents = await getFeaturedEvents()

    return {
        props: {
            events: featuredEvents
        },
        revalidate: 600 // 十分钟更新一次
    };
}

export default HomePage;