import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import typeAnimate from '../../Utils/typeAnimate';

const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const el = useRef(null);
    const typed = useRef(null);
    const strings = [
        'Contact Tobias',
        'Contact Me'
    ]

    useEffect(() => {
        typeAnimate(strings, el, typed);
    }, []);

    const [animate, setAnimate] = useState(false);
    const contactRef = useRef();

    useEffect(() => {
        const currentRef = contactRef.current;
        console.log(contactRef);
        const handleAnimate = () => {
            const { y } = currentRef.getBoundingClientRect();
            if (y <= 346) {
                setAnimate(true);
            }
        }
        window.addEventListener('scroll', () => handleAnimate())

        return () => {
            window.removeEventListener('scroll', () => handleAnimate())
        }

    }, [animate]);

    return (
        <div ref={contactRef} id='contactForm' className='contactContainer'>
            <Form className='contactForm' noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 inputsContain">
                    <Form.Group as={Col} className='inputStyle' md="4" controlId="validationCustom01">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Full name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='inputStyle' controlId="validationCustom02">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="E-mail"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <InputGroup className='inputStyle'>
                        <InputGroup.Text>Consult</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <Button className='inputStyle' type="submit">
                        <p>SEND</p>
                        <span className='btnSpan'></span>
                    </Button>
                </Row>
                <div className='contactTitleContain'>
                    <div className="type-wrap contactTitle">
                        <span className='typed' style={{ whiteSpace: 'pre' }} ref={el} />
                    </div>
                    <div className='contactBird'></div>
                </div>
            </Form>
            <span className={animate === false ?'formSpan' : 'formSpan animate'}></span>
        </div>
    );
}

export default ContactForm;