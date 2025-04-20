import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    {isLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}
                </nav>
            </Suspense>
            

            
        </div>
    )
    
}