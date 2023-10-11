import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import HowItWorksImage from "../../images/how-it-works.svg"

const HowItWorks = () => {
  return (
    <>
      <div className="how-it-works-area section">
        <Container>
          <div>
            <h1 className="how-it-works-title">How Fair share works</h1>
            <p className="how-it-works-description">
              Expand you yeam at three times the pace using the Fair Share
              Group. Use your start ups assets as collateral.
            </p>
            <div className="how-it-works_img-warpper">
              <img
                className="how-it-works-image"
                src={HowItWorksImage}
                alt="Hero Image"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default HowItWorks
