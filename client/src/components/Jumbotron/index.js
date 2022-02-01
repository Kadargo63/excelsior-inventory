import React from "react";

function Jumbotron({ children }) {
  return (
    <div className='jumbotron'  >
      {children}
      <img src='https://raw.githubusercontent.com/Kadargo63/excelsior-inventory/develop/client/public/images/logo-with-title.png' alt='Destination Dance Logo' />
    </div>
  );
}

export default Jumbotron;
