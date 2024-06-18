import NewGame from './NewGame';

interface PopupProps {
  showPopup: boolean;
  children: React.ReactNode
}

function Popup(props: PopupProps) {
  const message = 'You did it! Play again?';
  if (!props.showPopup) return;
  return (
    <>
      <div className="popup">
        <span className="message">{message}</span>
        {props.children}
      </div>
    </>
  )
}

export default Popup;
