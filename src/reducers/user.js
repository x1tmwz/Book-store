import users from '../data/users';

const defaultUser = {};

const userReducer = (state = defaultUser, action) => {
    switch (action.type) {
        case "LOG_IN":
            const { _id = "", type = "" } = users.find((user) =>
             user.userName === action.userName && user.password === action.password) || {};
             
            return {
                _id,
                type,
            }
        case "LOG_OUT":
            return {};
        default:
            return state;
    }
}
export default userReducer;