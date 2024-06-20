import Scoreboard from './Scoreboard';

interface SidebarProps {
  scores: Array<number | null>
}

function Sidebar({scores}: SidebarProps) {
  return (
    <aside>
      <Scoreboard scores={scores} />
    </aside>
  )
}

export default Sidebar;
