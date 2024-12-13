import React from 'react'

const QuickInfo = () => {
  return (
    <div id = "quickLinks">
      <div>
      <div className='firstRow'>
        <div>Research</div>      
        <div>Links</div>
        <div>Contact</div>
      </div>
      <div className='secondRow'>
        <div>Mehran University Research Journals</div>      
        <div>Microsoft Dream Spark Account</div>
        <div>Google Map & Directions | Telephone Directory</div>
      </div>
      <div className='thirdRow'>
        <div>Research Groups</div>      
        <div>Smart ID Card: Employees | Students</div>
        <div>Email: registrar@admin.muet.edu.pk <br/>
        Phone: +92 (22) 2772250-73</div>
      </div>
      <div className='fourthRow'>
        <div>International Conferences</div>      
        <div>Anti-Plagiarism Service</div>
        <div>Address: Mehran University of Engineering & Technology,<br/>
        Jamshoro, 76062, Sindh, Pakistan</div>
      </div>
    </div>
    <div>
      <div className = "heading">
        <img src="/favicon.ico" alt="facebook pages" />
        <div>Facebook Pages</div>
        </div>
      <div className='fifthRow'>
        <div>International Conferences</div>      
        <div>Anti-Plagiarism Service</div>
        <div>Address: Mehran University of Engineering & Technology,<br/>
        Jamshoro, 76062, Sindh, Pakistan</div>
      </div>
    </div>
    <div className="note">*MUET is not responsible for any misinformation on these facebook pages.</div>
    </div>
  )
}

export default QuickInfo
