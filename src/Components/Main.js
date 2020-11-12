import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component{
    constructor() {
        super()
        this.state = {
            posts: [{
                id: "0",
                description: "Harry Potter",
                price: "$50",
                imageLink: "https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-b-iext43794838.jpg"
                }, {
                id: "1",
                description: "Maly Ksiaze",
                price: "$20",
                imageLink: "https://ecsmedia.pl/c/maly-ksiaze-wydanie-ekskluzywne-b-iext63192578.jpg"
                },  {
                id: "2",
                description: "Szeroki obraz vacation",
                price: "$30",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }],
                screen: 'photos' //dwie wartosci photos lub addPhotos..
        }
        this.removePhoto = this.removePhoto.bind(this)
        this.navigate = this.navigate.bind(this)
    }
    //metoda removeButtonzaktualizuje stan po nacisnie na Remove (w nowym stanie nie ebdzie juz usunietej ksiaki) 

    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post!==postRemoved ) //usunie Usuniety post z tablicy i wyswietli zupdatowana tablice
        }))
    }

    navigate() {
        this.setState({
            screen: 'addPhoto'
        })

    }

    render() {
      return <div> 
        
        {
            this.state.screen === 'photos' && (
            <div>

                <Title title={'Biblioteka ksiazek'} />
                <PhotoWall posts= {this.state.posts} onRemovePhoto={this.removePhoto} onNavigate ={this.navigate} />
            </div>
            )
        }
        {
            this.state.screen === 'addPhoto' && (
            <div>
                <AddPhoto />
            </div>
            )
        }
       </div>
    } // przekazanie metody removePhoto do komponentu PhotoWall jako prop
}

export default Main