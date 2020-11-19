import './sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar =()=>{

    return(
        <div className="sidebar">
        <ul>
             <Link to='/about'>About</Link>
             <Link to='/about'>Cool</Link>
        </ul>
        </div>
    )
}

export default Sidebar