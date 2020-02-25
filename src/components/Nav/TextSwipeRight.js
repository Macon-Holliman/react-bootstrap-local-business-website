import React from 'react';
import './TextSwipeRight.scss';

function TextSwipeRight() {
  return (
    <div class="swiper swiper-wrapper right-swipe swiper-top">
      <span class="word-swiper">
        <text class="swipe swipe-l swipe-text-one">Beautiful</text>
      </span>
      <span class="word-swiper">
        <text class="swipe swipe-l swipe-text-three">Custom</text>
      </span>
      <span class="word-swiper">
        <text class="swipe swipe-l swipe-text-five">Trendy</text>
      </span>
      <span class="word-swiper">
        <text class="swipe swipe-l swipe-text-seven">Creations</text>
      </span>
    </div>
  );
}

export default TextSwipeRight;
