interface CardProps {
  isSelected: boolean;
  isMatched: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  content: string;
}

function Card(props: CardProps) {
  let isSelected = props.isSelected ? 'visible' : 'hidden';

  let visibility = props.isMatched ? 'visible' : isSelected;

  return (
    <button
      className={`card ${props.content} ${visibility}`}
      onClick={props.handleClick}
      data-value={props.content}
    >
      {props.content}
    </button>
  )
}

export default Card;
