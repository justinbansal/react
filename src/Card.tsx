interface CardProps {
  isSelected: boolean;
  isMatched: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  content: string;
  url?: string,
  name?: string,
}

function Card(props: CardProps) {
  let isSelected = props.isSelected ? 'visible' : 'hidden';

  let visibility = props.isMatched ? 'visible' : isSelected;

  return (
    <button
      className={`card ${props.content} ${visibility}`}
      onClick={props.handleClick}
      data-value={props.content}
      disabled={visibility === 'visible' ? true : false}
    >
      {props.content ? props.content: <img src={props.url} alt={props.name} />}
    </button>
  )
}

export default Card;
