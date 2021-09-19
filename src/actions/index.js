import axios from "axios";

export const getCoords = () => {
    return dispatch => {
        const geolocation = navigator.geolocation;
        geolocation.getCurrentPosition((position) => [
            axios.get(`
            https://api.openweathermap.org/data/2.5/onecall`, {
                params: {
                    appid: "0f37ce848fdf66d48b73f051d4ca6ad0",
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    units: 'metric'
                }
            }).then(response => {
                dispatch({ type: 'GET_COORDS', payload: response})
            })
        ])
    }
}
export const getSearch = ( city ) => {
    return dispatch => {
        axios.get(`
            https://pro.openweathermap.org/data/2.5/forecast/hourly`, {
                params: {
                    q: city,
                    appid: "50453c06daddb64bfb7c9056d0f6540c"
                }
            }).then(response => {
                dispatch({ type: 'GET_SEARCH', payload: response})
            })
    }
}