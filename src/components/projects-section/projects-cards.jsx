import React from "react";
import "./projects.css"; // import the css

export default function ProjectsCard() {
  return (
    <div
      className="hidden-ball smooth-scroll rounded-borders hero-below-caption"
      data-primary-color="#ffba00"
    >
      <main>
        {/* <!-- Preloader --> */}
        <div class="preloader-wrap" data-centerLine="Loading">
          <div id="text-container">
            <div class="word">Brewing some cool things</div>
            <div class="word">Hang tight, magic is happening</div>
            <div class="word">Loading your adventure</div>
          </div>

          <div class="loadbar"></div>
          <div class="percentage-wrapper">
            <div class="percentage" id="precent"></div>
          </div>
          <div class="percentage-intro">Please wait, content is loading</div>
        </div>
        {/* <!--/Preloader -->      */}

        <div class="cd-index cd-main-content">
          {/* <!-- Page Content --> */}
          <div
            id="clapat-page-content"
            class="dark-content"
            data-bgcolor="#ebebeb"
          >
            {/* <!-- Header --> */}
            <header
              class="clapat-header classic-menu invert-header"
              data-menucolor="#0c0c0c"
            >
              {/* <!-- Graidient --> */}
              <div class="header-gradient"></div>
              {/* <!--/Graidient --> */}

              <div id="header-container">
                {/* <!-- Logo --> */}
                <div id="clapat-logo" class="hide-ball">
                  <a
                    class="ajax-link"
                    data-type="page-transition"
                    href="index.html"
                  >
                    <img
                      class="black-logo"
                      src="images/logo.png"
                      alt="ClaPat Logo"
                    />
                    <img
                      class="white-logo"
                      src="images/logo-white.png"
                      alt="ClaPat Logo"
                    />
                  </a>
                </div>
                {/* <!--/Logo --> */}

                {/* <!-- Navigation --> */}
                <nav class="clapat-nav-wrapper">
                  <div class="nav-height">
                    <ul data-breakpoint="1025" class="flexnav">
                      <li class="menu-timeline link">
                        <a
                          class="ajax-link active"
                          data-type="page-transition"
                          href="index.html"
                        >
                          <div class="before-span">
                            <span data-hover="Index">Index</span>
                          </div>
                        </a>
                      </li>
                      <li class="menu-timeline link">
                        <a
                          class="ajax-link"
                          data-type="page-transition"
                          href="#"
                        >
                          <div class="before-span">
                            <span data-hover="Projects">Projects</span>
                          </div>
                        </a>
                        <ul>
                          <li>
                            <a
                              class="ajax-link"
                              href="index-highlights.html"
                              data-type="page-transition"
                            >
                              Highlights
                            </a>
                          </li>
                          <li>
                            <a
                              class="ajax-link"
                              href="index-portfolio.html"
                              data-type="page-transition"
                            >
                              Portfolio
                            </a>
                          </li>
                          <li>
                            <a
                              class="ajax-link"
                              href="index-playground.html"
                              data-type="page-transition"
                            >
                              Playground
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-timeline link">
                        <a
                          class="ajax-link"
                          data-type="page-transition"
                          href="about.html"
                        >
                          <div class="before-span">
                            <span data-hover="Agency">Agency</span>
                          </div>
                        </a>
                      </li>
                      <li class="menu-timeline link">
                        <a
                          class="ajax-link"
                          data-type="page-transition"
                          href="resources.html"
                        >
                          <div class="before-span">
                            <span data-hover="Resources">Resources</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* <!--/Navigation --> */}

                {/* <!-- Header Button --> */}
                <a
                  class="header-button ajax-link"
                  data-type="page-transition"
                  href="contact.html"
                >
                  <div class="button-icon-link right">
                    <div class="icon-wrap-scale">
                      <div class="icon-wrap parallax-wrap">
                        <div class="button-icon parallax-element">
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div class="button-text sticky right">
                      <span data-hover="Let's Talk">Let's Talk</span>
                    </div>
                  </div>
                </a>
                {/* <!--/Header Button --> */}

                {/* <!-- Menu Burger --> */}
                <div class="button-wrap right menu burger-lines">
                  <div class="icon-wrap parallax-wrap">
                    <div class="button-icon parallax-element">
                      <div id="burger-wrapper">
                        <div id="menu-burger">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="button-text sticky right">
                    <span data-hover="Menu">Menu</span>
                  </div>
                </div>
                {/* <!--/Menu Burger --> */}
              </div>
            </header>
            {/* <!--/Header --> */}

            {/* <!-- Content Scroll --> */}
            <div id="content-scroll">
              {/* <!-- Main --> */}
              <div id="main">
                {/* <!-- Hero Section --> */}
                <div id="hero">
                  <div id="hero-styles">
                    <div
                      id="hero-caption"
                      class="content-full-width parallax-scroll-caption text-align-center hero-full-caption landing-page-title"
                    >
                      <div class="inner">
                        <h1 class="hero-title caption-timeline">
                          <span>Nanotech</span>
                        </h1>

                        <div class="hero-subtitle caption-timeline onload-shuffle">
                          <span>Bringing brands to life</span>{" "}
                          <span>through creative web solutions</span>
                        </div>
                      </div>
                    </div>
                    <div id="hero-footer" class="has-border">
                      <div class="hero-footer-left">
                        <div class="button-wrap left scroll-down">
                          <div class="icon-wrap parallax-wrap">
                            <div class="button-icon parallax-element">
                              <i class="fa-solid fa-arrow-down"></i>
                            </div>
                          </div>
                          <div class="button-text sticky left">
                            <span data-hover="Scroll to Explore">
                              Scroll to Explore
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="hero-footer-right">
                        <span>Featured Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/Hero Section --> */}

                {/* <!-- Main Content --> */}
                <div id="main-content">
                  {/* <!-- Main Page Content --> */}
                  <div id="main-page-content">
                    {/* <!-- Fit Thumb Screen Effects -->                                                           */}
                    <div id="itemsWrapperLinks">
                      <div id="itemsWrapper" class="webgl-fitthumbs fx-one ">
                        {/* <!-- ClaPat Portfolio --> */}
                        <div class="showcase-portfolio expand-grid filp-grid">
                          <div class="clapat-item not-expanded">
                            <div
                              class="slide-inner trigger-item"
                              data-centerLine="OPEN"
                            >
                              <div class="img-mask pixels-cover">
                                <a
                                  class="slide-link"
                                  data-type="page-transition"
                                  href="project01.html"
                                ></a>
                                <div class="section-image trigger-item-link">
                                  <img
                                    src="/images/01hero.jpg"
                                    class="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="/images/01hero.jpg"
                                  class="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                              <div class="slide-caption trigger-item-link-secondary">
                                <div class="slide-title">
                                  <span>Bob's Specials</span>
                                </div>
                                <div class="slide-date">
                                  <span>2024</span>
                                </div>
                                <div class="slide-cat">
                                  <span>Branding</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="clapat-item expanded">
                            <div
                              class="slide-inner trigger-item"
                              data-centerLine="OPEN"
                            >
                              <div class="img-mask pixels-cover">
                                <a
                                  class="slide-link"
                                  data-type="page-transition"
                                  href="project02.html"
                                ></a>
                                <div class="section-image  trigger-item-link">
                                  <img
                                    src="/images/02hero.jpg"
                                    class="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="/images/02hero.jpg"
                                  class="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                              <div class="slide-caption trigger-item-link-secondary">
                                <div class="slide-title">
                                  <span>This is Willo</span>
                                </div>
                                <div class="slide-date">
                                  <span>2024</span>
                                </div>
                                <div class="slide-cat">
                                  <span>Web Design</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="clapat-item not-expanded">
                            <div
                              class="slide-inner trigger-item"
                              data-centerLine="OPEN"
                            >
                              <div class="img-mask pixels-cover">
                                <a
                                  class="slide-link"
                                  data-type="page-transition"
                                  href="project03.html"
                                ></a>
                                <div class="section-image trigger-item-link">
                                  <img
                                    src="/images/03hero.jpg"
                                    class="item-image grid__item-img"
                                    alt=""
                                  />
                                </div>
                                <img
                                  src="/images/03hero.jpg"
                                  class="grid__item-img grid__item-img--large"
                                  alt=""
                                />
                              </div>
                              <div class="slide-caption trigger-item-link-secondary">
                                <div class="slide-title">
                                  <span>The Infin</span>
                                </div>
                                <div class="slide-date">
                                  <span>2024</span>
                                </div>
                                <div class="slide-cat">
                                  <span>Photography</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ClaPat Portfolio -->  */}

                        {/* <!-- Row --> */}
                        <div
                          class="content-row full row_padding_top row_padding_left row_padding_right light-section fadeout-element"
                          data-bgcolor="transparent"
                        >
                          <h1 class="text-align-center">
                            We help businesses{" "}
                            <span
                              class="has-scale-image hide-ball"
                              data-img="images/client-01.png"
                              data-bgcolor="#000"
                            ></span>{" "}
                            to innovate and{" "}
                            <span
                              class="has-scale-image hide-ball"
                              data-img="images/client-02.png"
                              data-bgcolor="#000"
                            ></span>{" "}
                            remain highly relevant to their customers by
                            developing{" "}
                            <span
                              class="has-scale-image hide-ball"
                              data-img="images/client-03.png"
                              data-bgcolor="#000"
                            ></span>{" "}
                            edge digital products
                          </h1>
                        </div>
                        {/* <!--/Row --> */}

                        {/* <!-- Row --> */}
                        <div
                          class="content-row light-section row_padding_bottom "
                          data-bgcolor="#ebebeb"
                        >
                          <hr />
                          <hr />

                          <div class="one_half"></div>

                          <div class="one_half last">
                            <p class="bigger has-shuffle">The Challenge</p>
                            <p class="has-opacity" data-delay="0">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration
                            </p>

                            <div class="button-wrap right button-link has-animation">
                              <div class="icon-wrap parallax-wrap">
                                <div class="button-icon parallax-element">
                                  <i class="fa-solid fa-arrow-right"></i>
                                </div>
                              </div>
                              <a
                                class="ajax-link"
                                data-type="page-transition"
                                href="about.html"
                              >
                                <div class="button-text sticky right">
                                  <span data-hover="About Us">About Us</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!--/Row --> */}

                        {/* <!-- Row --> */}
                        <div
                          class="content-row full text-align-center dark-section"
                          data-bgcolor="#ebebeb"
                        >
                          <div class="projects-list-wrapper invert-header-color">
                            <ul class="projects-list-captions">
                              <li data-centerLine="OPEN">
                                <a
                                  class="list-link"
                                  data-type="page-transition"
                                  href="project04.html"
                                ></a>
                                <span>The Invincibles</span>
                              </li>
                              <li data-centerLine="OPEN">
                                <a
                                  class="list-link"
                                  data-type="page-transition"
                                  href="project05.html"
                                ></a>
                                <span>Provenance</span>
                              </li>
                              <li data-centerLine="OPEN">
                                <a
                                  class="list-link"
                                  data-type="page-transition"
                                  href="project06.html"
                                ></a>
                                <span>Unbreak</span>
                              </li>
                              <li data-centerLine="OPEN">
                                <a
                                  class="list-link"
                                  data-type="page-transition"
                                  href="project07.html"
                                ></a>
                                <span>Kouch Dominion</span>
                              </li>
                              <li data-centerLine="OPEN">
                                <a
                                  class="list-link"
                                  data-type="page-transition"
                                  href="project08.html"
                                ></a>
                                <span>VX Lab</span>
                              </li>
                              <li data-centerLine="OPEN">
                                <a
                                  class="list-link"
                                  data-type="page-transition"
                                  href="project09.html"
                                ></a>
                                <span>Mimco Blue</span>
                              </li>
                            </ul>

                            <ul class="projects-list-images">
                              <li class="trigger-item">
                                <div class="img-mask">
                                  <div class="section-image trigger-item-link">
                                    <img
                                      src="images/04hero.jpg"
                                      class="item-image grid__item-img"
                                      alt=""
                                    />
                                    <div class="hero-video-wrapper">
                                      <video loop muted class="bgvid">
                                        <source
                                          src="images/04hero.mp4"
                                          type="video/mp4"
                                        />
                                      </video>
                                    </div>
                                  </div>
                                  <img
                                    src="images/04hero.jpg"
                                    class="grid__item-img grid__item-img--large"
                                    alt=""
                                  />
                                </div>
                              </li>
                              <li class="trigger-item">
                                <div class="img-mask">
                                  <div class="section-image trigger-item-link">
                                    <img
                                      src="images/05hero.jpg"
                                      class="item-image grid__item-img"
                                      alt=""
                                    />
                                  </div>
                                  <img
                                    src="images/05hero.jpg"
                                    class="grid__item-img grid__item-img--large"
                                    alt=""
                                  />
                                </div>
                              </li>
                              <li class="trigger-item">
                                <div class="img-mask">
                                  <div class="section-image trigger-item-link">
                                    <img
                                      src="images/06hero.jpg"
                                      class="item-image grid__item-img"
                                      alt=""
                                    />
                                  </div>
                                  <img
                                    src="images/06hero.jpg"
                                    class="grid__item-img grid__item-img--large"
                                    alt=""
                                  />
                                </div>
                              </li>
                              <li class="trigger-item">
                                <div class="img-mask">
                                  <div class="section-image trigger-item-link">
                                    <img
                                      src="images/07hero.jpg"
                                      class="item-image grid__item-img"
                                      alt=""
                                    />
                                  </div>
                                  <img
                                    src="images/07hero.jpg"
                                    class="grid__item-img grid__item-img--large"
                                    alt=""
                                  />
                                </div>
                              </li>
                              <li class="trigger-item">
                                <div class="img-mask">
                                  <div class="section-image trigger-item-link">
                                    <img
                                      src="images/08hero.jpg"
                                      class="item-image grid__item-img"
                                      alt=""
                                    />
                                  </div>
                                  <img
                                    src="images/08hero.jpg"
                                    class="grid__item-img grid__item-img--large"
                                    alt=""
                                  />
                                </div>
                              </li>
                              <li class="trigger-item">
                                <div class="img-mask">
                                  <div class="section-image trigger-item-link">
                                    <img
                                      src="images/09hero.jpg"
                                      class="item-image grid__item-img"
                                      alt=""
                                    />
                                  </div>
                                  <img
                                    src="images/09hero.jpg"
                                    class="grid__item-img grid__item-img--large"
                                    alt=""
                                  />
                                </div>
                              </li>
                              <li class="pixels-cover"></li>
                            </ul>
                          </div>
                        </div>
                        {/* <!--/Row --> */}

                        {/* <!-- Row --> */}
                        <div
                          class="content-row small text-align-center light-section"
                          data-bgcolor="#ebebeb"
                        >
                          <hr />
                          <hr />
                          <hr />

                          <p class="bigger has-shuffle no-margins">
                            Continue Exploring Our Work
                          </p>

                          <hr />

                          <div
                            class="button-box has-animation"
                            data-delay="100"
                          >
                            <div class="clapat-button-wrap parallax-wrap hide-ball">
                              <div class="clapat-button parallax-element">
                                <div class="button-border rounded parallax-element-second">
                                  <a
                                    class="ajax-link"
                                    data-type="page-transition"
                                    href="index-portfolio.html"
                                  >
                                    <span data-hover="All Projects">
                                      All Projects
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--/Row --> */}
                      </div>
                    </div>
                    {/* <!-- Fit Thumb Screen Effects --> */}
                  </div>
                  {/* <!--/Main Page Content --> */}

                  {/* <!-- Page Navigation -->  */}
                  <div id="page-nav" class="move-nav-onload">
                    <div class="page-nav-wrap">
                      <div class="page-nav-caption nav-full-caption content-full-width text-align-center">
                        <div class="inner">
                          <a
                            class="next-ajax-link-page"
                            data-type="page-transition"
                            data-centerline="GO TO"
                            href="about.html"
                          >
                            <div class="next-hero-title caption-timeline">
                              <span>Creative</span> <span>Design Agency</span>
                            </div>
                          </a>
                          <div class="next-hero-subtitle caption-timeline">
                            <span>We are passionate about</span>{" "}
                            <span>creating memorable experience</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/Page Navigation --> */}
                </div>
                {/* <!--/Main Content -->  */}
              </div>
              {/* <!--/Main --> */}

              {/* <!-- Footer --> */}
              <footer class="clapat-footer hidden">
                <div id="footer-container">
                  <div id="backtotop" class="button-wrap left">
                    <div class="icon-wrap parallax-wrap">
                      <div class="button-icon parallax-element">
                        <i class="fa-solid fa-angle-up"></i>
                      </div>
                    </div>
                    <div class="button-text sticky left">
                      <span data-hover="Back Top">Back Top</span>
                    </div>
                  </div>

                  <div class="footer-middle">
                    <div class="copyright">
                      2024 ©{" "}
                      <a
                        class="link"
                        target="_blank"
                        href="https://www.clapat.com/"
                      >
                        ClaPat
                      </a>
                      . All rights reserved.
                    </div>
                  </div>

                  <div class="socials-wrap">
                    <div class="socials-icon">
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                    <div class="socials-text">Follow Us</div>
                    <ul class="socials">
                      <li>
                        <span class="parallax-wrap">
                          <a
                            class="parallax-element"
                            href="https://www.dribbble.com/clapat"
                            target="_blank"
                          >
                            Db
                          </a>
                        </span>
                      </li>
                      <li>
                        <span class="parallax-wrap">
                          <a
                            class="parallax-element"
                            href="https://www.twitter.com/clapatdesign"
                            target="_blank"
                          >
                            Tx
                          </a>
                        </span>
                      </li>
                      <li>
                        <span class="parallax-wrap">
                          <a
                            class="parallax-element"
                            href="https://www.behance.com/clapat"
                            target="_blank"
                          >
                            Be
                          </a>
                        </span>
                      </li>
                      <li>
                        <span class="parallax-wrap">
                          <a
                            class="parallax-element"
                            href="https://www.facebook.com/clapat.ro"
                            target="_blank"
                          >
                            Fb
                          </a>
                        </span>
                      </li>
                      <li>
                        <span class="parallax-wrap">
                          <a
                            class="parallax-element"
                            href="https://www.instagram.com/clapat.themes/"
                          >
                            In
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </footer>
              {/* <!--/Footer --> */}
            </div>
            {/* <!--/Content Scroll --> */}

            <div id="app"></div>
          </div>
          {/* <!--/Page Content --> */}
        </div>
      </main>

      <div class="cd-cover-layer"></div>
      <div id="magic-cursor">
        <div id="ball">
          <div id="ball-drag-x"></div>
          <div id="ball-drag-y"></div>
          <div id="ball-loader"></div>
        </div>
      </div>
      <div id="clone-image">
        <div class="hero-translate"></div>
      </div>
      <div id="rotate-device"></div>
    </div>
  );
}
