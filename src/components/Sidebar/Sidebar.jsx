/*eslint-disable*/
import React from "react";
import { Link, NavLink } from "react-router-dom";

import NotificationDropdown from "./../../components/Dropdowns/NotificationDropdown.jsx";
import UserDropdown from "./../../components/Dropdowns/UserDropdown.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClipboard, faClipboardList, faFingerprint, faMapMarked, faNewspaper, faTable, faTimes, faTools, faTv, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  console.log(window.location.href.indexOf("/admin/dashboard"))

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Notus React
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <NavLink
                  className={
                    ({isActive, isPending}) => classNames(isActive ? "text-sky-500 hover:text-sky-600" : "text-slate-700 hover:text-slate-500", "text-xs uppercase py-3 font-bold block")
                  }
                  to="/admin/dashboard"
                >
                  {({isActive, isPending}) => 
                    (
                      <>
                        <FontAwesomeIcon icon={faTv} className={classNames(isActive ? 'opacity-75' : 'text-slate-300', 'mr-2 text-sm')} />
                        {' '}
                        Dashboard
                      </>
                    )}
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  className={
                    ({isActive, isPending}) => classNames(isActive ? 'text-sky-500 hover:text-sky-600' : 'text-slate-700 hover:text-slate-500', 'text-xs uppercase py-3 font-bold block')
                  }
                  to="/admin/settings"
                >
                  {({isActive, isPending}) =>
                    (
                      <>
                        <FontAwesomeIcon icon={faTools} className={classNames(isActive ? 'opacity-75' : 'text-slate-300', 'mr-2 text-sm')} />
                        {' '}
                        Settings
                      </>
                    )
                  }
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  className={
                    ({isActive, isPending}) => classNames(isActive ? 'text-sky-500 hover:text-sky-600' : 'text-slate-700 hover:text-slate-500', 'text-xs uppercase py-3 font-bold block')
                  }
                  to="/admin/tables"
                >
                  {({isActive, isPending}) =>
                    (
                      <>
                        <FontAwesomeIcon icon={faTable} className={classNames(isActive ? 'opacity-75' : 'text-slate-300', 'mr-2 text-sm')} />
                        {' '}
                        Tables
                      </>
                    )
                  }
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  className={
                    ({isActive, isPending}) => classNames(isActive ? 'text-sky-500 hover:text-sky-600' : 'text-slate-700 hover:text-slate-500', 'text-xs uppercase py-3 font-bold block')
                  }
                  to="/admin/maps"
                >
                  {({isActive, isPending}) =>
                    (
                      <>
                        <FontAwesomeIcon icon={faMapMarked} className={classNames(isActive ? 'opacity-75' : 'text-slate-300', 'mr-2 text-sm')} />
                        {' '}
                        Maps
                      </>
                    )
                  }
                </NavLink>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                  to="/login"
                >
                  <FontAwesomeIcon icon={faFingerprint} className="text-slate-400 mr-2 text-sm" />{" "}
                  Login
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                  to="/register"
                >
                  <FontAwesomeIcon icon={faClipboardList} className="text-slate-300 mr-2 text-sm" />{" "}
                  Register
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                  to="/landing"
                >
                  <FontAwesomeIcon icon={faNewspaper} className="text-slate-400 mr-2 text-sm" />{" "}
                  Landing Page
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold block"
                  to="/profile"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="text-slate-400 mr-2 text-sm" />{" "}
                  Profile Page
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-paint-brush mr-2 text-slate-300 text-base"></i>
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-css3-alt mr-2 text-slate-300 text-base"></i>
                  CSS Components
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-angular mr-2 text-slate-300 text-base"></i>
                  Angular
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-js-square mr-2 text-slate-300 text-base"></i>
                  Javascript
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-slate-300 text-base"></i>
                  NextJS
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-slate-300 text-base"></i>
                  React
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-link mr-2 text-slate-300 text-base"></i>
                  Svelte
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-vuejs mr-2 text-slate-300 text-base"></i>
                  VueJS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
