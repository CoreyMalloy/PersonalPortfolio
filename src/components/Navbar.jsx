import { Link } from "react-router-dom";
import './styles/Navbar.css'

 const Navbar = () => {
   return (
     <div>
       <ul className="nav-container">
         <li className="nav-item">
           <Link to="/">Home</Link>
         </li>
         <li className="nav-item">
           <Link to="/about">About</Link>
         </li>
         <li className="nav-item">
           <Link to="/projects">Projects</Link>
         </li>
         <li className="nav-item">
           <Link to="/contact">Contact</Link>
         </li>
       </ul>
     </div>
   );
 }

 export default Navbar