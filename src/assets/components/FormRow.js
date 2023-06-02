
const FormRow = ({type,name,value,handleChange,lableText}) => {
  return (
    <div className='form-row'>
        <lable htmlFor={name} className='form-lable'>
          {lableText || name}

        </lable>
        <input type={type} value={value} name={name} onChange={handleChange} className='form-input'/>
       </div>
  )
}

export default FormRow
