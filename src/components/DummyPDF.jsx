import '../print.css'

const DummyPDF = ({ children, ref }) => {
  return (
    <div id="page" ref={ref}>
        { children }
    </div>
  )
}

export default DummyPDF