import React, {Component} from 'react'

class AddPhoto extends Component {
    render() {
        return (
    <div>
        <h1> Biblioteka ksiazek </h1>
        <div className="form">
        <form>  
            <input type = "text" placeholder="Link do zdjecia" />
            <input type = "text" placeholder="Opis" />
            <input type = "text" placeholder="Cena" />
        </form>
        </div>
    </div> 

    )
    }
}

export default AddPhoto 