import React from 'react';
import PropTypes from 'prop-types';
import nope from '../../images/how-about-no-quote-1.jpg'
import {getRandomColour, getAppropriateTextColour} from '../../utils/colour_helper'

import styled from 'styled-components'

const IncrementButton = styled.button`
margin:15px 5px;
color: ${props => props.textColour} !important;
background-color: ${props => props.backgroundColour} !important;
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
                    <IncrementButton backgroundColour={getRandomColour()[0]} textColour={getAppropriateTextColour(getRandomColour()[0])} value="1" className="button  is-mobile"
                                     onClick={props.incrementValue}>+</IncrementButton>
                    <IncrementButton backgroundColour={getRandomColour()[0]} textColour={getAppropriateTextColour(getRandomColour()[0])} value="-1" className="button  is-mobile"
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
