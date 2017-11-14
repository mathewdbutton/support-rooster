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
        this.valueChanged = this.valueChanged.bind(this)
    }

    componentDidMount() {
        this.props.filterChanged(this.state.weeksInAdvance)
    }

    valueChanged(e) {
        const futureWeeks = e.target.value === "" ? undefined : e.target.value
        if(futureWeeks > 0) {
            this.setState({weeksInAdvance:futureWeeks})
            if (futureWeeks < 1000) {
                this.setState({tooMany:false})
                this.props.filterChanged(futureWeeks)
            } else {
                this.setState({tooMany:true})
            }
        }
    }

    render() {
        return (
            <FilterInputView weeksInAdvance={this.state.weeksInAdvance} showNope={this.state.tooMany} valueChanged={this.valueChanged}/>
        );
    }
}

FilterInputContainer.propTypes = {
    filterChanged: PropTypes.func
};

export default FilterInputContainer;
