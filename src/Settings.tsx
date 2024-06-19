import Sound from './Sound';

interface SettingsProps {
  handleEnableSound: (event: React.ChangeEvent<HTMLInputElement>) => void;
  soundEnabled: boolean;
}

function Settings(props: SettingsProps) {
  return(
    <>
      <h3>Settings</h3>
      <Sound {...props}/>
    </>
  )
}

export default Settings;
