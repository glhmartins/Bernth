import {createBrowserRouter} from 'react-router-dom';
import Layout from '../pages/Layout';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Imprint from '../pages/Imprint';
import LegalDisclosure from '../pages/LegalDisclosure';
import Login from '../pages/Login';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Products from '../pages/Products';
import TermsAndService from '../pages/TermsAndService';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout />,
        children: [
            {path: "", element: <Home />},
            {path: "Imprint", element: <Imprint />},
            {path: "Legal-Disclosure", element: <LegalDisclosure />},
            {path: "Login", element: <Login />},
            {path: "Privacy-Policy", element: <PrivacyPolicy />},
            {path: "Products", element: <Products />},
            {path: "Terms-And-Service", element: <TermsAndService />},
            {path: "Error", element: <Error />}
        ]
    }
]);

export default router;