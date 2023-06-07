import React, { useState } from "react";
import { usePopper } from "react-popper";
import { createPopper } from "@popperjs/core";
import imgUrl from './../../../src/assets/img/team-1-800x800.jpg'
import { userStateContext } from "../../contexts/ContextProvider";

export default function UserDropdown() {

  const { currentUser } = userStateContext();

// const UserDropdown = () => {
  const [dropDown, setDropDown] = useState(false);
  const [referenceEl, setReferenceEl] = useState(null);
  const [popperEl, setPopperEl] = useState(null);
  const newPopper = usePopper(referenceEl, popperEl, {
    placement: "bottom-start"
  });


  const abrirPopper = () => {
    setDropDown(true)
    console.log('abrir')
  };

  const fecharPopper = () => {
    setDropDown(false)
    console.log('fechar')

  };


  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState();
  // const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [btnDropdownRef, setBtnDropDownRef] = useState();
  // const btnDropdownRef = React.createRef();
  const [popoverDropdownRef, setPopoverDropdownRef] = useState();
  // const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    // setDropdownPopoverShow(true);
    setPopoverDropdownRef(true);
  };
  const closeDropdownPopover = () => {
    // setDropdownPopoverShow(false);
    setPopoverDropdownRef(false);
  };

  return (
    <>
      <button tabIndex="-1" onClick={(e) => {e.preventDefault(); fecharPopper() }} className={(dropDown ? "fixed" : "hidden") + " cursor-default focus:outline-none inset-0 h-full w-full bg-black/25"}></button>

      <a
        className="text-slate-500 block"
        href="#pablo"
        ref={setReferenceEl}
        onClick={(e) => {
          e.preventDefault();
          !dropDown ? abrirPopper() : fecharPopper();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={imgUrl}
            />
          </span>
        </div>
      </a>
      <div
        ref={setPopperEl}
        className={
          (dropDown ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute right-0 top-12"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          { currentUser.name }
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          { currentUser.email }
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="h-0 my-2 border border-solid border-slate-100" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a>
      </div>
    </>
  );
};

// export default UserDropdown;
