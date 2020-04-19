import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';



const LoginPage = (props) => {
    const [error, setError] = useState('');
    const sumbit = (e) => {
        e.preventDefault();
        const userName = e.target.elements['user'].value;
        const password = e.target.elements['password'].value;
        props.startLogIn(userName, password);
        setError('Please enter valid user name and password');
    }
    useEffect(() => {
        if (props.user._id) {
            props.history.push('/');
        }
    }, [props.user._id, props.history])
    return (
        <div className='container login-container'>

            <form onSubmit={sumbit} >
                <div className="row justify-content-center">
                    <div className="col-md-6 login-form-1">
                        <div className="form-group mt-5">
                            <input type='text' placeholder="User name.." className="form-control" name='user' maxLength={30} required />
                        </div>
                        <div className="form-group">
                            <input type='password' placeholder='Password..' className="form-control" name='password' maxLength={30} required />
                        </div>
                        {error && <p className="p-3 mb-2 bg-danger text-white">{error}</p>}
                        <button className="btn btn-primary">Log-in</button>
                    </div>
                </div>
            </form>
        </div>

    );
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    startLogIn: (userName, password) => dispatch(login(userName, password))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


