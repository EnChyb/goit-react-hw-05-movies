import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"
import css from "./SharedLayout.module.css";

export const SharedLauout = () => {
    return (
        <>
         <nav className={css.nav}>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
        </nav>
        <Suspense fallback={<Loader/>}>
                <Outlet />
        </Suspense>       
        </>

    )
}