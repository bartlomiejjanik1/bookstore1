import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink,
            
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
            <input type = "text" placeholder="Opis" name="description" />
            
            <Button> Dodaj </Button>
        </form>
        </div>
    </div> 

    )
    }
}

export default AddPhoto 