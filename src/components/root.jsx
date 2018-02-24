import React, {Component} from 'react'
import SupportPersonListContainer from './SupportPersonList/support_person_list_container'
import FilterInput from './FilterInput/filter_input_container'
import Moment from 'moment'
import PeopleReorderer from '../utils/people_reorderer'
import styled from 'styled-components'
import 'bulma/css/bulma.css'

const RootContainer = styled.div`
`

export default class RootComponent extends Component {
    constructor(props) {
        super(props)

        const dateFrom = Moment(process.env.REACT_APP_START_DATE, "DD-MM-YY")
        const supportPeople = process.env.REACT_APP_SUPPORT_PEOPLE.split(',')

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

    render() {
        return (
            <RootContainer className="container">
                <h1 className="title">Support Rooster</h1>
                <FilterInput filterChanged={this.filterChanged}/>
                <SupportPersonListContainer {...this.state}/>
            </RootContainer>
        )
    }

}
