import upIcon from '../assets/up.svg'

const ExpandBtn = (props) => {
  return (
    <div className="expand-container">
      <button onClick={props.handleClick} className={"expand-btn " + (props.isExpand ? 'expand-btn-focus' : '')}>
        {props.btnTag}
        <img src={upIcon} alt="expand icon" className={'signing-icon icon ' + (props.isExpand ? 'flip-signing-icon' : '')} />
      </button>
      <div className={"expand-block " + (props.isExpand ? '' : 'expand-block-hidden')} >
        {props.children}
      </div>
    </div>
  )
}

export default ExpandBtn