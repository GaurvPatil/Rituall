import React from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';


function Topnav() {

  return (
<div>
 <div className="Blueline"></div>
      <div className="Topnav">
        <nav>
          <ul>
            <li>Menu</li>
            <li>Ritual</li>
            <div>
            <a href="#">Who We Are</a>
           <RiShoppingBagLine size="1.3rem"/>
            </div>
          </ul>
        </nav>
        
      </div> 
      </div>

  );
}

export default Topnav;



