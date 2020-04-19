const defaultFilter = {
    text:''
};
const filterReducer = (state =defaultFilter, action) => {
    switch (action.type) {
        case "SET_TEXT":
           return {text:action.text}
        default:
            return state;
    }
}
export default filterReducer;