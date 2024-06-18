interface BoardProps {
  cardsList: React.ReactNode[]
}

function Board({ cardsList }: BoardProps) {
  return (
    <div className="board">
      {cardsList}
    </div>
  )
}
export default Board;
