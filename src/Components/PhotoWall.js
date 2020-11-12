import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types' //zaladujemy dependencies prop-types doinstalowany npmem
import {Link} from 'react-router-dom'
//anchor tag zeby utworzy hiperlink do powrotu na glowna stone..
function PhotoWall(props) {
return  <div>
                <Link className = "addIcon" to="/AddPhoto" >  </Link>
               <div className="photoGrid" >  
                    {props.posts
                    .sort(function(x, y){
                        return y.id - x.id
                    })
                    .map((post,index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)} 
                </div>
        </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,   //cokolwiek przyjdzie musi byc tbalica inaczej wyrzuci error
    onRemovePhoto: PropTypes.func.isRequired  //tu musi byc funkcja
}

export default PhotoWall