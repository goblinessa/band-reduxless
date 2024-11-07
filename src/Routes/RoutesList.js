import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

import BandFunc from '../pages/bandFunc/bandFunc';
import Landing from '../pages/landing/landing';
import BandFuncClass from '../pages/bandFunc/bandFuncClass';
import NotFound from '../pages/notFound/notFound';

const routesList = [
    {
        id:0,
        path: "/",
        element: <Landing/>
    },
    {
        id:1,
        path: "/functional/",
        element: <BandFunc/>
    },
    {
        id:2,
        path: "/class/",
        element: <BandFuncClass/>
    },
    {
        id:3,
        path: "/*",
        element: <NotFound/>
    }

]


const RouteWithSubRoutes = (route) => {
    return (
        <Route key={route.id} path={route.path} element={route.element} />
    );
};

export const RoutesList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Layout/>}>
                    {routesList.map((route) => RouteWithSubRoutes(route))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default RoutesList;