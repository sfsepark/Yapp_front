import React, { useState } from "react";
import Router from "next/router";

import { useSelector, useDispatch } from "react-redux";
import "../css/NavBar.scss";
import "../css/container.scss";
import { SET_LOGIN_MODAL, OPEN_LOGIN_MODAL } from "../action";
import Hamburger from "../componets/Jun/Hamburger";
import NavBarSubMenu from "./Kim/Navbar/atomic/NavbarSubMenu";
import NavbarSubMenu from "./Kim/Navbar/atomic/NavbarSubMenu";

const NavBar = props => {
  const dispatch = useDispatch();
  const { selectPage } = useSelector(state => state.button);
  const { user } = useSelector(state => state);

  const [subOpen, setSubOpen] = useState(false);
  const routeToMain = () => {
    Router.push("/");
  };
  const openLoginModal = () => {
    dispatch({
      type: SET_LOGIN_MODAL,
      data: 0
    });
    dispatch({
      type: OPEN_LOGIN_MODAL
    });
  };
  const openJoinModal = () => {
    dispatch({
      type: SET_LOGIN_MODAL,
      data: 1
    });
    dispatch({
      type: OPEN_LOGIN_MODAL
    });
  };
  const openSubMenu = () => {
    setSubOpen(!subOpen);
  };
  const goToEnrollment = () => {
    Router.push("/enrollment/create/1/0");
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo" onClick={routeToMain}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="96"
            height="50"
            viewBox="0 0 96 50"
          >
            <text
              id="Toys"
              transform="translate(0 40)"
              fill="#1f254b"
              font-size="41"
              font-family="Montserrat-Bold, Montserrat"
              font-weight="700"
            >
              <tspan x="0" y="0">
                Toys
              </tspan>
            </text>
          </svg>
        </div>

        <div className="nav_right">
          <span className="nav_list">
            <a
              id={selectPage === "recruit" ? "ubderline_menubar" : ""}
              href="/recruit"
            >
              {" "}
              모집중인 프로젝트
            </a>

            <a
              id={selectPage === "review" ? "ubderline_menubar" : ""}
              href="/review"
            >
              프로젝트 후기
            </a>
          </span>

          <span
            id="nav_login_signup_container"
            style={user.userToken ? { display: "none" } : { display: "block" }}
          >
            <p id="nav_login_signup">
              {/* {<a onClick={openLoginModal}>로그인</a> / <a onClick={openJoinModal}>회원가입</a>} */}
              <a onClick={openLoginModal}>로그인 / 회원가입</a>
            </p>
          </span>

          <span
            className="nav_png"
            style={!user.userToken ? { display: "none" } : {}}
          >
            <div className="mypage_navbar_container" onClick={openSubMenu}>
              <button>
                <img
                  style={{ width: "25px", height: "32px" }}
                  src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/34B2916A-4DBF-46B6-94E2-B9F802EE2A0B.svg"
                />
              </button>
              <NavbarSubMenu open={subOpen} setSubOpen={setSubOpen} />
            </div>

            <button>
              <img
                style={{ width: "20px", height: "26px" }}
                src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/31B34105-463E-4989-A29E-CE86470707C9.svg"
              />
            </button>
          </span>

          <span
            className="nav_button"
            style={!user.userToken ? { display: "none" } : {}}
          >
            <button onClick={goToEnrollment}>모집글 작성 ></button>
          </span>
        </div>
        <div className="nav_right_mobile">
          <Hamburger isMobile={props.isMobile}></Hamburger>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
