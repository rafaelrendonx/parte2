import axios from 'axios'

const baseUrl = 'https://phonebook-backend-gezv3zj7f-rafaelrendonx.vercel.app/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (nameObject) => {
    return axios.post(baseUrl, nameObject)
}

const update = (nameObject) => {
    return axios.put(`${baseUrl}/${nameObject.id}`, nameObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export { getAll, create, update, deletePerson } 