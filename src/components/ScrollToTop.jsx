import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return null;
}
// this is to prevent react behaviour of not staying at top when path changes 
// react router has given this functionality to us
// we will execute this in our index.js