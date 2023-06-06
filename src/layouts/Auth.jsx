import React from "react";
import { Outlet } from "react-router-dom";
import imgRegisterBg2 from './../assets/img/register_bg_2.png'

// components

import Navbar from "./../components/Navbars/AuthNavbar.jsx";
import FooterSmall from "./../components/Footers/FooterSmall.jsx";

// views

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
              className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
              style={{
                backgroundImage:
                  "url(" + imgRegisterBg2 + ")",
              }}
            >
            </div>
              <Outlet />
          <FooterSmall absolute />
        </section>
      </main>
          {/* <div
            className="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + imgRegisterBg2 + ")",
            }}
          ></div> */}
    </>
  );
}
