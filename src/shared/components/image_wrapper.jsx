import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ImageContainer = styled.img`
    height:90px;
    transition: 1s all;
    ${props => props.loading ? 'opacity:0' : 'opacity:1'}
`

class ImageWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
        this.loadingFinished = this.loadingFinished.bind(this)
    }

    loadingFinished(e){
        this.setState({
            loading:false
        })
    }

    render() {
        const {loading} = this.state
        return (
            <ImageContainer onLoad={this.loadingFinished} loading={loading} src={this.props.image}/>
        );
    }
}

ImageWrapper.propTypes = {
    image: PropTypes.string
};

export default ImageWrapper;
