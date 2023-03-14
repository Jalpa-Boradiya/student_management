
const BASE_URL = "http://127.0.0.1:8000/api/"      

export const Service = {
    post: (endpoint,type, params, success, error) => {
        const requestData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        };
        fetch(`${BASE_URL}${type}/${endpoint}`, requestData)
            .then(response => response.json())
            .then(data => { return success(data) })
            .catch((err) => {
                return error(err)
            });
    },

    get: (endpoint,type, params, success, error) => {
        const requestData = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`${BASE_URL}${type}/${endpoint}/${params}`, { requestData })
            .then(response => response.json())
            .then(data => { return success(data) })
            .catch((err) => {
                return error(err)
            });
    },
}
