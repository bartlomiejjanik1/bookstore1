import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


class Main extends Component{
    constructor() {
        super()
        this.state = {
            posts: [{
                id: 0,
                description: "Harry Potter ",
                moredescription: "Powieść J.K. Rowling, opisując przygody młodocianego czarodzieja. Szkoła w dalekiej krainie, czary, przygody i przyjaciele.",
                price: "300",
                imageLink: "https://ecsmedia.pl/c/harry-potter-i-kamien-filozoficzny-tom-1-b-iext43794838.jpg"
                }, {
                id: 1,
                description: "Maly Ksiaze",
                moredescription: "Bajka, której morał jest równie ważny dla dzieci jak i dorosłych. Niesamowita opowieść, pokazująca jak dorośli tracą radość z życia na rzecz dóbr materialnych.",
                price: "110",
                imageLink: "https://ecsmedia.pl/c/maly-ksiaze-wydanie-ekskluzywne-b-iext63192578.jpg"
                },  {
                id: 2,
                description: "Halny, Remigiusz Mroz",
                moredescription: "Wciagajacy thriller osadzony w Tatrzańskich realiach. Gradka dla miłośników gór i powieści kryminalnych",
                price: "580",
                imageLink: "https://ecsmedia.pl/c/halny-b-iext64559434.jpg"
                }, {
                id: 4,
                description: "Dwa Dni w Paryzu",
                moredescription: "Romantyczna opowiesc osadzona w Paryżu. Akcja toczy się w ciągu dwóch dni, gdzie główna bohaterka odkrywa miłość... ",
                price: "900",
                imageLink: "https://ecsmedia.pl/c/dwa-dni-w-paryzu-b-iext62889338.jpg"
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

                <Route path = "/AddPhoto" render = {({history}) => (
                    <AddPhoto onAddPhoto= {(addedPost) => {
                        this.addPhoto(addedPost)
                        history.push('/')
                    }} />
                )}  />        
            </div>
        )
    } 
}

export default Main