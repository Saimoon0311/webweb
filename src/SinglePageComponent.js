import React from "react";

// import "./App.css";
import "./style.css";
// import "./classy-nav.css";
// import "./icons folde/style.css";
// import "./newstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Carousel, Form } from "react-bootstrap";

import logos from "./Images/ff.png";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import uu from './Images/uu.jpeg'
import qq from './Images/qq.jpeg'
import tt from './Images/tt.jpeg'
import ww from './Images/ww.jpeg'
import yy from './Images/yy.jpeg'
import "swiper/swiper-bundle.min.css";
import jQuery from "jquery";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import image from "./Images/rr.jpeg";

const SinglePageComponent = () => {

  var uza_window = $(window);
  uza_window.on("scroll", function () {
    if (uza_window.scrollTop() > 0) {
      $(".main-header-area").addClass("sticky");
    } else {
      $(".main-header-area").removeClass("sticky");
    }
  });


  // (function ($) {
  //   if ($.fn.classyNav) {
  //     $("#uzaNav").classyNav();
  //   }
  //   $.fn.classyNav = function (options) {
  //     // Variables
  //     var navContainer = $(".classy-nav-container");
  //     var classy_nav = $(".classynav ul");
  //     var classy_navli = $(".classynav > ul > li");
  //     var navbarToggler = $(".classy-navbar-toggler");
  //     var closeIcon = $(".classycloseIcon");
  //     var navToggler = $(".navbarToggler");
  //     var classyMenu = $(".classy-menu");
  //     var var_window = $(window);

  //     // default options
  //     var defaultOpt = $.extend(
  //       {
  //         theme: "light",
  //         breakpoint: 991,
  //         openCloseSpeed: 350,
  //         megaopenCloseSpeed: 700,
  //         alwaysHidden: false,
  //         openMobileMenu: "left",
  //         dropdownRtl: true,
  //         stickyNav: true,
  //         stickyFooterNav: false,
  //       },
  //       options
  //     );

  //     return this.each(function () {
  //       // light or dark theme
  //       if (defaultOpt.theme === "light" || defaultOpt.theme === "dark") {
  //         navContainer.addClass(defaultOpt.theme);
  //       }

  //       // open mobile menu direction 'left' or 'right' side
  //       if (
  //         defaultOpt.openMobileMenu === "left" ||
  //         defaultOpt.openMobileMenu === "right"
  //       ) {
  //         navContainer.addClass(defaultOpt.openMobileMenu);
  //       }

  //       // dropdown rtl
  //       if (defaultOpt.dropdownRtl === true) {
  //         navContainer.addClass("dropdown-rtl");
  //       }

  //       // navbar toggler
  //       navbarToggler.on("click", function () {
  //         navToggler.addClass("active");
  //         classyMenu.addClass("menu-on");
  //       });

  //       // close icon
  //       closeIcon.on("click", function () {
  //         classyMenu.removeClass("menu-on");
  //         navToggler.removeClass("active");
  //       });

  //       // add dropdown & megamenu class in parent li class
  //       classy_navli.has(".dropdown").addClass("cn-dropdown-item");
  //       classy_navli.has(".megamenu").addClass("megamenu-item");

  //       // adds toggle button to li items that have children
  //       classy_nav.find("li a").each(function () {
  //         if ($(this).next().length > 0) {
  //           $(this)
  //             .parent("li")
  //             .addClass("has-down")
  //             .append('<span class="dd-trigger"></span>');
  //         }
  //       });

  //       // expands the dropdown menu on each click
  //       classy_nav.find("li .dd-trigger").on("click", function (e) {
  //         e.preventDefault();
  //         $(this)
  //           .parent("li")
  //           .children("ul")
  //           .stop(true, true)
  //           .slideToggle(defaultOpt.openCloseSpeed);
  //         $(this).parent("li").toggleClass("active");
  //       });

  //       // add padding in dropdown & megamenu item
  //       $(".megamenu-item").removeClass("has-down");

  //       // expands the megamenu on each click
  //       classy_nav.find("li .dd-trigger").on("click", function (e) {
  //         e.preventDefault();
  //         $(this)
  //           .parent("li")
  //           .children(".megamenu")
  //           .slideToggle(defaultOpt.megaopenCloseSpeed);
  //       });

  //       // check browser width in real-time
  //       function breakpointCheck() {
  //         var windoWidth = window.innerWidth;
  //         if (windoWidth <= defaultOpt.breakpoint) {
  //           navContainer.removeClass("breakpoint-off");
  //           navContainer.addClass("breakpoint-on");
  //           // $('.breakpoint-off').toggleClass('breakpoint-on');
  //         } else {
  //           navContainer.removeClass("breakpoint-on");
  //           navContainer.addClass("breakpoint-off");
  //           // $('.breakpoint-on').toggleClass('breakpoint-off');
  //         }
  //       }

  //       breakpointCheck();

  //       var_window.on("resize", function () {
  //         breakpointCheck();
  //       });

  //       // always hidden enable
  //       if (defaultOpt.alwaysHidden) {
  //         navContainer.addClass("breakpoint-on").removeClass("breakpoint-off");
  //       }

  //       // sticky
  //       if (defaultOpt.stickyNav) {
  //         var_window.on("scroll", function () {
  //           if (var_window.scrollTop() > 0) {
  //             navContainer.addClass("classy-sticky");
  //           } else {
  //             navContainer.removeClass("classy-sticky");
  //           }
  //         });
  //       }

  //       // footer sticky
  //       if (defaultOpt.stickyFooterNav === true) {
  //         navContainer.addClass("classy-sticky-footer");
  //       }
  //     });
  //   };
  // })(jQuery);

  // let listener = null
  // const [scrollState, setScrollState] = useState("top")

  //     useEffect(() => {
  //       listener = document.addEventListener("scroll", e => {
  //         var scrolled = document.scrollingElement.scrollTop
  //         if (scrolled >= 10) {
  //           if (scrollState !== "amir") {
  //             setScrollState("amir")
  //           }
  //         } else {
  //           if (scrollState !== "top") {
  //             setScrollState("top")
  //           }
  //         }
  //       })
  //       return () => {
  //         document.removeEventListener("scroll", listener)
  //       }
  //     }, [scrollState])

  const [name, setName] = useState();
  const [fathername, setFatherName] = useState();
  const [phone, setPhone] = useState();
  const [homeNumber, setHomeNumber] = useState();
  const [cnicNumber, setCNICNumber] = useState();
  const [email, setEmail] = useState();
  const [education, setEducation] = useState();
  const [time, setTime] = useState();
  const [message, setMessage] = useState();

  const [courseTitle, setCourseTitle] = useState();
  console.log(courseTitle);
  console.log(time);

  const data = {
    name: name,
    fathername: fathername,
    phone: phone,
    homeNumber: homeNumber,
    cnicNumber: cnicNumber,
    email: email,
    education: education,
    time: time,
    message: message,
  };

  async function onSubmit(e) {
    e.preventDefault();

    fetch(
      "https://sheet.best/api/sheets/18362fa5-38c4-4e4e-81d3-df643e83c332",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      //  .then((response) => response.json())
      .then((responseData) => {
        alert("Your Ad Has Been Posted");
        console.log(responseData);
      });
  }
     
      var var_window = $(window);
    useEffect(() => {
      
      
        // Variables
        var navContainer = $(".classy-nav-container");
        var classy_nav = $(".classynav ul");
        var classy_navli = $(".classynav > ul > li");
        var navbarToggler = $(".classy-navbar-toggler");
        var closeIcon = $(".classycloseIcon");
        var navToggler = $(".navbarToggler");
        var classyMenu = $(".classy-menu");
        
  
        // default options
        var defaultOpt = $.extend(
          {
            theme: "light",
            breakpoint: 991,
            openCloseSpeed: 350,
            megaopenCloseSpeed: 700,
            alwaysHidden: false,
            openMobileMenu: "left",
            dropdownRtl: true,
            stickyNav: true,
            stickyFooterNav: false,
          },
        );
  
          // light or dark theme
          if (defaultOpt.theme === "light" || defaultOpt.theme === "dark") {
            navContainer.addClass(defaultOpt.theme);
          }
  
          // open mobile menu direction 'left' or 'right' side
          if (
            defaultOpt.openMobileMenu === "left" ||
            defaultOpt.openMobileMenu === "right"
          ) {
            navContainer.addClass(defaultOpt.openMobileMenu);
          }
  
          // dropdown rtl
          if (defaultOpt.dropdownRtl === true) {
            navContainer.addClass("dropdown-rtl");
          }
  
          // navbar toggler
          navbarToggler.on("click", function () {
            navToggler.addClass("active");
            classyMenu.addClass("menu-on");
          });
  
          // close icon
          closeIcon.on("click", function () {
            classyMenu.removeClass("menu-on");
            navToggler.removeClass("active");
          });
  
          // add dropdown & megamenu class in parent li class
          classy_navli.has(".dropdown").addClass("cn-dropdown-item");
          classy_navli.has(".megamenu").addClass("megamenu-item");
  
          // adds toggle button to li items that have children
          classy_nav.find("li a").each(function () {
            if ($(this).next().length > 0) {
              $(this)
                .parent("li")
                .addClass("has-down")
                .append('<span class="dd-trigger"></span>');
            }
          });
  
          // expands the dropdown menu on each click
          classy_nav.find("li .dd-trigger").on("click", function (e) {
            e.preventDefault();
            $(this)
              .parent("li")
              .children("ul")
              .stop(true, true)
              .slideToggle(defaultOpt.openCloseSpeed);
            $(this).parent("li").toggleClass("active");
          });
  
          // add padding in dropdown & megamenu item
          $(".megamenu-item").removeClass("has-down");
  
          // expands the megamenu on each click
          classy_nav.find("li .dd-trigger").on("click", function (e) {
            e.preventDefault();
            $(this)
              .parent("li")
              .children(".megamenu")
              .slideToggle(defaultOpt.megaopenCloseSpeed);
          });
  
          // check browser width in real-time
          function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= defaultOpt.breakpoint) {
              navContainer.removeClass("breakpoint-off");
              navContainer.addClass("breakpoint-on");
              // $('.breakpoint-off').toggleClass('breakpoint-on');
            } else {
              navContainer.removeClass("breakpoint-on");
              navContainer.addClass("breakpoint-off");
              // $('.breakpoint-on').toggleClass('breakpoint-off');
            }
          }
  
          breakpointCheck();
  
          var_window.on("resize", function () {
            breakpointCheck();
          });
  
          // always hidden enable
          if (defaultOpt.alwaysHidden === true) {
            navContainer.addClass("breakpoint-on").removeClass("breakpoint-off");
          }
  
          // sticky
          // if (defaultOpt.stickyNav === true) {
          //   var_window.on("scroll", function () {
          //     if (var_window.scrollTop() > 0) {
          //       navContainer.addClass("sticky");
          //     } else {
          //       navContainer.removeClass("sticky");
          //     }
          //   });
          // }
  
          // footer sticky
          if (defaultOpt.stickyFooterNav === true) {
            navContainer.addClass("classy-sticky-footer");
          }
       
      
    }, [var_window]);



  return (
    <>
      <div>
        <div className="top-search-area">
          <div
            className="modal fade"
            id="searchModal"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="btn close-btn"
                    data-dismiss="modal"
                  >
                    <i className="fa fa-times" />
                  </button>
                  <form action="index.html" method="post">
                    <input
                      type="search"
                      name="top-search-bar"
                      className="form-control"
                      placeholder="Search and hit enter..."
                    />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="header-area">
          <div className={"main-header-area "}>
            <div className="classy-nav-container breakpoint-off left ">
              <nav
                className="classy-navbar justify-content-between"
                id="uzaNav"
              >
                <a className="nav-brand" href="index.html">
                  <p></p>
                  <p></p>
                  <p></p>
                  <img
                    src={logos}
                    width={100}
                    alt=""
                    data-pagespeed-url-hash={4181408890}
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </a>
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top" />
                      <span className="bottom" />
                    </div>
                  </div>
                  <div className="classynav">
                    <ul id="nav">
                      <li className="current-item">
                        <a href="#HeroSection">Home</a>
                      </li>
                      <li >
                        <a href="#pricing">Price</a>
                      </li>
                      {/* <li className="cn-dropdown-item has-down">
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="./index.html">- Home</a>
                          </li>
                          <li>
                            <a href="./about.html">- About</a>
                          </li>
                          <li>
                            <a href="./services.html">- Services</a>
                          </li>
                          <li>
                            <a href="./portfolio.html">- Portfolio</a>
                          </li>
                          <li>
                            <a href="./portfolio-single.html">
                              - Single Portfolio
                            </a>
                          </li>
                          <li>
                            <a href="./blog.html">- Blog</a>
                          </li>
                          <li>
                            <a href="./single-blog.html">- Blog Details</a>
                          </li>
                          <li>
                            <a href="./contact.html">- Contact</a>
                          </li>
                          <li className="has-down">
                            <a href="#">- Dropdown</a>
                            <ul className="dropdown">
                              <li>
                                <a href="#">- Dropdown Item</a>
                              </li>
                              <li className="has-down">
                                <a href="#">- Dropdown Item</a>
                                <ul className="dropdown">
                                  <li>
                                    <a href="#">- Even Dropdown</a>
                                  </li>
                                  <li>
                                    <a href="#">- Even Dropdown</a>
                                  </li>
                                  <li>
                                    <a href="#">- Even Dropdown</a>
                                  </li>
                                  <li>
                                    <a href="#">- Even Dropdown</a>
                                  </li>
                                </ul>
                                <span className="dd-trigger" />
                              </li>
                              <li>
                                <a href="#">- Dropdown Item</a>
                              </li>
                              <li>
                                <a href="#">- Dropdown Item</a>
                              </li>
                            </ul>
                            <span className="dd-trigger" />
                          </li>
                        </ul>
                        <span className="dd-trigger" />
                      </li> */}
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <section className="welcome-area" id="HeroSection">
          <Carousel>
            <Carousel.Item>
              <div className="single-welcome-slide">
                <div className="background-curve">
                  <img
                    src="img/xcurve-1.png.pagespeed.ic.XvLJf8V3oh.webp"
                    alt=""
                  />
                </div>
                <div className="welcome-content h-100">
                  <div className="container h-100">
                    <div className="row h-100 align-items-center">
                      <div className="col-12 col-md-6">
                        <div className="welcome-text">
                          <h2
                            data-animation="fadeInUp"
                            data-delay="100ms"
                            style={{ animationDelay: "100ms", fontSize: 60 }}
                          >
                            Need phone repair ? <br /> We got <span>You.</span>
                          </h2>
                          <h5
                            data-animation="fadeInUp"
                            data-delay="400ms"
                            style={{ animationDelay: "400ms" }}
                          >
                            We do mobile repairing with enthusiasm.
                          </h5>
                          <a
                            href="#"
                            className="btn uza-btn btn-2"
                            data-animation="fadeInUp"
                            data-delay="700ms"
                            style={{ animationDelay: "700ms" }}
                          >
                            Start Exploring
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="welcome-thumbnail">
                          <img
                            src={image}
                            alt=""
                            data-animation="slideInRight"
                            data-delay="400ms"
                            data-pagespeed-url-hash={3768333782}
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                            style={{ animationDelay: "400ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          {/* <div className="welcome-slides owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-2698px, 0px, 0px)",
                  transition: "all 0s ease 0s",
                  width: "9443px",
                }}
              >
                <div className="owl-item cloned" style={{ width: "1349px" }}>
                  <div className="single-welcome-slide">
                    <div className="background-curve">
                      <img
                        src="img/xcurve-1.png.pagespeed.ic.XvLJf8V3oh.webp"
                        alt=""
                      />
                    </div>
                    <div className="welcome-content h-100">
                      <div className="container h-100">
                        <div className="row h-100 align-items-center">
                          <div className="col-12 col-md-6">
                            <div className="welcome-text">
                              <h2
                                data-animation="fadeInUp"
                                data-delay="100ms"
                                style={{ animationDelay: "100ms" }}
                              >
                                Uza makes your <br /> biz <span>greater</span>
                              </h2>
                              <h5
                                data-animation="fadeInUp"
                                data-delay="400ms"
                                style={{ animationDelay: "400ms" }}
                              >
                                We love to create "cool" things on Digital
                                Platforms
                              </h5>
                              <a
                                href="#"
                                className="btn uza-btn btn-2"
                                data-animation="fadeInUp"
                                data-delay="700ms"
                                style={{ animationDelay: "700ms" }}
                              >
                                Start Exploring
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="welcome-thumbnail">
                              <img
                                src="img/x1.png.pagespeed.ic.Qg41tBstCU.webp"
                                alt=""
                                data-animation="slideInRight"
                                data-delay="400ms"
                                data-pagespeed-url-hash={3768333782}
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                style={{ animationDelay: "400ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "1349px" }}>
                  <div className="single-welcome-slide">
                    <div className="background-curve">
                      <img
                        src="img/xcurve-1.png.pagespeed.ic.XvLJf8V3oh.webp"
                        alt=""
                        data-pagespeed-url-hash={969712590}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div className="welcome-content h-100">
                      <div className="container h-100">
                        <div className="row h-100 align-items-center">
                          <div className="col-12 col-md-6">
                            <div className="welcome-text">
                              <h2
                                data-animation="fadeInUp"
                                data-delay="100ms"
                                style={{ animationDelay: "100ms" }}
                              >
                                Uza makes your <br /> biz <span>greater</span>
                              </h2>
                              <h5
                                data-animation="fadeInUp"
                                data-delay="400ms"
                                style={{ animationDelay: "400ms" }}
                              >
                                We love to create "cool" things on Digital
                                Platforms
                              </h5>
                              <a
                                href="#"
                                className="btn uza-btn btn-2"
                                data-animation="fadeInUp"
                                data-delay="700ms"
                                style={{ animationDelay: "700ms" }}
                              >
                                Start Exploring
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="welcome-thumbnail">
                              <img
                                src="img/x1.png.pagespeed.ic.Qg41tBstCU.webp"
                                alt=""
                                data-animation="slideInRight"
                                data-delay="400ms"
                                data-pagespeed-url-hash={3768333782}
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                style={{ animationDelay: "400ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: "1349px" }}>
                  <div className="single-welcome-slide">
                    <div className="background-curve">
                      <img
                        src="img/xcurve-1.png.pagespeed.ic.XvLJf8V3oh.webp"
                        alt=""
                        data-pagespeed-url-hash={969712590}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div className="welcome-content h-100">
                      <div className="container h-100">
                        <div className="row h-100 align-items-center">
                          <div className="col-12 col-md-6">
                            <div className="welcome-text">
                              <h2
                                data-animation="fadeInUp"
                                data-delay="100ms"
                                style={{ animationDelay: "100ms" }}
                              >
                                Uza makes your <br /> biz <span>greater</span>
                              </h2>
                              <h5
                                data-animation="fadeInUp"
                                data-delay="400ms"
                                style={{ animationDelay: "400ms" }}
                              >
                                We love to create "cool" things on Digital
                                Platforms
                              </h5>
                              <a
                                href="#"
                                className="btn uza-btn btn-2"
                                data-animation="fadeInUp"
                                data-delay="700ms"
                                style={{ animationDelay: "700ms" }}
                              >
                                Start Exploring
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="welcome-thumbnail">
                              <img
                                src="img/x1.png.pagespeed.ic.Qg41tBstCU.webp"
                                alt=""
                                data-animation="slideInRight"
                                data-delay="400ms"
                                data-pagespeed-url-hash={3768333782}
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                style={{ animationDelay: "400ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1349px" }}>
                  <div className="single-welcome-slide">
                    <div className="background-curve">
                      <img
                        src="img/xcurve-1.png.pagespeed.ic.XvLJf8V3oh.webp"
                        alt=""
                        data-pagespeed-url-hash={969712590}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div className="welcome-content h-100">
                      <div className="container h-100">
                        <div className="row h-100 align-items-center">
                          <div className="col-12 col-md-6">
                            <div className="welcome-text">
                              <h2
                                data-animation="fadeInUp"
                                data-delay="100ms"
                                style={{ animationDelay: "100ms" }}
                              >
                                Uza makes your <br /> biz <span>greater</span>
                              </h2>
                              <h5
                                data-animation="fadeInUp"
                                data-delay="400ms"
                                style={{ animationDelay: "400ms" }}
                              >
                                We love to create "cool" things on Digital
                                Platforms
                              </h5>
                              <a
                                href="#"
                                className="btn uza-btn btn-2"
                                data-animation="fadeInUp"
                                data-delay="700ms"
                                style={{ animationDelay: "700ms" }}
                              >
                                Start Exploring
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="welcome-thumbnail">
                              <img
                                src="img/x1.png.pagespeed.ic.Qg41tBstCU.webp"
                                alt=""
                                data-animation="slideInRight"
                                data-delay="400ms"
                                data-pagespeed-url-hash={3768333782}
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                style={{ animationDelay: "400ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1349px" }}>
                  <div className="single-welcome-slide">
                    <div className="background-curve">
                      <img
                        src="img/xcurve-1.png.pagespeed.ic.XvLJf8V3oh.webp"
                        alt=""
                        data-pagespeed-url-hash={969712590}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div className="welcome-content h-100">
                      <div className="container h-100">
                        <div className="row h-100 align-items-center">
                          <div className="col-12 col-md-6">
                            <div className="welcome-text">
                              <h2
                                data-animation="fadeInUp"
                                data-delay="100ms"
                                style={{ animationDelay: "100ms" }}
                              >
                                Uza makes your <br /> biz <span>greater</span>
                              </h2>
                              <h5
                                data-animation="fadeInUp"
                                data-delay="400ms"
                                style={{ animationDelay: "400ms" }}
                              >
                                We love to create "cool" things on Digital
                                Platforms
                              </h5>
                              <a
                                href="#"
                                className="btn uza-btn btn-2"
                                data-animation="fadeInUp"
                                data-delay="700ms"
                                style={{ animationDelay: "700ms" }}
                              >
                                Start Exploring
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="welcome-thumbnail">
                              <img
                                src="img/x1.png.pagespeed.ic.Qg41tBstCU.webp"
                                alt=""
                                data-animation="slideInRight"
                                data-delay="400ms"
                                data-pagespeed-url-hash={3768333782}
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                style={{ animationDelay: "400ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "1349px" }}>
                  <div className="single-welcome-slide">
                    <div className="background-curve">
                      <img
                        src="img/xcurve-1.png.pagespeed.ic.XvLJf8V3oh.webp"
                        alt=""
                        data-pagespeed-url-hash={969712590}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div className="welcome-content h-100">
                      <div className="container h-100">
                        <div className="row h-100 align-items-center">
                          <div className="col-12 col-md-6">
                            <div className="welcome-text">
                              <h2
                                data-animation="fadeInUp"
                                data-delay="100ms"
                                style={{ animationDelay: "100ms" }}
                              >
                                Uza makes your <br /> biz <span>greater</span>
                              </h2>
                              <h5
                                data-animation="fadeInUp"
                                data-delay="400ms"
                                style={{ animationDelay: "400ms" }}
                              >
                                We love to create "cool" things on Digital
                                Platforms
                              </h5>
                              <a
                                href="#"
                                className="btn uza-btn btn-2"
                                data-animation="fadeInUp"
                                data-delay="700ms"
                                style={{ animationDelay: "700ms" }}
                              >
                                Start Exploring
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="welcome-thumbnail">
                              <img
                                src="img/x1.png.pagespeed.ic.Qg41tBstCU.webp"
                                alt=""
                                data-animation="slideInRight"
                                data-delay="400ms"
                                data-pagespeed-url-hash={3768333782}
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                style={{ animationDelay: "400ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: "1349px" }}>
                  <div className="single-welcome-slide">
                    <div className="background-curve">
                      <img
                        src="img/xcurve-1.png.pagespeed.ic.XvLJf8V3oh.webp"
                        alt=""
                        data-pagespeed-url-hash={969712590}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div className="welcome-content h-100">
                      <div className="container h-100">
                        <div className="row h-100 align-items-center">
                          <div className="col-12 col-md-6">
                            <div className="welcome-text">
                              <h2
                                data-animation="fadeInUp"
                                data-delay="100ms"
                                style={{ animationDelay: "100ms" }}
                              >
                                Uza makes your <br /> biz <span>greater</span>
                              </h2>
                              <h5
                                data-animation="fadeInUp"
                                data-delay="400ms"
                                style={{ animationDelay: "400ms" }}
                              >
                                We love to create "cool" things on Digital
                                Platforms
                              </h5>
                              <a
                                href="#"
                                className="btn uza-btn btn-2"
                                data-animation="fadeInUp"
                                data-delay="700ms"
                                style={{ animationDelay: "700ms" }}
                              >
                                Start Exploring
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="welcome-thumbnail">
                              <img
                                src="img/x1.png.pagespeed.ic.Qg41tBstCU.webp"
                                alt=""
                                data-animation="slideInRight"
                                data-delay="400ms"
                                data-pagespeed-url-hash={3768333782}
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                style={{ animationDelay: "400ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <div className="owl-prev">prev</div>
              <div className="owl-next">next</div>
            </div>
            <div className="owl-dots">
              <div className="owl-dot active">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
            </div>
          </div> */}
        </section>
        <section className="uza-about-us-area" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="about-us-thumbnail mb-80">
                  <img
                    src={yy}
                    alt=""
                    data-pagespeed-url-hash={4062730999}
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                  <div className="uza-video-area hi-icon-effect-8">
                    <a
                      href="https://www.youtube.com/watch?v=sSakBz_eYzQ"
                      className="hi-icon video-play-btn"
                    >
                      <i className="fa fa-play" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="about-us-content mb-80">
                  <h2>Why to choose AL-ABID Mobile Institute?</h2>
                  <p>
                    AL-ABID.com is Pakistan's first and most trusted cell phone
                    administration organization. We fix cell phones, everything
                    being equal, and make with the additional accommodation of
                    free pickup and conveyance.
                  </p>
                  <p>
                    It is safe to say that you are searching for telephone or
                    some other gadget fix? We complete huge number of versatile
                    fixes each month and help you.
                  </p>
                  <a href="#" className="btn uza-btn btn-2 mt-4">
                    Start Exploring
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-bg-pattern">
            <img
              src="img/xcurve-2.png.pagespeed.ic.SO0qM3XKna.webp"
              alt=""
              data-pagespeed-url-hash={1264212511}
              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            />
          </div>
        </section>
        <section className="uza-services-area section-padding-80-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Our Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="single-service-area mb-80">
                  <div className="service-icon">
                    <i className="icon_cone_alt" />
                  </div>
                  <h5>All Mobile Glass Change.</h5>
                  <p>
                    All type of mobile glass change with latest machine even
                    edge mobile also chnage with fininshing.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="single-service-area mb-80">
                  <div className="service-icon">
                    <i className="icon_piechart" />
                  </div>
                  <h5>All type of mobile software.</h5>
                  <p>
                    All type of mobile software problem solve with latest
                    software and devices.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="single-service-area mb-80">
                  <div className="service-icon">
                    <i className="icon_easel" />
                  </div>
                  <h5>All mobile hardware repairing.</h5>
                  <p>
                    By using the highest quality replacement parts, we make sure
                    that your device will work like new.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="uza-portfolio-area section-padding-80">
          {/* <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Our Portfolio</h2>
                  <p>
                    We stay on top of our industry by being experts in yours.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x6.jpg.pagespeed.ic.fnUkywwBZz.webp"
                  alt=""
                  data-pagespeed-url-hash={945763387}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x5.jpg.pagespeed.ic.TKBNCQ7ich.webp"
                  alt=""
                  data-pagespeed-url-hash={651263466}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x6.jpg.pagespeed.ic.fnUkywwBZz.webp"
                  alt=""
                  data-pagespeed-url-hash={945763387}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x3.jpg.pagespeed.ic.QmqEbGyIs2.webp"
                  alt=""
                  data-pagespeed-url-hash={62263624}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x4.jpg.pagespeed.ic.KxaCIhR9Oa.webp"
                  alt=""
                  data-pagespeed-url-hash={356763545}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x5.jpg.pagespeed.ic.TKBNCQ7ich.webp"
                  alt=""
                  data-pagespeed-url-hash={651263466}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x6.jpg.pagespeed.ic.fnUkywwBZz.webp"
                  alt=""
                  data-pagespeed-url-hash={945763387}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x5.jpg.pagespeed.ic.TKBNCQ7ich.webp"
                  alt=""
                  data-pagespeed-url-hash={651263466}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x6.jpg.pagespeed.ic.fnUkywwBZz.webp"
                  alt=""
                  data-pagespeed-url-hash={945763387}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x3.jpg.pagespeed.ic.QmqEbGyIs2.webp"
                  alt=""
                  data-pagespeed-url-hash={62263624}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x4.jpg.pagespeed.ic.KxaCIhR9Oa.webp"
                  alt=""
                  data-pagespeed-url-hash={356763545}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-portfolio-slide">
                <img
                  src="img/x5.jpg.pagespeed.ic.TKBNCQ7ich.webp"
                  alt=""
                  data-pagespeed-url-hash={651263466}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
                <div className="overlay-effect">
                  <h4>Digital Marketing</h4>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet gubergren no sea takimata sanctus est
                  </p>
                </div>
                <div className="view-more-btn">
                  <a href="#">
                    <i className="arrow_right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="single-portfolio-slide">
                        <img
                          src={uu}
                          alt=""
                          data-pagespeed-url-hash={945763387}
                          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                        <div className="overlay-effect">
                          <h4>Digital Marketing</h4>
                          <p>
                            At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet gubergren no sea takimata sanctus est
                          </p>
                        </div>
                        <div className="view-more-btn">
                          <a href="#">
                            <i className="arrow_right" />
                          </a>
                        </div>
                      </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="single-portfolio-slide">
                        <img
                          src={qq}
                          alt=""
                          data-pagespeed-url-hash={651263466}
                          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                        <div className="overlay-effect">
                          <h4>Digital Marketing</h4>
                          <p>
                            At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet gubergren no sea takimata sanctus est
                          </p>
                        </div>
                        <div className="view-more-btn">
                          <a href="#">
                            <i className="arrow_right" />
                          </a>
                        </div>
                      </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="single-portfolio-slide">
                        <img
                          src={ww}
                          alt=""
                          data-pagespeed-url-hash={945763387}
                          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                        <div className="overlay-effect">
                          <h4>Digital Marketing</h4>
                          <p>
                            At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet gubergren no sea takimata sanctus est
                          </p>
                        </div>
                        <div className="view-more-btn">
                          <a href="#">
                            <i className="arrow_right" />
                          </a>
                        </div>
                      </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="container-fluid">
            <div className="row">
              <div className="portfolio-sildes owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-2635px, 0px, 0px)",
                      transition: "all 1.5s ease 0s",
                      width: "5272px",
                    }}
                  >
                    <div
                      className="owl-item cloned"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                    <div
                      className="owl-item cloned"
                      style={{ width: "389.333px", marginRight: "50px" }}
                    >
                      
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <div className="owl-prev">prev</div>
                  <div className="owl-next">next</div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot active">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="clients-feedback-area mt-80 section-padding-80 clearfix ml-80">
            <Carousel className="container">
              <Carousel.Item className="container ">
                <div className="single-testimonial-slide d-flex align-items-center">
                  <div className="testimonial-thumbnail">
                    <img
                      src="img/x23.jpg.pagespeed.ic.MJuXq_03eb.webp"
                      alt=""
                      data-pagespeed-url-hash={979328626}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <div className="testimonial-content">
                    <h4>
                      “Colorlib Ltd’s ranking has gone up so much from the great
                      work that your team has done and our brand get organic
                      sales consistently from your efforts. We are happy that
                      the results of your efforts were lasting and profitable.”
                    </h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                    </div>
                    <div className="author-info">
                      <h5>
                        Darrell Goodman <span>- CEO colorlib</span>
                      </h5>
                    </div>
                    <div className="quote-icon">
                      <img
                        src="img/xquote.png.pagespeed.ic.Qtly-e3dXp.webp"
                        alt=""
                        data-pagespeed-url-hash={516807259}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="container">
                <div className="single-testimonial-slide d-flex align-items-center">
                  <div className="testimonial-thumbnail">
                    <img
                      src="img/x24.jpg.pagespeed.ic.Gj_a09zvee.webp"
                      alt=""
                      data-pagespeed-url-hash={1273828547}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <div className="testimonial-content">
                    <h4>
                      “Colorlib Ltd’s ranking has gone up so much from the great
                      work that your team has done and our brand get organic
                      sales consistently from your efforts. We are happy that
                      the results of your efforts were lasting and profitable.”
                    </h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                    </div>
                    <div className="author-info">
                      <h5>
                        Darrell Goodman <span>- CEO colorlib</span>
                      </h5>
                    </div>
                    <div className="quote-icon">
                      <img
                        src="img/xquote.png.pagespeed.ic.Qtly-e3dXp.webp"
                        alt=""
                        data-pagespeed-url-hash={516807259}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="container">
                <div className="single-testimonial-slide d-flex align-items-center">
                  <div className="testimonial-thumbnail">
                    <img
                      src="img/x7.jpg.pagespeed.ic.1wRD2aRq6f.webp"
                      alt=""
                      data-pagespeed-url-hash={1240263308}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <div className="testimonial-content">
                    <h4>
                      “Colorlib Ltd’s ranking has gone up so much from the great
                      work that your team has done and our brand get organic
                      sales consistently from your efforts. We are happy that
                      the results of your efforts were lasting and profitable.”
                    </h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                    </div>
                    <div className="author-info">
                      <h5>
                        Darrell Goodman <span>- CEO colorlib</span>
                      </h5>
                    </div>
                    <div className="quote-icon">
                      <img
                        src="img/xquote.png.pagespeed.ic.Qtly-e3dXp.webp"
                        alt=""
                        data-pagespeed-url-hash={516807259}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="container">
                <div className="single-testimonial-slide d-flex align-items-center">
                  <div className="testimonial-thumbnail">
                    <img
                      src="img/x23.jpg.pagespeed.ic.MJuXq_03eb.webp"
                      alt=""
                      data-pagespeed-url-hash={979328626}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <div className="testimonial-content">
                    <h4>
                      “Colorlib Ltd’s ranking has gone up so much from the great
                      work that your team has done and our brand get organic
                      sales consistently from your efforts. We are happy that
                      the results of your efforts were lasting and profitable.”
                    </h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                    </div>
                    <div className="author-info">
                      <h5>
                        Darrell Goodman <span>- CEO colorlib</span>
                      </h5>
                    </div>
                    <div className="quote-icon">
                      <img
                        src="img/xquote.png.pagespeed.ic.Qtly-e3dXp.webp"
                        alt=""
                        data-pagespeed-url-hash={516807259}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="container">
                <div className="single-testimonial-slide d-flex align-items-center">
                  <div className="testimonial-thumbnail">
                    <img
                      src="img/x24.jpg.pagespeed.ic.Gj_a09zvee.webp"
                      alt=""
                      data-pagespeed-url-hash={1273828547}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <div className="testimonial-content">
                    <h4>
                      “Colorlib Ltd’s ranking has gone up so much from the great
                      work that your team has done and our brand get organic
                      sales consistently from your efforts. We are happy that
                      the results of your efforts were lasting and profitable.”
                    </h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                    </div>
                    <div className="author-info">
                      <h5>
                        Darrell Goodman <span>- CEO colorlib</span>
                      </h5>
                    </div>
                    <div className="quote-icon">
                      <img
                        src="img/xquote.png.pagespeed.ic.Qtly-e3dXp.webp"
                        alt=""
                        data-pagespeed-url-hash={516807259}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="container">
                <div className="single-testimonial-slide d-flex align-items-center">
                  <div className="testimonial-thumbnail">
                    <img
                      src="img/x7.jpg.pagespeed.ic.1wRD2aRq6f.webp"
                      alt=""
                      data-pagespeed-url-hash={1240263308}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <div className="testimonial-content">
                    <h4>
                      “Colorlib Ltd’s ranking has gone up so much from the great
                      work that your team has done and our brand get organic
                      sales consistently from your efforts. We are happy that
                      the results of your efforts were lasting and profitable.”
                    </h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                    </div>
                    <div className="author-info">
                      <h5>
                        Darrell Goodman <span>- CEO colorlib</span>
                      </h5>
                    </div>
                    <div className="quote-icon">
                      <img
                        src="img/xquote.png.pagespeed.ic.Qtly-e3dXp.webp"
                        alt=""
                        data-pagespeed-url-hash={516807259}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="container">
                <div className="single-testimonial-slide d-flex align-items-center">
                  <div className="testimonial-thumbnail">
                    <img
                      src="img/x23.jpg.pagespeed.ic.MJuXq_03eb.webp"
                      alt=""
                      data-pagespeed-url-hash={979328626}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <div className="testimonial-content">
                    <h4>
                      “Colorlib Ltd’s ranking has gone up so much from the great
                      work that your team has done and our brand get organic
                      sales consistently from your efforts. We are happy that
                      the results of your efforts were lasting and profitable.”
                    </h4>
                    <div className="ratings">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                    </div>
                    <div className="author-info">
                      <h5>
                        Darrell Goodman <span>- CEO colorlib</span>
                      </h5>
                    </div>
                    <div className="quote-icon">
                      <img
                        src="img/xquote.png.pagespeed.ic.Qtly-e3dXp.webp"
                        alt=""
                        data-pagespeed-url-hash={516807259}
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
            {/* <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="testimonial-slides owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transform: "translate3d(-1776px, 0px, 0px)",
                          transition: "all 1.5s ease 0s",
                          width: "6216px",
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "888px" }}
                        >
                          
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "888px" }}
                        >
                          
                        </div>
                        <div
                          className="owl-item active"
                          style={{ width: "888px" }}
                        >
                          
                        </div>
                        
                        
                        <div
                          className="owl-item cloned"
                          style={{ width: "888px" }}
                        >
                          
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "888px" }}
                        >
                          
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <div className="owl-prev">
                        <i className="arrow_carrot-left" />
                      </div>
                      <div className="owl-next">
                        <i className="arrow_carrot-right" />
                      </div>
                    </div>
                    <div className="owl-dots">
                      <div className="owl-dot active">
                        <span />
                      </div>
                      <div className="owl-dot">
                        <span />
                      </div>
                      <div className="owl-dot">
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="container">
            <div className="border-line" />
          </div>
          <div className="portfolio-bg-curve">
            <img
              src="img/xcurve-3.png.pagespeed.ic.Q4rajIG80S.webp"
              alt=""
              data-pagespeed-url-hash={1558712432}
              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            />
          </div>
        </section>
        <section className="uza-blog-area">
          <div className="blog-bg-curve">
            <img
              src="img/xcurve-4.png.pagespeed.ic.66LLNSaQRA.webp"
              alt=""
              data-pagespeed-url-hash={1853212353}
              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            />
          </div>
          <section id="pricing" className="pricing mb-5">
            <div className="container">
              <div className="section-title">
                <h2>Courses</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="box recommended">
                    <h3 className="pt-4 mb-4">Mobile Hardware Repair</h3>
                    <h4>
                      <sup>	</sup>18,000<span>&#8360;</span>
                    </h4>
                    <h6>Duration: 2 Months</h6>
                    {/* <div className="btn-wrap">
                      <a href="#" className="btn-buy">
                        Buy Now
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                  <div className="box recommended">
                    <h3 className="pt-4 mb-4">Mobile Software</h3>
                    <h4>
                      <sup></sup>15,000<span>Rs</span>
                    </h4>
                   <h6>Duration: 1 Month</h6>
                    {/* <div className="btn-wrap">
                      <a href="#" className="btn-buy">
                        Buy Now
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="box recommended">
                    <h3>Complete all mobile glass chnage</h3>
                    <h4>
                      <sup></sup>15,000<span>Rs</span>
                    </h4>
                    <h6>Duration: 1 Month</h6>
                    {/* <div className="btn-wrap">
                      <a href="#" className="btn-buy">
                        Buy Now
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div id="contact" className="container contact mb-5 pt-50">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="row contact-info">
              <div className="col-md-4">
                <div className="contact-address">
                  <i className="fa fa-map-marker-alt"></i>
                  <h3>Address</h3>
                  <address>A108 Adam Street, NY 535022, USA</address>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="bi bi-phone" />
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+155895548855">+1 5589 55488 55</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-email">
                  <i className="bi bi-envelope" />
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="form">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="text"
                      className="form-control"
                      name="father_name"
                      id="email"
                      placeholder="Father Name"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      onChange={(e) => {
                        setFatherName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6 form-group">
                    <input
                      type="number"
                      name="number"
                      className="form-control"
                      id="name"
                      placeholder="Number"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="number"
                      className="form-control"
                      name="home_number"
                      id="email"
                      placeholder="Home Number"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      onChange={(e) => {
                        setHomeNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      id="name"
                      placeholder="Email"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="number"
                      className="form-control"
                      name="cnic_number"
                      id="email"
                      placeholder="CNIC"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      onChange={(e) => {
                        setCNICNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="education"
                      className="form-control"
                      id="name"
                      placeholder="Education"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                      onChange={(e) => {
                        setEducation(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="time"
                      className="form-control"
                      name="time"
                      id="email"
                      placeholder="Select timing"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                    />
                  </div>
                </div>
               
                <div className="row mt-3">
                  <div className="col-md-6 form-group">
                   
                    <Form.Select aria-label="Select Course" onChange={(e)=>{setCourseTitle(e.target.value)}}> 
                      <option>Select Course</option>
                      <option value="glass repair">glass repair</option>
                      <option value="smartphone-repair">smartphone repair</option>
                    </Form.Select>
                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                    defaultValue={""}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message" style={{ display: "block" }}>
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button onClick={onSubmit} type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="uza-cta-area section-padding-0-80">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-content mb-80">
                    <h2>Are you want to grow up?</h2>
                    <h6>Hit the button below or give us a call!</h6>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="cta-content mb-80">
                    <div className="call-now-btn">
                      <a href="#">
                        <span>Call us now:</span> +92 300 2735711
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading text-center">
                  <h2>Our Cources</h2>
                  <p>Choose what you want to learn!</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div
                  className="single-blog-post bg-img mb-80"
                  style={{
                    backgroundImage:
                      "url(img/x8.jpg.pagespeed.ic.77a5xosOoN.webp)",
                  }}
                >
                  <div className="post-content">
                    <span className="post-date">
                      <span>23</span> August, 2018
                    </span>
                    <a href="#" className="post-title">
                      SEO: The Movie By Ignite Visibility
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing esed
                      diam nonumy eirmod tempor invidunt ut
                    </p>
                    <a href="#" className="read-more-btn">
                      Read More <i className="arrow_carrot-2right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div
                  className="single-blog-post bg-img mb-80"
                  style={{
                    backgroundImage:
                      "url(img/x9.jpg.pagespeed.ic.uIwym_l_DS.webp)",
                  }}
                >
                  <div className="post-content">
                    <span className="post-date">
                      <span>13</span> December, 2018
                    </span>
                    <a href="#" className="post-title">
                      What Curling Irons Are The Best Ones
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing esed
                      diam nonumy eirmod tempor invidunt ut
                    </p>
                    <a href="#" className="read-more-btn">
                      Read More <i className="arrow_carrot-2right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div
                  className="single-blog-post bg-img mb-80"
                  style={{
                    backgroundImage:
                      "url(img/x10.jpg.pagespeed.ic.iNNK6d7qq6.webp)",
                  }}
                >
                  <div className="post-content">
                    <span className="post-date">
                      <span>08</span> July, 2018
                    </span>
                    <a href="#" className="post-title">
                      Amazon REV Workshop: Road to Seattle
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing esed
                      diam nonumy eirmod tempor invidunt ut
                    </p>
                    <a href="#" className="read-more-btn">
                      Read More <i className="arrow_carrot-2right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
        {/* <section className="uza-newsletter-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="nl-content mb-80">
                  <h2>Subscribe to our Newsletter</h2>
                  <p>
                    Subscribe our newsletter gor get notification about new
                    updates, etc...
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-5">
                <div className="nl-form mb-80">
                  <form action="#" method="post">
                    <input
                      type="email"
                      name="nl-email"
                      placeholder="Your Email"
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="border-line" />
          </div>
        </section> */}
        <footer className="footer-area section-padding-80-0">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <h4 className="widget-title">Contact Us</h4>
                  <div className="footer-content mb-15">
                    <h3>+92 300 2735711</h3>
                    <p>
                      40 Baria Sreet 13/2 NY City, US <br />{" "}
                      hello.colorlib@gmail.com
                    </p>
                  </div>
                  <p className="mb-0">
                    Mon - Fri: 9:00 - 19:00 <br />
                    Closed on Weekends
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <h4 className="widget-title">Quick Link</h4>
                  <nav>
                    <ul className="our-link">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Forum Registeration</a>
                      </li>
                      <li>
                        <a href="#">Forum Sign In</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <h4 className="widget-title">Resources</h4>
                  <nav>
                    <ul className="our-link">
                      <li>
                        <a href="#">Customer Support</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Media &amp; Press</a>
                      </li>
                      <li>
                        <a href="#">Our Team</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <h4 className="widget-title">About Us</h4>
                  <p>
                    Integer vehicula mauris libero, at molestie eros imperdiet
                    sit amet.
                  </p>
                  <div className="copywrite-text mb-30">
                    <p>
                      © Copyright 2021 <a href="#">AL-ABID mobile repairing institute</a>.
                    </p>
                  </div>
                  <div className="footer-social-info">
                    <a
                      href="#"
                      className="facebook"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="#"
                      className="twitter"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      href="#"
                      className="pinterest"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="Pinterest"
                    >
                      <i className="fa fa-pinterest" />
                    </a>
                    <a
                      href="#"
                      className="instagram"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="Instagram"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                    <a
                      href="#"
                      className="youtube"
                      data-toggle="tooltip"
                      data-placement="top"
                      title
                      data-original-title="YouTube"
                    >
                      <i className="fa fa-youtube-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row" style={{ marginBottom: "30px" }}>
              Copyright ©2021 All rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </div> */}
          </div>
        </footer>
        <a
          id="scrollUp"
          href="#top"
          style={{ position: "fixed", zIndex: 2147483647, display: "none" }}
        >
          <i className="fa fa-angle-up"> </i>
        </a>
      </div>
    </>
  );
};

export default SinglePageComponent;
