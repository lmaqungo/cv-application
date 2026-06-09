import React from 'react'
import AccordionMenu from './AccordionMenu'
import { GithubLogo } from '../icons'

const Editor = ({ show }) => {

    function Footer(){
        return(
            <div className="footer-container">
                <p>Built by <a href="https://github.com/lmaqungo" target='_blank' >Lu</a></p>
                <GithubLogo />
            </div>
        )
    }

    function Header(){
        return (
            <div className="header-container">
                <h2>TheResume</h2>
                <p>Convince a stranger you're worth keeping alive.</p>
            </div>
        )
    }


  return (
    <div className={`main ${!show && 'hide' }`}>
        <Header />
        <AccordionMenu />
        <Footer />
    </div>
  )
}

export default Editor