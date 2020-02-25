import React from 'react';
import './TextSwipeLeft.scss';

function TextSwipeLeft() {
  return (
    <div class="swiper swiper-wrapper left-swipe swiper-top">
      <span class="word-swiper">
        <text class="swipe swipe-r swipe-text-two"><span class="prevent-italicize-overlap">Unique</span></text>
      </span>
      <span class="word-swiper">
        <text class="swipe swipe-r swipe-text-four"><span class="prevent-italicize-overlap">Expressive</span></text>
      </span>
      <span class="word-swiper">
        <text class="swipe swipe-r swipe-text-six"><span class="prevent-italicize-overlap">Affordable</span></text>
      </span>
      <span class="word-swiper">
        <text class="swipe swipe-r swipe-text-eight"><span class="prevent-italicize-overlap">Shop at</span></text>
      </span>
    </div>
  );
}

export default TextSwipeLeft;
