import React from 'react';
import styled from 'styled-components'
import RandomColor from 'randomcolor'

const randColour = RandomColor({
    count: 10,
    hue: 'green',
    format: 'rgb'
});

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

    const PersonWrapper = styled.div`
        color: ${getTextColor(randColour[index])};
        background-color:${randColour[index]}
        `

    return (
        <PersonWrapper>
            <span>{name}</span>
            <p>{startDate} - {endDate}</p>
            <hr/>
        </PersonWrapper>
    );
}

SupportPersonItemView.propTypes = {};

export default SupportPersonItemView;
