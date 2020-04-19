import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/user';


const Header = (props) => {
    const logOutHandler = () => {
        props.startLogout();
    }
    return (
        <header className="navbar navbar-light" style={{background: '#e3f2fd'}}>
            <div>
            <Link to='/' className="navbar-brand">Book Master</Link>
            {(props.user._id && props.user.type === 'admin') && <Link to='/add' className="navbar-brand">Add</Link>}
            {(props.user._id && props.user.type === 'user') && <Link to='/cart' className="navbar-brand"><span role='img'  aria-labelledby="cart" >🛒</span></Link>}
            </div>
            <div>
                {props.user._id ? <button onClick={logOutHandler} className="navbar-toggler">Log-out</button> : <Link to='/login' className="navbar-toggler">Login</Link>}
            </div>
        </header>
    );

}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(logOut())

})
export default connect(mapStateToProps, mapDispatchToProps)(Header);