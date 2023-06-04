import { useAppContext } from "../context/appContext"

const Alert = () => {
  const {alertType,alertText}=useAppContext()
  return (
    <div className={`alert alert-${alertType}`}>{alertText}</div>
  )
}

//suhas

export default Alert
