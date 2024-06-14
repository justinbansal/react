function Card(props) {
  let visibility = props.choices.length > 0 && props.choices.find(choice => choice.id === props.id) ? 'visible' : 'hidden';

  return (
    <button
      className={`card ${props.content} ${visibility}`}
      onClick={(e) => props.handleClick(e)}
      data-value={props.content}
      id={props.id}
      disabled={visibility === 'visible'}
    >
      {props.content}
    </button>
  )
}

export default Card;
