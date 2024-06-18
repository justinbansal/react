import Scoreboard from './Scoreboard';

function Sidebar({scores}) {
  return (
    <aside>
      <Scoreboard scores={scores} />
    </aside>
  )
}

export default Sidebar;
