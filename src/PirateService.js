const baseURL = 'http://localhost:9000/api/pirates/'


export const postPirate = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deletePirate = (id) =>{
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
