function Sound(props) {
  return (
    <div className="sound-setting">
      <label htmlFor="sound">Enable sound</label>
      <input name="sound" type="checkbox" onChange={(e) => props.handleEnableSound(e)} checked={props.soundEnabled}/>
    </div>
  )
}

export default Sound;
