import { housesService } from "../Services/HousesService.js"
import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { setHTML } from "../Utils/Writer.js"
import { Pop } from "../Utils/Pop.js"
import { getFormData } from "../Utils/FormHandler.js"


function _drawHouses() {
    console.log('drawing houses')
    const houses = appState.houses
    let template = ''
    houses.forEach(house => template += house.HouseCard)
    setHTML('listings', template)
}


export class HousesController{
    constructor() {
        console.log('test from house controller')
        // this.getAllHouses()
        this.viewHouses()
        appState.on('houses', _drawHouses)
    }

    viewHouses() {
        this.getAllHouses()
        setHTML('form', House.HouseForm())
    }

    async getAllHouses() {
        try {
            await housesService.getAllHouses()
        } catch (error) {
            console.error(error)
            Pop.error(error)       
        }
    }

    async createHouse() {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            await housesService.createHouse(formData)
            bootstrap.Modal.getOrCreateInstance('#create-modal').hide()
            form.reset()
            Pop.toast('Created listing', 'success', 'top')
        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }



    async deleteHouse(id) {
        try {
            console.log('deleting', id)
            await housesService.deleteHouse(id)
            Pop.toast('Delete car', 'success', 'top')
        } catch(error) {
            console.error(error)
            Pop.error(error) 
        }
    }

    
}