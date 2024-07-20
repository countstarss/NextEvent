import classes from './event-title.module.css'


const EventTitle = ({ event }) => {
  return (
    <div className={ classes.eventTitle }>
        <h1 className={ classes.center }>{event.title}</h1>
    </div>
  )
}

export default EventTitle;