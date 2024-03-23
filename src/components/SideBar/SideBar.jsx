import {Link} from 'react-router-dom';

const SideBar = (props) => {
    const {showMenu} = props;
    if(showMenu && window.innerWidth > 1080){
    return ( 
        <div className="sideBar" >
                <ul>
                    <li>
                        <Link to="/productos">Todos</Link>
                        
                    </li> 
                    <li>
                        <Link to="/">Inicio</Link>
                    </li> 
                    <li>
                        <Link to="/client">Clientes</Link>
                    </li> 
                        
                </ul>
        </div>
     );}
}
 
export default SideBar;