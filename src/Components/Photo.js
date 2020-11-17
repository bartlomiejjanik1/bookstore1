import React from 'react'
import PropTypes from 'prop-types' //zaladujemy dependencies prop-types doinstalowany npmem
import Button from 'react-bootstrap/Button'


function Photo(props){
        const post = props.post
        return <figure className="figure" >  
                    <img className="photo" src={post.imageLink} alt={post.description} />
                    <figcaption> <h2> {post.description} </h2> </figcaption>
                    <div className="caption">
                        <hr></hr>
                      <h5> {post.moredescription} </h5>
					   <h3> <span className="pull-right"> ${post.price} </span></h3>
					</div>
                    <figcaption>  </figcaption>
                    <div className = "button-container">
                        <Button className ="remove-button"  onClick ={() => { 
                            props.onRemovePhoto(post)
                            }}> Usuń </Button>
                    </div>
            </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo