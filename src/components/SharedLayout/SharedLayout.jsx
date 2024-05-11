import { Suspense } from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
export const SharedLauout = () => {
    return (
        <>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </nav>
        <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
        </Suspense>       
        </>

    )
}