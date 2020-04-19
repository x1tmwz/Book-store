import React from 'react';
import { connect } from 'react-redux'
import { setText } from '../actions/filter'

const SearchBar = (props) => {
    const changeTextHandler =(e)=>{
        props.startSetText(e.target.value);
    }
    return (
        <div className="md-form mt-5">
            <input type="text" placeholder="Search.." className="form-control" onChange={changeTextHandler} />
        </div>
    );

}
const mapDispatchToProps = (dispatch) => ({
    startSetText: (searchText) => dispatch(setText(searchText))
})
export default connect(undefined,mapDispatchToProps)(SearchBar);