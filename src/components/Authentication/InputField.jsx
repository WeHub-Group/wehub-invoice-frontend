/* eslint-disable react/prop-types */
const InputField = ({ value, placeholder, error, onChange, type, label, ...props }) => {
  return (
    <div className="mt-3 flex flex-col gap-2">
      <label className="font-bold">{label} {props.required ?
        <span className="text-red-500">*</span> : null}</label>
      <input type={type} className="bg-transparent text-sm border border-white rounded-lg p-3"
        value={value}
        onChange={onChange}
        placeholder={placeholder} {...props} />
      <div className="text-red-500">{error}</div>
    </div>
  )
}
export default InputField