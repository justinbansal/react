import Sound from './Sound';
import ContentSelector from './ContentSelector';

interface SettingsProps {
  handleEnableSound: (event: React.ChangeEvent<HTMLInputElement>) => void;
  soundEnabled: boolean;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Settings(props: SettingsProps) {
  return(
    <>
      <h3>Settings</h3>
      <Sound {...props}/>
      <ContentSelector handleSelectChange={props.handleSelectChange}/>
    </>
  )
}

export default Settings;
