import React, { Component } from 'react';
import './Explore.scss';

import ExploreNav from './ExploreNav';
import ExploreSlider from './ExploreSlider';

class Explore extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
