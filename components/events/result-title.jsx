import classes from './result-title.module.css'
import Button from '../UserInterface/button'

const ResultTitle = ({date}) => {
    const dateString = date.toString().split(' ').slice(1,4).join(' ')
  return (
    <div className={ classes.date }>
        <h2>Event in {dateString}</h2>
        <Button link='/events'>Show all events</Button>
    </div>
  )
}

export default ResultTitle