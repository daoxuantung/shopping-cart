import React, { createContext, useState } from 'react';
import API from '../axios/api';

export const UserContext = createContext();

export const UserProvider = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isTextEmail, setIsTextEmail] = useState('');
    const [isTextPassword, setIsTextPassword] = useState('');
    const [isTextConfirmPassword, setIsTextConfirmPassword] = useState('');
    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPassword(e.target.value);

    }
    const getConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const signUp = async (e) => {
        validate();
        if (isTextEmail.length < 1 && password.length > 0 && password === confirmPassword) {
            const data = (await API.post('/signup', {
                email,
                password
            })).data;
            console.log(data)
        }
    }

    const validate = () => {
        if (email.length < 1) {
            setIsTextEmail('! Enter your email');
        } else if (email.indexOf('@gmail.com') < 0) {
            setIsTextEmail('! Enter a valid email address');
        } else {
            setIsTextEmail('');
        }

        if (password.length < 1) {
            setIsTextPassword('! Enter your password');
        } else {
            setIsTextPassword('');
        }

        if (password.length > 0) {
            if (confirmPassword.length < 1) {
                setIsTextConfirmPassword('! Type your password again');
            } else if (confirmPassword !== password) {
                setIsTextConfirmPassword('! Passwords must match');
            } else {
                setIsTextConfirmPassword('');
            }
        }
    }

    return (
        <UserContext.Provider value={{ signUp, getEmail, getPassword, getConfirmPassword, isTextEmail, isTextPassword, isTextConfirmPassword }}>
            {props.children}
        </UserContext.Provider >
    );
}