import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

import './Form.css';
import { UserContext } from '../../contexts/User';

const FormComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isTextEmail, isTextPassword, isTextConfirmPassword, signUp, getEmail, getPassword, getConfirmPassword } = useContext(UserContext);
    const toggle = () => setIsOpen(!isOpen);

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="Form">
            <Form className={classNames('form-login', 'form-container', { formLoginHidden: isOpen })} action="true">
                <div className="form-title title-login">Login</div>
                <FormGroup>
                    <Input type="text" id="email1" />
                    <Label for="email1">Email</Label>
                    <div className="space"></div>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="password1" />
                    <Label for="password1">Password</Label>
                    <div className="space"></div>
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
            <Form className={classNames('form-register', 'form-container', { formLoginShow: isOpen })} onSubmit={(e) => onSubmit(e)}>
                <div className="form-title title-register">Register</div>
                <FormGroup>
                    <Input type="text" id="email2" onChange={(e) => getEmail(e)} />
                    <Label for="email1">Email</Label>
                    {
                        isTextEmail.length ? <div className="label">{isTextEmail}</div> : <div className="space"></div>
                    }
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="password2" onChange={(e) => getPassword(e)} />
                    <Label for="password2">Password</Label>
                    {
                        isTextPassword.length ? <div className="label">{isTextPassword}</div> : <div className="space"></div>
                    }
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="password3" onChange={(e) => getConfirmPassword(e)} />
                    <Label for="password3">Comfirm Password</Label>
                    {
                        isTextConfirmPassword.length ? <div className="label">{isTextConfirmPassword}</div> : <div className="space"></div>
                    }
                </FormGroup>
                <div className="submit submit-register">
                    <button onClick={(e) => signUp(e)}>Register</button>
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