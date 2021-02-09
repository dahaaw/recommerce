import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import './styles.scss';

import {auth,handleUserProfile} from '../../firebase/utils'
 
import AuthWrapper from './../AuthWrapper';
import FormInput from '../form/FormInput';
import Button from '../form/Button';

const Signup = props => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfrimPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');    
        setConfrimPassword('');
        setErrors([]);
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        
        if(password !== confirmPassword){
            const err = [`password dont match`];
            setErrors(err);
            return
        }

        try{
            const {user} = auth.createUserWithEmailAndPassword(email, password)

            await handleUserProfile(user, {displayName});
            reset();
            props.history.push('/')

        }catch(err){
            console.log(err)
        }
    }

    const configAuthWraper = {
        headline: 'Registration'
    }
    return(
        <AuthWrapper {...configAuthWraper}>
            <div className="formWrap">
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err,index) => {
                            return(
                                <li key={index}>
                                    {err}
                                </li>
                            )
                        })}
                    </ul>
                )}
                <form onSubmit={handleFormSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full Name"
                        handleChange={e=>setDisplayName(e.target.value)}
                    />
                    
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e=>setEmail(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e=>setPassword(e.target.value)}
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        handleChange={e=>setConfrimPassword(e.target.value)}
                    />

                    <Button type="submit">
                        Register
                    </Button>
                </form>
            </div>
        </AuthWrapper>
    )
}


export default withRouter(Signup);