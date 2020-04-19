const login = (userName='',password='')=>({
    type:"LOG_IN",
    userName,
    password
})
const logOut = ()=>({
    type:'LOG_OUT'
})
export {login, logOut};
