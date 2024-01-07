import classes from './Card.module.css'

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>; //props.children means the things wrapped inside the card components, .children is a default react functionality
};

export default Card;