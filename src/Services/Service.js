import axios from 'axios';


export function getAllStats(callBackFn) {
    axios.get('https://disease.sh/v3/covid-19/all')
        .then(callBackFn)
}

