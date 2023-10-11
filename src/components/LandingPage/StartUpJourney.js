import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import StartUpJourneyImage from "../../images/journey.svg"

const StartUpJourney = () => {
  return (
    <>
      <div className="startup-journey-area section">
        <Container>
          <Row>
            <Col className="startup-journey-content" md={6}>
              <h2 className="startup-journey-title">
                Traditional stages in a startup journey
              </h2>
              <p className="startup-journey-description">
                Picture yourself launching a start-up, without even registering
                it as a business or having any funding. It’s just a mere concept
                ot idea, right? Some say it’s money, but we think it’s all about
                the People!
              </p>
              <p className="startup-journey-description">
                Who would join you at this stage, you ask? Could it
                be your friends, family, or even your neighbors? Or maybe anyone
                who’s keen on your idea, especially if you’re willing ti share
                those juicy early stage shares?
              </p>
            </Col>
            <Col>
              <img
                className="start-up-journey-image"
                src={StartUpJourneyImage}
                alt="Hero Image"
              />
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

export default StartUpJourney
