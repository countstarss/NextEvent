import classes from './event-content.module.css'


const EventContent = (props) => {
  return (
    <div className={ classes.content }>
        {props.children}
    </div>
  )
}

export default EventContent;