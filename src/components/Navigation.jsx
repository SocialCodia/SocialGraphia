import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navigation = () =>
{
    const {name} = useSelector(state=>state.authSlice.user);
    console.log(name);
    // const {user}  = useSelector((state)=>state.authSlice);
    return(
        <>
        <nav className='blue'>
           <div className="">
            <NavLink className='brand-logo' to='/'> <div className="socialgraphia"></div> <span  className='hide-on-med-and-down'> Social Graphia</span> </NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to='#'>{name}</NavLink> </li>
                </ul>
                <ul className="right">
                    <li><NavLink to='/videos'>Videos</NavLink> </li>
                </ul>
           </div>
        </nav>
        </>
    )
}

export default Navigation;