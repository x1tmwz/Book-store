import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

const PrivateRouteUser = ({ user,component: Component, ...rest }) => (
<Route {...rest}
render={(props)=>{
    if(user._id && user.type ==='user'){
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
export default connect(mapStateToProps)(PrivateRouteUser);