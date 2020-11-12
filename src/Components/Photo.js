import React from 'react'
import PropTypes from 'prop-types' //zaladujemy dependencies prop-types doinstalowany npmem

function Photo(props){
        const post = props.post
        return <figure className="figure" >  
                    <img className="photo" src={post.imageLink} alt={post.description} />
                    <figcaption> <p> {post.description} </p> </figcaption>
                    <figcaption> <p> {post.price} </p> </figcaption>
                    <div className = "button-container">
                    <button className ="remove-button" onClick ={() => { 
                        props.onRemovePhoto(post)
                    }}> Usuń </button>
                    </div>
            </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo