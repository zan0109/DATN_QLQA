function Header() {
    return (
      <div>
              
      <header className="header-desktop2 bg-dark">
      <div className="section__content section__content--p30">
          <div className="container-fluid">
              <div className="header-wrap2">
                  <div className="logo d-block d-lg-none">
                      <a href="#">
                          <img src="images/icon/logo-white.png" alt="CoolAdmin" />
                      </a>
                  </div>
                  <div className="header-button2">
                      <div className="header-button-item js-item-menu">
                          <i className="zmdi zmdi-search"></i>
                          <div className="search-dropdown js-dropdown">
                              <form action="">
                                  <input className="au-input au-input--full au-input--h65" type="text"
                                      placeholder="Search for datas &amp; reports..." />
                                  <span className="search-dropdown__icon">
                                      <i className="zmdi zmdi-search"></i>
                                  </span>
                              </form>
                          </div>
                      </div>
                      <div className="header-button-item has-noti js-item-menu">
                          <i classNamess="zmdi zmdi-notifications"></i>
                          <div className="notifi-dropdown js-dropdown">
                              <div className="notifi__title">
                                  <p>You have 3 Notifications</p>
                              </div>
                              <div className="notifi__item">
                                  <div className="bg-c1 img-cir img-40">
                                      <i className="zmdi zmdi-email-open"></i>
                                  </div>
                                  <div className="content">
                                      <p>You got a email notification</p>
                                      <span className="date">April 12, 2018 06:50</span>
                                  </div>
                              </div>
                              <div className="notifi__item">
                                  <div className="bg-c2 img-cir img-40">
                                      <i className="zmdi zmdi-account-box"></i>
                                  </div>
                                  <div className="content">
                                      <p>Your account has been blocked</p>
                                      <span className="date">April 12, 2018 06:50</span>
                                  </div>
                              </div>
                              <div className="notifi__item">
                                  <div className="bg-c3 img-cir img-40">
                                      <i className="zmdi zmdi-file-text"></i>
                                  </div>
                                  <div className="content">
                                      <p>You got a new file</p>
                                      <span className="date">April 12, 2018 06:50</span>
                                  </div>
                              </div>
                              <div className="notifi__footer">
                                  <a href="#">All notifications</a>
                              </div>
                          </div>
                      </div>
                      <div className="header-button-item mr-0 js-sidebar-btn">
                          <i className="zmdi zmdi-menu"></i>
                      </div>
                      <div className="setting-menu js-right-sidebar d-none d-lg-block">
                          <div className="account-dropdown__body">
                              <div className="account-dropdown__item">
                                  <a href="#">
                                      <i className="zmdi zmdi-account"></i>Account</a>
                              </div>
                              <div className="account-dropdown__item">
                                  <a href="#">
                                      <i className="zmdi zmdi-settings"></i>Setting</a>
                              </div>
                              <div className="account-dropdown__item">
                                  <a href="#">
                                      <i className="zmdi zmdi-money-box"></i>Billing</a>
                              </div>
                          </div>
                          <div className="account-dropdown__body">
                              <div className="account-dropdown__item">
                                  <a href="#">
                                      <i className="zmdi zmdi-globe"></i>Language</a>
                              </div>
                              <div className="account-dropdown__item">
                                  <a href="#">
                                      <i className="zmdi zmdi-pin"></i>Location</a>
                              </div>
                              <div className="account-dropdown__item">
                                  <a href="#">
                                      <i className="zmdi zmdi-email"></i>Email</a>
                              </div>
                              <div className="account-dropdown__item">
                                  <a href="#">
                                      <i className="zmdi zmdi-notifications"></i>Notifications</a>
                              </div>
                          </div>














                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>
      </div>
    );
  }
  
  export default  Header;