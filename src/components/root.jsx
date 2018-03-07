import React, {Component} from 'react'
import SupportPersonListContainer from './SupportPersonList/support_person_list_container'
import FilterInput from './FilterInput/filter_input_container'
import Moment from 'moment'
import PeopleReorderer from '../utils/people_reorderer'
import styled from 'styled-components'
import 'bulma/css/bulma.css'

import {getRandomColour, getAppropriateTextColour} from '../utils/colour_helper'

import Constants from '../shared/constants'

const RootContainer = styled.div`
`

const ColouredTitle = styled.div`
color: ${props => props.textColour};
display: inline
`


export default class RootComponent extends Component {
    constructor(props) {
        super(props)

        const dateFrom = Moment(Constants.INIT.START_DATE, "DD-MM-YY")
        const supportPeople = Constants.INIT.SUPPORT_LIST.split(',')

        //Bring the current person to the front of the array
        let reorderedSupportList = PeopleReorderer.getSupportList(dateFrom,Moment(),supportPeople)

        this.state = {
            people: reorderedSupportList,
            futureWeeks: undefined
        }

        this.filterChanged = this.filterChanged.bind(this)
    }

    filterChanged(numWeeks) {
        this.setState({futureWeeks: numWeeks})
    }

    titleColoured() {
        let title = `${Constants.INIT.TITLE}`
        return title.split(" ")[0]
    }

    getTitleColour() {
        let textColour = 'white'
        let colour = null
        while(textColour === 'white') {
            colour = getRandomColour()[0]
            console.log(colour);
            textColour = getAppropriateTextColour(colour)
        }
        return colour
    }

    titleBlack() {
        let title = `${Constants.INIT.TITLE}`
        return title.split(" ").slice(1).join(" ")
    }



    render() {
        return (
            <RootContainer className="container">
                <h1 className="title"><ColouredTitle textColour={this.getTitleColour()}>{this.titleColoured()}</ColouredTitle> {this.titleBlack()} </h1>
                <FilterInput filterChanged={this.filterChanged}/>
                <SupportPersonListContainer {...this.state}/>
            </RootContainer>
        )
    }
}
