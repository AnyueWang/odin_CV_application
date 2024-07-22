const InputInfo = ({ id, type, tag, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{tag}:</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </>
  )
}

export default InputInfo