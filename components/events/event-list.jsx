import EventItem from "./event-item"
import classes from './event-list.module.css'


function EventList({ Events,children }) {

    return (<>
        <ul className={ classes.list }>
            {children}
            {Events && Events.map(event => <EventItem key={event.id} event={event} />)}
        </ul>
    </>
    )
}

export default EventList;
