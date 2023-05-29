import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/Prostate-01.png"
import Profile from "../assets/images/profile.png"
import { FiUpload } from 'react-icons/fi';
import { FaPencilAlt } from 'react-icons/fa';
import { MdOutlineColorLens } from 'react-icons/md';
import { BsDatabaseGear } from 'react-icons/bs';




export default function Header() {



    return (
        <div>

            <header className="app-header fixed-top">
                <div className="app-header-inner">
                    <div className="container-fluid py-2">
                        <div className="app-header-content">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">
                                    <Link
                                        id="sidepanel-toggler"
                                        className="sidepanel-toggler d-inline-block d-xl-none"
                                        to="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={30}
                                            height={30}
                                            viewBox="0 0 30 30"
                                            role="img"
                                        >
                                            <title>Menu</title>
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeMiterlimit={10}
                                                strokeWidth={2}
                                                d="M4 7h22M4 15h22M4 23h22"
                                            />
                                        </svg>
                                    </Link>
                                </div>

                                <div className="search-mobile-trigger d-sm-none col">
                                    <i className="search-mobile-trigger-icon fas fa-search" />
                                </div>

                                <div className="app-search-box col">
                                    <h4 style={{ color: "#14ccb0" }}>Welcome to Dashboard</h4>



                                </div>
                                <div className="app-utilities col-auto">
                                    {/* NOTIFICATION  */}

                                    <div className="app-utility-item app-notifications-dropdown dropdown">
                                        <Link
                                            className="dropdown-toggle no-toggle-arrow"
                                            id="notifications-dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            to="#"
                                            role="button"
                                            aria-expanded="false"
                                            title="Notifications"
                                        >

                                            <svg
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 16 16"
                                                className="bi bi-bell icon"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                                                />
                                            </svg>
                                            <span className="icon-badge">3</span>
                                        </Link>
                                        {/*//dropdown-toggle*/}
                                        <div
                                            className="dropdown-menu p-0"
                                            aria-labelledby="notifications-dropdown-toggle"
                                        >
                                            <div className="dropdown-menu-header p-3">
                                                <h5 className="dropdown-menu-title mb-0">Notifications</h5>
                                            </div>

                                            <div className="dropdown-menu-content">
                                                <div className="item p-3">
                                                    <div className="row gx-2 justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <img
                                                                className="profile-image"
                                                                src="assets/images/profiles/profile-1.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        {/*//col*/}
                                                        <div className="col">
                                                            <div className="info">
                                                                <div className="desc">
                                                                    Amy shared a file with you. Lorem ipsum dolor sit
                                                                    amet, consectetur adipiscing elit.{" "}
                                                                </div>
                                                                <div className="meta"> 2 hrs ago</div>
                                                            </div>
                                                        </div>
                                                        {/*//col*/}
                                                    </div>
                                                    {/*//row*/}
                                                    <Link className="link-mask" href="notifications.html" />
                                                </div>
                                                {/*//item*/}
                                                <div className="item p-3">
                                                    <div className="row gx-2 justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="app-icon-holder">
                                                                <svg
                                                                    width="1em"
                                                                    height="1em"
                                                                    viewBox="0 0 16 16"
                                                                    className="bi bi-receipt"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                                                                    />
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        {/*//col*/}
                                                        <div className="col">
                                                            <div className="info">
                                                                <div className="desc">
                                                                    You have a new invoice. Proin venenatis interdum
                                                                    est.
                                                                </div>
                                                                <div className="meta"> 1 day ago</div>
                                                            </div>
                                                        </div>
                                                        {/*//col*/}
                                                    </div>
                                                    {/*//row*/}
                                                    <Link className="link-mask" href="notifications.html" />
                                                </div>
                                                {/*//item*/}
                                                <div className="item p-3">
                                                    <div className="row gx-2 justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <div className="app-icon-holder icon-holder-mono">
                                                                <svg
                                                                    width="1em"
                                                                    height="1em"
                                                                    viewBox="0 0 16 16"
                                                                    className="bi bi-bar-chart-line"
                                                                    fill="currentColor"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        {/*//col*/}
                                                        <div className="col">
                                                            <div className="info">
                                                                <div className="desc">
                                                                    Your report is ready. Proin venenatis interdum
                                                                    est.
                                                                </div>
                                                                <div className="meta"> 3 days ago</div>
                                                            </div>
                                                        </div>
                                                        {/*//col*/}
                                                    </div>
                                                    {/*//row*/}
                                                    <Link className="link-mask" href="notifications.html" />
                                                </div>
                                                {/*//item*/}
                                                <div className="item p-3">
                                                    <div className="row gx-2 justify-content-between align-items-center">
                                                        <div className="col-auto">
                                                            <img
                                                                className="profile-image"
                                                                src="assets/images/profiles/profile-2.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        {/*//col*/}
                                                        <div className="col">
                                                            <div className="info">
                                                                <div className="desc">
                                                                    James sent you a new message.
                                                                </div>
                                                                <div className="meta"> 7 days ago</div>
                                                            </div>
                                                        </div>
                                                        {/*//col*/}
                                                    </div>
                                                    {/*//row*/}
                                                    <Link className="link-mask" href="notifications.html" />
                                                </div>
                                                {/*//item*/}
                                            </div>

                                            <div className="dropdown-menu-footer p-2 text-center">
                                                <Link href="notifications.html">View all</Link>
                                            </div>
                                        </div>

                                    </div>
                                    {/* settigs  */}
                                    <div className="app-utility-item">
                                        <Link to="#" title="">

                                        <FaPencilAlt/>
                                        </Link>
                                    </div>
                                    <div className="app-utility-item">
                                        <Link to="#" title="">

                                        <MdOutlineColorLens/>
                                        </Link>
                                    </div>
                                    {/* PROFILE  */}
                                    <div className="app-utility-item app-user-dropdown dropdown">
                                        <Link
                                            className="dropdown-toggle"
                                            id="user-dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            to="#"
                                            role="button"
                                            aria-expanded="false"
                                        >
                                            <img src={Profile} alt="user profile" />
                                        </Link>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="user-dropdown-toggle"
                                        >
                                            <li>
                                                <Link className="dropdown-item" href="account.html">
                                                    Account
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="settings.html">
                                                    Settings
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" href="login.html">
                                                    Log Out
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*//app-user-dropdown*/}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                {/* SIDBAR  */}
                <div id="app-sidepanel" className="app-sidepanel ">
                    <div id="sidepanel-drop" className="sidepanel-drop" />
                    <div className="sidepanel-inner d-flex flex-column">
                        <Link href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">
                            ×
                        </Link>
                        <div className="app-branding">
                            <Link className="app-logo" href="index.html">
                                <img
                                    className="logo-icon me-2"
                                    src={Logo}
                                    alt="logo"
                                />
                                {/* <span className="logo-text">PORTAL</span>    */}
                            </Link>
                        </div>

                        <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">

                            <div className='container'>

                                <div className=' mt-4' style={{ backgroundColor: "rgb(63 63 63)", borderRadius: "15px", border: "1px solid white" }} >
                                    <span style={{ color: "#14ccb0", fontSize: "large" }} ><i className='mx-2'> <FiUpload size="2em" /></i>Select NifTi File </span>
                                    <div className="row jutify-content-center text-center mb-2">
                                        <div className="col-md-12 mt-4 d-grid gap-2" >
                                            <button type="button" className="btn btn-primary" style={{ color: "white" }}>Upload</button>
                                        </div>

                                    </div>



                                </div>

                                <div className=' mt-5' >
                                    <span className='mb-2' style={{ color: "white", fontSize: "15px" }}><BsDatabaseGear size="2em" /><i className='mx-2' > </i>Segmentation options</span>
                                    <div className="row jutify-content-center text-center " style={{ backgroundColor: "rgb(63 63 63)", borderRadius: "15px", border: "1px solid white" }}>
                                        <div className="col-md-12 mt-2 " >
                                            <label class="form-label " style={{ color: "white" }}>Modal</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <div className="col-md-12 mt-4 " >
                                                <button type="button" className="btn btn-primary w-50 " style={{ color: "white" }} >Run</button>
                                            </div>
                                            <hr style={{ color: "white" }} />
                                            <div class="progress mb-2">
                                                <div class="progress-bar progress-bar-striped bg-success" style={{ width: "75%" }} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>

                                    </div>



                                </div>


                                <div className=' mt-5 mb-4' >
                                    <span style={{ color: "white", fontSize: "15px" }}> <FiUpload size="2em" /><i className='mx-2' style={{ color: "white", fontSize: "large" }}></i>Save Labels</span>
                                    <div className="row jutify-content-center text-center " style={{ backgroundColor: "rgb(63 63 63)", borderRadius: "15px", border: "1px solid white" }}>
                                        <div className="col-md-12 mt-2 " >
                                            <label class="form-label " style={{ color: "white" }}>File Name</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <div className="col-md-12 mt-4 mb-2" >
                                                <button type="button" className="btn btn-primary w-50 " style={{ color: "white" }} >Save</button>
                                            </div>

                                        </div>

                                    </div>



                                </div>
                            </div>
                        </nav>

                    </div>
                    {/*//sidepanel-inner*/}
                </div>
                {/*//app-sidepanel*/}
            </header>
        </div>
    )
}
