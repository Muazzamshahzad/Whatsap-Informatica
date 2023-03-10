import React from "react";
function NavBar(){
    return <>
       <nav class="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">WHATSAP INFORMATICA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Moviles
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="./">Apple</a></li>
                    <li><a className="dropdown-item" href="/">Samsung </a></li>
                    <li><a className="dropdown-item" href="/">Xiaomi</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Contacta</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Sobre Nosotros</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </>
};
export default NavBar