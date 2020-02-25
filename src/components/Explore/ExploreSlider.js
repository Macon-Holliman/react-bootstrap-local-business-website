import React, { Component } from 'react';
import './ExploreSlider.scss';

import $ from 'jquery';

class ExploreSlider extends Component {


  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (

      <div class="catalog-section row col-12"  id="browser-catalog">
        <div class="catalog-item col-6 col-sm-6" onMouseOver={this.Hovered()} onClick={this.HoveredMobile()}>
          <div class="catalog-img img-one" >
          </div>
        </div>
        <div class="catalog-item col-6 col-sm-2"  onMouseOver={this.Hovered()} onClick={this.HoveredMobile()}>
          <div class="catalog-img img-two"></div>
        </div>
        <div class="catalog-item col-6 col-sm-2" onMouseOver={this.Hovered()} onClick={this.HoveredMobile()}>
          <div class="catalog-img img-three"></div>
        </div>
        <div class="catalog-item col-6 col-sm-2" onMouseOver={this.Hovered()} onClick={this.HoveredMobile()}>
          <div class="catalog-img img-four"></div>
        </div>

      </div>
    );
  }




  Hovered = ()  => (e) => {
    //Make sure no others are hovered/enlarged
    
    var onMobile = window.innerWidth;
    if(onMobile >= 650)
    {


    var hovered = document.getElementsByClassName("catalog-item");
    for(var x = 0; x < hovered.length; x++)
    {
      if($(hovered[x]).hasClass('col-sm-6'))
      {
        $(hovered[x]).removeClass('col-sm-6').addClass('col-sm-2');
      }
    }


    
    var onMobile = window.innerWidth;
    if(onMobile <= 650)
    {

      var imgToEnlarge = e.currentTarget.children[0].style.backgroundImage;
      var regex = /"(.*?)"/;
      var matchArray = regex.exec(imgToEnlarge);
      if (matchArray != null) {
        imgToEnlarge = matchArray[1];
      }  
      var element = document.getElementById("preview-image");
      element.src = imgToEnlarge;
      element.style.display = "block";
      
    }
    else
    {
    //enlarge current hover
    $(e.currentTarget).removeClass('col-2').addClass('col-sm-6');

    const el = e.currentTarget.children[0];
    el.addEventListener("mousemove", (e) => {
      var offsetXTuned = e.offsetX/5;
      var offsetYTuned = e.offsetY/5;
      if(offsetXTuned < 0){offsetXTuned = 0;}
      if(offsetYTuned < 0){offsetYTuned = 0;}
      if(offsetXTuned > 100){offsetXTuned = 100;}
      if(offsetYTuned > 100){offsetYTuned = 100;}
      el.style.setProperty('--x', -e.offsetX + "px");
      el.style.setProperty('--y', -e.offsetY + "px");
      el.style.setProperty('background-position', 'right ' + offsetXTuned  +"%" +  ' bottom ' + offsetYTuned + "%");

    });
    }

  }
}




  HoveredMobile =  ()  => (e) => {


    

      var imgToEnlarge = e.currentTarget.children[0].style.backgroundImage;
      var regex = /"(.*?)"/;
      var matchArray = regex.exec(imgToEnlarge);
      if (matchArray != null) {
        imgToEnlarge = matchArray[1];
      }  
      var element = document.getElementById("preview-image");
      element.src = imgToEnlarge;

      var element = document.getElementById("preview-image-container");
      element.style.display = "block";

      
    


  }





}

export default ExploreSlider;
