import React, { useState } from 'react';
import classNames from 'classnames';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './Form.css';

const FormComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="Form">
            <Form className={classNames('form-login', 'form-container', { formLoginHidden: isOpen })} action="true">
                <div className="form-title title-login">Login</div>
                <FormGroup>
                    <Input type="text" id="email1" required />
                    <Label for="email1">Email</Label>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="password1" required />
                    <Label for="password1">Password</Label>
                </FormGroup>
                <div className="submit submit-login">
                    <Button type="submit">Login</Button>
                </div>
                <div className="content">
                    Don't have an account?&nbsp;
                    <span type="button" onClick={() => toggle()} >
                        Sign up
                    </span>
                </div>
            </Form>
            <Form className={classNames('form-register', 'form-container', { formLoginShow: isOpen })} action="true">
                <div className="form-title title-register">Register</div>
                <FormGroup>
                    <Input type="text" id="email2" required />
                    <Label for="email1">Email</Label>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="password2" required />
                    <Label for="password2">Password</Label>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="password3" required />
                    <Label for="password3">Comfirm Password</Label>
                </FormGroup>
                <div className="submit submit-register">
                    <button type="submit">Register</button>
                </div>
                <div className="content">
                    Already have an account?&nbsp;
                    <span type="button" onClick={toggle}>
                        Sign in
                    </span>
                </div>
            </Form>
        </div >
    );
};

export default FormComponent;