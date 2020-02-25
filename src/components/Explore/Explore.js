import React, { Component } from 'react';
import './Explore.scss';

import ExploreNav from './ExploreNav';
import ExploreSlider from './ExploreSlider';

class Explore extends Component {

  componentDidMount() {

    

  }

  constructor(props) {
    super(props);
    this.state = {
      ItemPictures: [
        ["https://i.imgur.com/sIg5b8n.jpg", "https://i.imgur.com/ApFNLgB.jpg","https://i.imgur.com/4clndwY.jpg", "https://i.imgur.com/krsClEb.jpg"], //Jewelry
        ["https://i.imgur.com/tIBljX6.jpg","https://i.imgur.com/o1Z9yoo.jpg","https://i.imgur.com/lKCUFxb.jpg","https://i.imgur.com/bfphqGK.jpg"], //Clothes
        ["https://i.imgur.com/64wS7pE.jpg","https://i.imgur.com/mhdcnen.jpg","https://i.imgur.com/iP1uE6B.jpg","https://i.imgur.com/o4aEbPy.jpg"], //Bags
        ["https://i.imgur.com/XAqZLMu.jpg","https://i.imgur.com/CvzGq8y.jpg","https://i.imgur.com/CCLiKcK.jpg","https://i.imgur.com/5q2P2Eo.jpg"], //Beauty
        ["https://i.imgur.com/n3OcvRc.jpg","https://i.imgur.com/c1s0CVE.jpg","https://i.imgur.com/D6zSqnp.jpg","https://i.imgur.com/LceKVEG.jpg"], //Food
        ["https://i.imgur.com/GtkCdeD.jpg","https://i.imgur.com/KxVLQ3m.jpg","https://i.imgur.com/18o7P0c.jpg","https://i.imgur.com/UIxjJDi.jpg"], //Home
        ["https://i.imgur.com/qWOOD7T.jpg","https://i.imgur.com/7qzgZJ4.jpg","https://i.imgur.com/qituZYO.jpg","https://i.imgur.com/q3yVwH4.jpg"], //Tumblers
        ["https://i.imgur.com/etEswgC.jpg","https://i.imgur.com/rdiId1J.jpg","https://i.imgur.com/jMCXreD.jpg","https://i.imgur.com/nbx3LrL.jpg"], //Kids
        ["","","",""],
      ],
    }
  }

  render() {

    return (

      <div class="explore container" id="Explore">

        <div class="row">

        <div class="col-12">
          
        <ExploreNav />

        <ExploreSlider />

        

        <div class="catalog-item-selected-container" id="preview-image-container">
          <div class="preview-press-to-close">X</div>
          <img class="catalog-item-selected" src="https://i.imgur.com/sIg5b8n.jpg" id="preview-image"  onClick={() => {this.closeEnlarged()}}></img>
        </div>



        </div>



        </div>
        
        

      </div>


    );
  }




  closeEnlarged = ()  => {
    var element = document.getElementById("preview-image");
    element.src = "";
    var element = document.getElementById("preview-image-container");
    element.style.display = "none";
  }
  





}

export default Explore;
