interface SoundProps {
  handleEnableSound: (event: React.ChangeEvent<HTMLInputElement>) => void;
  soundEnabled: boolean;
}

function Sound(props: SoundProps) {
  return (
    <div className="sound-setting">
      <label htmlFor="sound">Enable sound</label>
      <input name="sound" type="checkbox" onChange={(e) => props.handleEnableSound(e)} checked={props.soundEnabled}/>
    </div>
  )
}

export default Sound;
