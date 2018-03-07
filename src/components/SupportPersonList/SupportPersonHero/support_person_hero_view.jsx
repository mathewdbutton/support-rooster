import React from 'react';
import styled from 'styled-components'
import {getRandomColour, getAppropriateTextColour} from '../../../utils/colour_helper'
import ImageWrapper from '../../../shared/components/image_wrapper'

const PersonWrapper = styled.div`
        color: ${props => props.textColour};
        background-color: ${props => props.backgroundColour};
        padding: 10px;
        margin:5px 0;
        transition: 1s all;
        ${props => props.loaded ? 'transform: scale(1, 1)': 'transform:scale(0,0)'}
        `

const CentreAlignWrapper = styled.div`
    text-align:center
`

const SupportPersonHeroView = (props) => {

    const { name, index, startDate, endDate, image, loaded } = props

    return (

        <PersonWrapper loaded={loaded} backgroundColour={getRandomColour()[index]} textColour={getAppropriateTextColour(getRandomColour()[index])}>
            <div className="columns">
                <div className="column">
                    <CentreAlignWrapper className="column">
                    <h4 className="title is-4">{name}</h4>
                    <h4 className="title is-4">{startDate} - {endDate}</h4>
                    </CentreAlignWrapper>
                </div>

            </div>
            <CentreAlignWrapper className="column">
                <ImageWrapper image={image}/>
            </CentreAlignWrapper>
        </PersonWrapper>
    );
}

SupportPersonHeroView.propTypes = {};

export default SupportPersonHeroView;
