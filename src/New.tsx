interface NewProps {
  handleNewGameClick: React.MouseEventHandler<HTMLButtonElement>;
}

function New(props: NewProps) {
  return (
    <>
      <button className="new-game" onClick={props.handleNewGameClick}>New Game</button>
    </>
  )
}

export default New;
