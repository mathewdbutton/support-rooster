import React from 'react';
import PropTypes from 'prop-types';
import nope from '../../images/how-about-no-quote-1.jpg'

import styled from 'styled-components'

const IncrementButton = styled.button`
margin:15px 5px;
`

const FilterInputView = (props) => {
    const showNope = (show) => {
        return show ? <img src={nope} alt="Dr Evil: How About No!"/> : null
    }

    return (
        <div className="filterInput">
            <div className="columns is-mobile">
                <div className="column is-one-fifth-desktop is-one-fifth-tablet is-mobile">
                    <label htmlFor="weeksInAdvance">Weeks in Advance: </label>
                    <input type="number" value={props.weeksInAdvance} id="weeksInAdvance"
                           onChange={props.valueChanged}/>
                </div>
                <div className="column is-mobile">
                    <IncrementButton value="1" className="button is-primary is-mobile"
                                     onClick={props.incrementValue}>+</IncrementButton>
                    <IncrementButton value="-1" className="button is-primary is-mobile"
                                     onClick={props.incrementValue}>-</IncrementButton>
                </div>
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
