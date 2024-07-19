// Filtered events page
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import ResultTitle from "@/components/events/result-title";
import Button from "@/components/UserInterface/button";

const FilteredEventPage = () => {

  const router = useRouter();
  const filterData = router.query.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  if (isNaN(numYear) ||
     isNaN(numMonth) || 
     numYear > 2030 || 
     numYear < 2000 || 
     numMonth < 1 || 
     numMonth > 12) {
        return(
          <div className="errorInfo">
            <h3>Invaild filter,please adjust your values</h3>
            <Button link='/events'>Back to AllEvents</Button>
          </div>
        )
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  // 假设 numYear 和 numMonth 是从表单中获取的值
  const Year = parseInt(numYear, 10);
  const Month = parseInt(numMonth, 10);

  // 创建一个日期对象
  const date = new Date(Year, Month - 1);


  if (!filteredEvents || filteredEvents.length === 0) {
    return <div className="errorInfo">
      <h3>No Events found for the chosen filter!</h3>
      <Button link='/events'>Back to AllEvents</Button>
    </div>
  }


  return (
    <div>
      <ResultTitle date={date} />
      <EventList Events={filteredEvents} />
    </div>
  )
}

export default FilteredEventPage;