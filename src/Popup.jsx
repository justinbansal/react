import New from './New';

function Popup(props) {
  const message = 'You did it! Play again?';
  if (!props.showPopup) return;
  return (
    <>
      <div className="popup">
        <span className="message">{message}</span>
        <New handleNewGameClick={props.handleNewGameClick} />
      </div>
    </>
  )
}

export default Popup;
