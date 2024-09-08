const PageHeader = (props) =>{
  const {headerText, icon} = props
  return(
    <div className="flex items-center justify-between border-b-2 border-dashed border-gray-500 p-1">
      <h1 className="text-2xl font-bold dark:text-white">{headerText}</h1>
      {/* <span>{icon}</span> */}
    </div>
  )
}
export default PageHeader;