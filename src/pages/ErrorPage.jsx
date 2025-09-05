import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError();
        return (
            <div>
                <h1>Opps! An error is Found </h1>
                {error && <p>{error.data}</p>}
                <NavLink to={"/"}>
                <button>Go Back To Home</button>
                </NavLink>
            </div>
        )

}