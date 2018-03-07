import RandomColor from 'randomcolor'
import CONSTANTS from '../shared/constants'

const getRandomColour = (seed) => {
    if (seed === undefined) {
        seed = Math.floor(Math.random() * Math.floor(10))
    }
    return RandomColor({
        count: 10,
        hue: CONSTANTS.THEME.TILE_SET,
        format: 'rgb',
        seed: seed || 1
})};

const getAppropriateTextColour = (rgba) => {
    rgba = rgba.match(/\d+/g);
    if (((rgba[0] * 0.299) + (rgba[1] * 0.587) + (rgba[2] * 0.114)) > 186) {
        return 'black';
    } else {
        return 'white';
    }
}

export {getRandomColour, getAppropriateTextColour}