function Card(props) {
  let isSelected = props.isSelected ? 'visible' : 'hidden';

  let visibility = props.isMatched ? 'visible' : isSelected;

  return (
    <button
      className={`card ${props.content} ${visibility}`}
      onClick={props.handleClick}
      data-value={props.content}
      id={props.id}
    >
      {props.content}
    </button>
  )
}

export default Card;
