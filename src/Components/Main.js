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
                imageLink: "https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-b-iext43794838.jpg"
                }, {
                id: "1",
                description: "Maly Ksiaze",
                imageLink: "https://ecsmedia.pl/c/maly-ksiaze-wydanie-ekskluzywne-b-iext63192578.jpg"
                },  {
                id: "2",
                description: "Szeroki obraz vacation",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }]
                
        }
        this.removePhoto = this.removePhoto.bind(this)
    }
    //metoda removeButtonzaktualizuje stan po nacisnie na Remove (w nowym stanie nie ebdzie juz usunietej ksiaki) 

    removePhoto(postRemoved){
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post!==postRemoved ) //usunie Usuniety post z tablicy i wyswietli zupdatowana tablice
        }))
    }
    //metoda addPhoto

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    
    //Jesli mam do renderowania wiecej niz 1 komponent-> wtedy uzywam metody render();Jelsi jest tylko 1 komponent, moge uzyc component prop do renderowania
    render() {
        return (
      
            <div> 
                 <Route exact path = "/" render={() => (
                    <div>
                        <Title title={'Biblioteka ksiazek'} />
                        <PhotoWall posts= {this.state.posts} onRemovePhoto={this.removePhoto} onNavigate ={this.navigate} />
                    </div>
                )} />

                <Route path = "/AddPhoto" render = {() => (
                    <AddPhoto onAddPhoto= {(addedPost) => {
                        console.log(addedPost)
                    }} />
                )}  />        
            </div>
        )
    } 
}

export default Main