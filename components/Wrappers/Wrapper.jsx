const Wrapper = ({style,children}) => {
  return (
    <div className={`relative ${style}`}>
    <div className="lg:max-w-[78.25rem] max-w-full container mx-auto">
      {children}
    </div>
  </div>
  )
}

export default Wrapper