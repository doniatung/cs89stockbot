import $ from 'jquery';
import './style.scss';

const counter = () => {
  let num = 0;
  setInterval(() => {
    num += 1;
    $('#main').html(`you've been on this page for ${num} seconds!`);
  }, 1000);
};

counter();
