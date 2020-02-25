import React, { Component } from 'react';
import './ExploreSlider.scss';

import $ from 'jquery';

class ExploreSlider extends Component {

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
    //Make sure no others are hovered/enlarged

    //Hide footer to not obscure view or close button
    /*
    var element = document.getElementById("footer-logo");
    if(element.style.display != "none")
    {
      element.style.display = 'none';
      var element = document.getElementById("footer-swiper");
      element.style.display = 'none';
    }
*/

    var toClose = false;

    if(e.currentTarget.className.includes("catalog-item col-2-hovered"))
    {
      toClose = true;
    }



    var hovered = document.getElementsByClassName("catalog-item col-2-hovered");

    for(var x = 0; x < hovered.length; x++)
    {
      hovered[x].className = "catalog-item col-2";
    }

    if(toClose) //then close the current instead
    {
      e.currentTarget.className = "catalog-item col-2";
    }
    else
    {
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

      var element = document.getElementById("preview-image-container");
      element.style.display = "block";

      
    }


    }

  }





}

export default ExploreSlider;
