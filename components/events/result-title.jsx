import classes from './result-title.module.css'
import Button from '../UserInterface/button'

const ResultTitle = ({date}) => {

    //TODO: 制作日期字符串
    const options = { month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className={ classes.date }>
        <h2>Event in {formattedDate}</h2>
        <Button link='/events'>Show all events</Button>
    </div>
  )
}

export default ResultTitle