import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-section">
            <div className="footer-row">
              <h4>TuniGgregatorAI Copyright {new Date().getFullYear()}</h4>
            </div>

            <div className="footer-row">
              <div className="social-link">
                <a href="https://twitter.com/tuniggregatorai" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://t.me/TuniGgregatorAi" target="_blank"><i className="fa-regular fa-comment"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
