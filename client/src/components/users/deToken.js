import axios from 'axios';

const deToken = token => {
    if(token) {
        // Apply to every req
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
}

export default deToken;