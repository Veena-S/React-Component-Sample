import './styles.scss';
import React from 'react';
import { render } from 'react-dom';

function BigAnnouncement() {
  const myEl = (
    <div>
      <h1 className="hero-text">
        Heyyyy <span className="warning">Wow!</span>
      </h1>
      <p>Lorem Ipsum!!</p>
    </div>
  );

  console.log('myEl:', myEl);
  return myEl;
}

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

const myContainer = (
  <div>
    <p>1. <BigAnnouncement /></p>
    <BigAnnouncement />
    <BigAnnouncement />
    <BigAnnouncement />
  </div>
);

// have react render the JSX element into the root element.
render(myContainer, rootElement);