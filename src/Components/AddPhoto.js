import React, {Component} from 'react'


class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const price = event.target.elements.price.value
        const moredescription = event.target.elements.moredescription.value

        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink,
            price: price,
            moredescription: moredescription,
            
        }
        if (description && imageLink){
            this.props.onAddPhoto(post)
        }

    }

    render() {
        
        return (
    <div>
        <h1> Biblioteka ksiazek </h1>
        <div className="form">
        <form onSubmit={this.handleSubmit}>  
            <input type = "text" placeholder="Link do zdjecia" name="link"/>
            <input type = "text" placeholder="Tytul Ksiazki" name="description" />
            <input type="number" min="0" max="9999" placeholder="Cena" name="price" />
            <input type = "text" placeholder="Opis ksiazki" name="moredescription" />
            <button> Dodaj </button>
        </form>
        </div>
    </div> 

    )
    }
}

export default AddPhoto 