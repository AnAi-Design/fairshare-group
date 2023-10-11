import * as React from "react"
import { Col } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import EndPageImage from "../../images/people.svg"

const EndPage = () => {
  return (
    <>
      <div className="end-page-area section">
        <Container>
          <Row>
            <div>
              <img class = "end-page-image" src={EndPageImage} alt="End page image" />
            </div>
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

export default EndPage
