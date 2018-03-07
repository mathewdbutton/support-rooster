const CONSTANTS = {
    IMAGE_SERVICE: {
        API: 'https://pixabay.com/api/',
        KEY: "7075545-250e6d57f1be4965dd71e67e5",
        SEARCH_TERM: process.env.REACT_APP_SEARCH_TERM || "rooster"
    },
    THEME: {
        TILE_SET: process.env.REACT_APP_THEME_TILE_SET || "green"
    },
    INIT: {
        START_DATE: process.env.REACT_APP_START_DATE,
        SUPPORT_LIST: process.env.REACT_APP_SUPPORT_PEOPLE,
        TITLE: process.env.REACT_APP_TITLE || "Support Rooster"
    }
}

export default CONSTANTS;