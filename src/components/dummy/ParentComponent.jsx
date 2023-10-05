/* eslint-disable react/prop-types */
const ParentComponent = ({no_cols = 3, children}) => {

    return (
        <div className={`max-w-6xl mx-auto py-10`}>
            <div className={`grid grid-cols-1 md:grid-cols-${no_cols} gap-4`}>
                {children}
            </div>
        </div>
    )
}

export default ParentComponent