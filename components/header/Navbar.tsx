import React from "react";
import { LinkBar, SearchBar, TopHead } from ".";

const Navbar = () => {
    return (
        <header>
            <TopHead />
            <SearchBar />
            <LinkBar />
        </header>
    );
};

export default Navbar;
