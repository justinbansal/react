function Card(props) {
  let visibility = props.isSelected ? 'visible' : 'hidden';

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
