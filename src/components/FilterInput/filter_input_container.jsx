import React, {Component} from 'react';
import FilterInputView from './filter_input_view'
import PropTypes from 'prop-types';

class FilterInputContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tooMany : false,
            weeksInAdvance: 5
        }
        this.inputChanged = this.inputChanged.bind(this)
        this.incrementValue = this.incrementValue.bind(this)
        this.valueChanged = this.valueChanged.bind(this)
    }

    incrementValue(e) {
        const changedValue = e.target.value === "" ? undefined : e.target.value
        const {weeksInAdvance} = this.state
        this.valueChanged(parseInt(weeksInAdvance) + parseInt(changedValue))
    }

    valueChanged(value) {
        if(value > 0) {
            this.setState({weeksInAdvance:value})
            if (value < 1000) {
                this.setState({tooMany:false})
                this.props.filterChanged(value)
            } else {
                this.setState({tooMany:true})
            }
        }
    }

    componentDidMount() {
        this.props.filterChanged(this.state.weeksInAdvance)
    }

    inputChanged(e) {
        const futureWeeks = e.target.value === "" ? undefined : e.target.value
        this.valueChanged(futureWeeks)

    }

    render() {
        return (
            <FilterInputView incrementValue={this.incrementValue} weeksInAdvance={this.state.weeksInAdvance} showNope={this.state.tooMany} valueChanged={this.inputChanged}/>
        );
    }
}

FilterInputContainer.propTypes = {
    filterChanged: PropTypes.func
};

export default FilterInputContainer;
