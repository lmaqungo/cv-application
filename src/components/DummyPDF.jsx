import '../print.css'

const DummyPDF = ({ children, ref, show }) => {
  return (
    <div className={`cv-container ${!show && 'hide' } `} >
      <div id="page" ref={ref}>
          { children }
      </div>
    </div>
  )
}

export default DummyPDF