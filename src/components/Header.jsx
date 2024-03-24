import PropTypes from 'prop-types'

function Header({text}) {
    const headerstyles ={
        backgroundColor: 'rgba(0,0,0,0.4)', 
        color: '#ff6a95'
    }

  return (
    <>

    <header style={headerstyles}>
      
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
    </>
  )
}
Header.defaultProps ={
    text: 'Todo List App '
}
Header.propTypes ={
    text: PropTypes.string,
    
}
export default Header


