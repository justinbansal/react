function Card(props) {
  return (
    <div className={`card ${props.content}`}>{props.content}</div>
  )
}

export default Card;
