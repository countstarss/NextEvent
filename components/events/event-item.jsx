import classes from './event-item.module.css'
import Button from "../UserInterface/button";
import Image from 'next/image';

// MARK: - import icon
import DateIcon from "../icons/date-icon";
import LocationIcon from "../icons/location-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({ event }) => {

    const { title, image, date, location, description,id } = event;
    const exploreLink = `/events/${id}`

    return <li  className={classes.item}>
        <Image src={image} alt="image" className={ classes.image } width={300} height={300}/>
        {/* <img src={image} alt="image" className={ classes.image }/> */}
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={ classes.location }>
                    <LocationIcon />
                    <b>{location}</b>
                </div>
                <div className={ classes.date }>
                    <DateIcon />
                    <b>{date}</b>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                </Button>
            </div>
        </div>
    </li>
}

export default EventItem