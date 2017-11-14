import React from 'react';
import PropTypes from 'prop-types';
import nope from '../../images/how-about-no-quote-1.jpg'

const FilterInputView = (props) => {
    const showNope = (show) => {
        return show ? <img src={nope}/> : null
    }

    return (
        <div className="filterInput">
            <div>
                <label htmlFor="weeksInAdvance">Weeks in Advance: </label>
                <input type="number" value={props.weeksInAdvance} id="weeksInAdvance" onChange={props.valueChanged}/>
            </div>
            <div>
                {showNope(props.showNope)}
            </div>
        </div>
    );
}

FilterInputView.propTypes = {
    valueChanged: PropTypes.func
};

export default FilterInputView;
