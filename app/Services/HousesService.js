import { appState } from "../AppState.js"
import { House } from "../Models/House.js"



const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    timeout: 10000
})


class HousesService{

    async createHouse(formData) {
        const res = await sandbox.post('houses', formData)
        console.log('[Creating house]', res.data)
        const newHouse = new House(res.data)
        appState.houses.push(newHouse)
        appState.emit('houses')
    }

    async getAllHouses() {
        const res = await sandbox.get('houses')
        console.log('[got all houses]', res.data)
        appState.houses = res.data.map(house => new House(house))
        console.log('from appState', appState.houses)
    }

    async deleteHouse(id) {
        const res = await sandbox.delete(`houses/${id}`)
        console.log('[Deleting house]', res.data)
        appState.houses = appState.houses.filter(house => house.id != id)
    }

}


export const housesService = new HousesService()