import { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <ul className='header_nav'>
                    <li><a href='#'>LOGO</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Сontact center</a></li>
                    <li><a href='#'>Feedback</a></li>
                </ul>
            </header>
            )
        };
    }
  
  export default Header;