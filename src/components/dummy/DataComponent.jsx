
const DataComponent = ({name, age = 10}) => {
  return (
    <div>
        <h1 className="text-2xl font-bold">
            Hello {name}
        </h1>

        <p>
            You are { age } years old
        </p>
    </div>
  )
}

export default DataComponent