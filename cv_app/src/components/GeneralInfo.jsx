const GeneralInfo = ({ info, setInfo }) => {
  return (
    <div>
      <form>
        <label htmlFor="first-name">First name:</label>
        <input type="text" id="first-name" value={info.firstName} onChange={(e) => setInfo({ ...info, firstName: e.target.value })} />
      </form>
    </div>
  )
}

export default GeneralInfo