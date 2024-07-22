const TextareaInfo = ({ id, tag, value, rows, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{tag}:</label>
      <textarea id={id} value={value} rows={rows} onChange={onChange} />
    </>
  )
}

export default TextareaInfo