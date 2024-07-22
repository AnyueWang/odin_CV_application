const TextareaInfo = ({ id, tag, value, rows, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{tag}:</label>
      <textarea id={id} value={value} rows={rows} onChange={onChange} />
    </div>
  )
}

export default TextareaInfo