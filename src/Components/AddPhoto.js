import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
    
    }

    render() {
        return (
    <div>
        <h1> Biblioteka ksiazek </h1>
        <div className="form">
        <form onSubmit={this.handleSubmit}>  
            <input type = "text" placeholder="Link do zdjecia" />
            <input type = "text" placeholder="Opis" />
            <input type = "text" placeholder="Cena" />
            <button> Dodaj </button>
        </form>
        </div>
    </div> 

    )
    }
}

export default AddPhoto 