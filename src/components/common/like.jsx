import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

const Like = (props) => {
  var classes = "fa fa-heart"
  if (!props.liked) classes+= "-o"
 
return ( <i onClick={props.onClick} style={{cursor: "pointer"}} className={classes} aria-hidden="true" ></i> );
}
 
export default Like;
   
  
 


//liked={movie.liked} onClick={() => this.handleLike(movie)}
