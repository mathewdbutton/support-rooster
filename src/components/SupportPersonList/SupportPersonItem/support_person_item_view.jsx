import React from 'react';
import styled from 'styled-components'
import RandomColor from 'randomcolor'

const randColour = RandomColor({
    count: 10,
    hue: 'green',
    format: 'rgb'
});

const PersonWrapper = styled.div`
        color: ${props => props.textColour};
        background-color: ${props => props.backgroundColour};
        padding: 10px;
        margin:5px 0;
        `
const SupportPersonItemView = (props) => {

    const { name, index, startDate, endDate } = props


    const getTextColor = (rgba) => {
        rgba = rgba.match(/\d+/g);
        if (((rgba[0] * 0.299) + (rgba[1] * 0.587) + (rgba[2] * 0.114))> 186 ) {
            return 'black';
        } else {
            return 'white';
        }
    }

    return (
        <PersonWrapper backgroundColour={randColour[index]} textColour={getTextColor(randColour[index])}>
            <span>{name}</span>
            <p>{startDate} - {endDate}</p>
        </PersonWrapper>
    );
}

SupportPersonItemView.propTypes = {};

export default SupportPersonItemView;
