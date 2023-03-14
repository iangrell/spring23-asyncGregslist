



export class House{
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
    }

    get HouseCard() {
        return `
        <div class="col-6 col-md-4">
          <div class="bg-light rounded elevation-5">
            <img class="img-fluid" src="${this.imgUrl}" alt="">
            <h5 class="p-2 text-center text-dark">Bedrooms: ${this.bedrooms} | Bathrooms: ${this.bathrooms} | ${this.year}</h5>
            <h5 class="p-2 text-dark">Price: $${this.price}</h5>
            <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')"> <i class="mdi mdi-delete-forever"></i></button>
            <button class="btn btn-warning" onclick="app.housesController.openEditHousesForm('${this.id}')" data-bs-toggle="modal"
            data-bs-target="#edit-modal"><i class="mdi mdi-pen"></i></button>
          </div>
        </div>
        `
      }

      static HouseForm() {
        return ` 
      <form onsubmit="app.housesController.createHouse()" class="row p-4">
        <h3>List a House</h3>
        <div class="mb-2 col-4">
          <label for="bedrooms">Bedrooms</label>
          <input type="number" name="bedrooms" id="bedrooms" class="form-control">
        </div>
        <div class="mb-2 col-4">
          <label for="bathrooms">Bathrooms</label>
          <input type="number" name="bathrooms" id="bathrooms" class="form-control" required>
        </div>
        <div class="mb-2 col-4">
          <label for="year">Year</label>
          <input type="number" name="year" id="year" class="form-control" required min="2020" max="3000"
            value="2023">
        </div>
        <div class="mb-2 col-4">
          <label for="levels">Levels</label>
          <input type="number" name="levels" id="levels" class="form-control" required>
        </div>
        <div class="mb-2 col-12">
          <label for="imgUrl">Image URL</label>
          <input type="url" name="imgUrl" id="imgUrl" class="form-control" required
            placeholder="please enter a url for an image...">
        </div>
        <div class="mb-2 col-12">
          <label for="description">Description</label>
          <input type="text" name="description" id="description" class="form-control" maxlength="50">
        </div>
        <div class="mb-2 col-6">
          <label for="price">Price</label>
          <input type="number" name="price" id="price" class="form-control" required min="1">
        </div>
        <div class="text-end mt-2">
          <button class="btn" type="button">cancel</button>
          <button class="btn btn-primary" type="submit">submit</button>
        </div>
      </form>`
      }
}