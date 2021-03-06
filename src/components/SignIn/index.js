import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { signInUser, signInWithGoogle } from './../../redux/User/user.action';

import './styles.scss';
import Buttons from '../form/Button';

import AuthWrapper from './../AuthWrapper';
import FormInput from '../form/FormInput';
// import Button from '../form/Button';

const mapState = ({user}) => ({
    signInSuccess: user.signInSuccess
});


const SignIn = props => {
    const {signInSuccess} = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(signInSuccess){
            resetForm();
            props.history.push('/');
        }
    },[signInSuccess])

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }
    
    const handleSubmit =  e => {
        e.preventDefault();
        dispatch(signInUser({email,password}));
    }

    const handleGoogleSignIn = e => {
        dispatch(signInWithGoogle());
    }

    const configAuthWrapper = {
        headline: 'Login'
    }
    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    handleChange = {e=>setEmail(e.target.value)}
                    />

                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    handleChange = {e=>setPassword(e.target.value)}
                    />

                    <Buttons type="submit">
                        Login
                    </Buttons>


                    <div className="socialSignin">
                        <div className="row">
                            <Buttons onClick={handleGoogleSignIn}>
                                Sign in with Google
                            </Buttons>
                        </div>
                    </div>

                    <div className="links">
                        <Link to="/recovery">
                            Reset Password
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    )
}
    

export default withRouter(SignIn);