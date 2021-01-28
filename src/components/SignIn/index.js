import react,  {Component} from 'react';
import './styles.scss';
import Buttons from '../form/Button';
import { signInWithGoogle, auth } from '../../firebase/utils';

import FormInput from '../form/FormInput';
import Button from '../form/Button';

const initialState = {
    email: '',
    password: ''
}

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = async e => {
        // console.log(e);
        e.preventDefault();
        const {email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                ...initialState
            })
        }catch(err){
            console.log(err)
        }

    }

    render(){
        const { email, password } = this.state
        return (
            <div className="signin">
                <div className="wrap">
                    <h2>
                        sign in
                    </h2>
    
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>
                            <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            handleChange = {this.handleChange}
                            />

                            <FormInput 
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            handleChange = {this.handleChange}
                            />

                            <Buttons type="submit">
                                Login
                            </Buttons>


                            <div className="socialSignin">
                                <div className="row">
                                    <Buttons onClick={signInWithGoogle}>
                                        Sign in with Google
                                    </Buttons>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SignIn;