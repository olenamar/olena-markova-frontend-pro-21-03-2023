import { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <aside>
                    <ul className='nav_ul'>
                        <li><a href='#'>MTC</a></li>
                        <li><a href='#'>KyivStar</a></li>
                        <li><a href='#'>lifecell</a></li>
                    </ul>
                </aside>
            </div>
            );
        }
    }
  
  export default Navigation;
  