interface ScoreboardProps {
  scores: Array<number | null>
}

function Scoreboard({scores}: ScoreboardProps) {
  if (!scores || scores.length === 0) return;
  const scoresList = scores.map((score: number | null, index: number | null) => <li key={index}>{score}</li>)
  return (
    <>
      <div className="scoreboard">
        <h2>Your Past Scores</h2>
        <ul>
          {scoresList}
        </ul>
      </div>
    </>
  )
}

export default Scoreboard;
