import * as React from "react"
import Container from "react-bootstrap/Container"

const Footer = () => {
  return (
    <>
      <div className="copyright-area">
        <Container>
          <p className="copyright-description">
            © <span>FairShareGroup Pty. Ltd. 2023.</span> All right reserved.{" "}
          </p>
        </Container>
      </div>
    </>
  )
}

export default Footer
