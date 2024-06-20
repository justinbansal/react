interface TurnsProps {
  count: number;
}

function Turns({ count }: TurnsProps) {
  return (
    <>
      <div className="turns-wrapper">
        <span>Turns: {count}</span>
      </div>
    </>
  )
}

export default Turns;
