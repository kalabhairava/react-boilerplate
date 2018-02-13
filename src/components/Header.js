import React from 'react';

function Header(props) {
  return (
    <header class="header">
      <h1 class="title">{props.title}</h1>
      <p class="subtitle">{props.subtitle}</p>
    </header>
  );
}

export default Header;
