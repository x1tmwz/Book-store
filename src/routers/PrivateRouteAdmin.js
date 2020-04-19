import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

const PrivateRouteAdmin = ({ user,component: Component, ...rest }) => (
<Route {...rest}
render={(props)=>{
    if(user._id && user.type ==='admin'){
        return <Component {...props} />
    }
    else{
        return <Redirect to='/'/>
    }
}
}
/>);
const mapStateToProps = (state)=>({
    user:state.user
})
export default connect(mapStateToProps)(PrivateRouteAdmin);