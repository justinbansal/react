import NewGame from './NewGame';

interface PopupProps {
  showPopup: boolean;
  handleNewGameClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Popup(props: PopupProps) {
  const message = 'You did it! Play again?';
  if (!props.showPopup) return;
  return (
    <>
      <div className="popup">
        <span className="message">{message}</span>
        <NewGame handleNewGameClick={props.handleNewGameClick} />
      </div>
    </>
  )
}

export default Popup;
