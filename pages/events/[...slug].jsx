// Filtered events page
// import { getFilteredEvents } from "@/helper/api-util";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import ResultTitle from "@/components/events/result-title";
import Button from "@/components/UserInterface/button";
import useSWR from "swr";
import { useEffect,useState } from "react";
import Head from "next/head";


const FilteredEventPage = () => {

  const [loadedEvents,setLoadedEvents] = useState();
  /*
  TODO: 路由的处理
  MARK: - router
  */
  const router = useRouter();
  const filterData = router.query.slug;

  if(!filterData) {
    return<div className="errorInfo">
          <h3>Invaild filter,please adjust your values</h3>
          <Button link='/events'>Back to AllEvents</Button>
        </div>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear
  const numMonth = +filteredMonth


  // TODO: Client DataFetching
  // MARK: Client DataFetching
  const fetcher = (url) => fetch(url).then(res => res.json())
  const { data,error } = useSWR('https://react-project-5e3c2-default-rtdb.asia-southeast1.firebasedatabase.app/events.json',fetcher);

  useEffect(() => {
    if(data) {
      const events = [];

      for(const key in data) {
        events.push({
          id:key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  },[data])

  if(!loadedEvents) {
    return <p className="center">Loading</p>
  }
  
  let filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  let pageHeadData = (
    <Head>
          <title>Filtered Events</title>
          <meta
            name="description"
            content={`A list of events`}
          />
    </Head>
  ) 

  if (isNaN(numYear) ||
     isNaN(numMonth) || 
     numYear > 2030 || 
     numYear < 2000 || 
     numMonth < 1 || 
     numMonth > 12||
     error
    ) {
        return(
          <div className="errorInfo">
            {pageHeadData}
            <h3>Invaild filter,please adjust your values</h3>
            <Button link='/events'>Back to AllEvents</Button>
          </div>
        )
  }


  // 假设 numYear 和 numMonth 是从表单中获取的值
  const Year = parseInt(numYear, 10);
  const Month = parseInt(numMonth, 10);

  // 创建一个日期对象
  const date = new Date(Year, Month - 1);


  if (!filteredEvents || filteredEvents.length === 0) {
    return <div className="errorInfo">
      {pageHeadData}
      <h3>No Events found for the chosen filter!</h3>
      <Button link='/events'>Back to AllEvents</Button>
    </div>
  }

    // 更新后的pageHeadData
    pageHeadData = (
      <Head>
            <title>Filtered Events</title>
            <meta
              name="description"
              content={`All events for ${numMonth}/${numYear}`}
            />
      </Head>
    )

  // ======== getServerSideProps========
  
  // if(props.hasError) {
  //   return<div className="errorInfo">
  //       <h3>No Events found for the chosen filter!</h3>
  //       <Button link='/events'>Back to AllEvents</Button>
  //     </div>
  // }

  // const filteredEvents = props.events;

  // if (!filteredEvents || filteredEvents.length === 0) {
  //   return <div className="errorInfo">
  //     <h3>No Events found for the chosen filter!</h3>
  //     <Button link='/events'>Back to AllEvents</Button>
  //   </div>
  // }

  // const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      { pageHeadData }
      <ResultTitle date={date} />
      <EventList Events={filteredEvents} />
    </div>
  )
}

export default FilteredEventPage;


// ======== getServerSideProps========

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const filterData = params.slug;

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear
//   const numMonth = +filteredMonth

//   if (isNaN(numYear) ||
//      isNaN(numMonth) || 
//      numYear > 2030 || 
//      numYear < 2000 || 
//      numMonth < 1 || 
//      numMonth > 12) {
//         return{
//           props:{
//             hasError:true
//           },
//           notFound:true,
//         };
//   }
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth
//   });

//   return {
//     props:{
//       events:filteredEvents,
//       date: {
//         year:numYear,
//         month:numMonth
//       }
//     }
//   }

// }

