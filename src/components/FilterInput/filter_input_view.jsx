import React from 'react';
import PropTypes from 'prop-types';

const FilterInputView = (props) => {
    return (
        <input type="number" onChange={props.valueChanged}/>
    );
}

FilterInputView.propTypes = {
    valueChanged: PropTypes.func
};

export default FilterInputView;
