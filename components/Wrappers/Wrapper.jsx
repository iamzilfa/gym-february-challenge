const Wrapper = ({style,children}) => {
  return (
    <div className={`-bg-[#f2efed] relative ${style}`}>
    <div className="w-[78.25rem] container mx-auto">
      {children}
    </div>
  </div>
  )
}

export default Wrapper