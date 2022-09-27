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

    const [animate, setAnimate] = useState(false);
    const contactRef = useRef();

    useEffect(() => {
        const currentRef = contactRef.current;
        console.log(contactRef);
        const handleAnimate = () => {
            const { y } = currentRef.getBoundingClientRect();
            const title = document.querySelector('.contactTitle');
            if (y <= 346) {
                setAnimate(true);
                title.classList.add('animate');
                title.classList.remove('notAnimate');
            } else {
                title.classList.add('notAnimate');
                title.classList.remove('animate');
            }
        }
        window.addEventListener('scroll', () => handleAnimate())

        return () => {
            window.removeEventListener('scroll', () => handleAnimate())
        }

    }, [animate]);

    return (
        <div ref={contactRef} id='contactForm' className='contactContainer'>
            <div className='contactTitleContain'>
                <h2 className='sectionTitle contactTitle'>CONTACT</h2>
            </div>
            <Form className='contactForm' noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3 inputsContain">
                    <span className='inputsSpan'></span>
                    <Form.Group as={Col} className='inputStyle' md="4" controlId="validationCustom01">
                        <Form.Label>FULL NAME</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Full name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" className='inputStyle' controlId="validationCustom02">
                        <Form.Label>E-MAIL</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="E-mail"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <InputGroup className='inputStyle'>
                        <InputGroup.Text>CONSULT</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <Button className='inputStyle' type="submit">
                        <p>SEND</p>
                        <span className='btnSpan'></span>
                    </Button>
                </Row>
            </Form>
            <span className={animate === false ? 'formSpan' : 'formSpan animate'}></span>
        </div>
    );
}

export default ContactForm;