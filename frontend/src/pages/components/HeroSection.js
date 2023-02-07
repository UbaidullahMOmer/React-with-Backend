import React from "react"
import {Row, Col} from "react-bootstrap"
const HeroScetion = () => {
    return (
        <>
        <Row className='align-item-center g-lg-5 pt-5 pb-5'>
            <Col>
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4"><span className="bg-tertiary-color text-primary-color">Full Stack</span><span className="text-tertiary-color">Web Developer</span></h1>
                <p className="lead text-quaternary-color">3+ years of experience in <br/><span className='lead-section-skills'>Websites</span>+<span className='lead-section-skills'>MobileApp</span>+<span className='lead-section-skills'>Scripts</span><br/> Designing &amp: Development</p>
            </div>
            </Col>
                <Col></Col>
        </Row>
        </>
    )
}

export default HeroScetion