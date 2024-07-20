import classes from './event-logistics.module.css'
import Card from '../UserInterface/Card';
import Image from 'next/image';

const EventLogistics = (props) => {
  return (
    <Card >
        <div className={classes.logistics }>
            <div className={ classes.image }>
                {/* <img src={props.image} alt="Event image" /> */}
                <Image src={props.image} alt="Event image" width={300} height={300}/>
            </div>
            <div className={ classes.info }>
                <h3>{props.date}</h3>
                <h3>{props.location}</h3>
            </div>
        </div>
    </Card>
  )
}

export default EventLogistics;