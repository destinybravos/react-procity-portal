
const PrimaryButton = ({type = 'submit', extraClasses = '', children}) => {
  return (
    <button type={type} className={`bg-primary py-1 px-4 rounded-md text-slate-100 ${extraClasses}`}>
        { children }
    </button>
  )
}

export default PrimaryButton