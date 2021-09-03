import axios from "axios";

export const getCoords = () => {
    return dispatch => {
        const geolocation = navigator.geolocation;
        geolocation.getCurrentPosition((position) => [
            axios.get(`
            https://api.openweathermap.org/data/2.5/weather`, {
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