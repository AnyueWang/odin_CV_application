const ExpandBtn = (props) => {
  return (
    <div className="expand-container">
      <button onClick={props.handleClick}>{props.btnTag}</button>
      <div hidden={!props.isExpand}>
        {props.children}
        </div>
    </div>
  )
}

export default ExpandBtn