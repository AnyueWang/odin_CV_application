import html2pdf from 'html2pdf.js'

const Header = () => {
  const generatePDF = () => {
    const pdf = document.querySelector('.display-page')
    const opt = {
      filename: 'cv.pdf',
      image: {type: 'jpeg', quality: 1},
      jsPDF: {unit: 'px', format: [860, 1260]}
    }
    html2pdf().from(pdf).set(opt).save()
  }

  return (
    <div className='header'>
      <h1>CV Application</h1>
      <button className="download-btn" onClick={generatePDF}>Download CV</button>
    </div>
  )
}

export default Header