import React from 'react'

function Header(props) {
    return (
        <div>
          <h1>
            Hello there {props.name}
          </h1>
          </div>
    );
}

export default Header;