function Scoreboard({scores}) {
  if (!scores || scores.length === 0) return;
  const scoresList = scores.map((score: number, index: number) => <li key={index}>{score}</li>)
  return (
    <>
      <aside className="scoreboard">
        <h2>Your Past Scores</h2>
        <ul>
          {scoresList}
        </ul>
      </aside>
    </>
  )
}

export default Scoreboard;
