const ExpandBtn = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.btnTag}</button>
      <div hidden={!props.isExpand}>
        {props.children}
        </div>
    </div>
  )
}

export default ExpandBtn