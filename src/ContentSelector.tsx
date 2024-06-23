interface ContentSelectorProps {
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function ContentSelector(props: ContentSelectorProps) {
  return (
    <div className="select-wrapper">
      <label htmlFor="content">Choose content type:</label>
      <select name="content" id="content" onChange={e => props.handleSelectChange(e)}>
        <option value="default">Default</option>
        <option value="animals">Animals</option>
        <option value="cars">Luxury Car Logos</option>
      </select>
    </div>
  )
}

export default ContentSelector;
