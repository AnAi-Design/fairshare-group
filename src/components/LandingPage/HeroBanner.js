import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import HeroImage from "../../images/hero.svg"

const HeroBanner = () => {
  return (
    <>
      <div className="hero-area section">
        <Container>
          <Row>
            <Col className = "hero-content" md = {6}>
              <h1 className="hero-title">Accelerate <br></br>your start-up's <br></br> growth</h1>
              <p className="hero-description">
                We’re all about sharing the love start-ups. From inception to
                pre-seed funding, we make it easy-peasy to dish out shares.
              </p>
            </Col>
            <Col className="hero-image-wrapper">
              <img className = "hero-image" src={HeroImage} alt="Hero Image" />
            </Col>
          </Row>
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

export default HeroBanner
