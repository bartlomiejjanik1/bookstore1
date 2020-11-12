import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types' //zaladujemy dependencies prop-types doinstalowany npmem
//anchor tag zeby utworzy hiperlink do powrotu na glowna stone..
function PhotoWall(props) {
return  <div>
                    <a className = "addIcon" onClick={props.onNavigate} href="#AddPhoto" >  </a>
                {/* <button onClick={props.onNavigate} className="addIcon">  </button> */}
                <div className="photoGrid" >  
                    {props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)} 
                </div>
        </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,   //cokolwiek przyjdzie musi byc tbalica inaczej wyrzuci error
    onRemovePhoto: PropTypes.func.isRequired  //tu musi byc funkcja
}

export default PhotoWall