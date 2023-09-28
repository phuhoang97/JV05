import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div class='skin-blue'>
        <div className='wrapper'>
          <header className='main-header'>
            {/* Logo */}
            <a href='#' className='logo'>
              <b>Admin</b>LTE
            </a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className='navbar navbar-static-top' role='navigation'>
              {/* Sidebar toggle button*/}
              <div />
              <div className='navbar-custom-menu'>
                <ul className='nav navbar-nav'>
                  {/* User Account: style can be found in dropdown.less */}
                  <li className='dropdown user user-menu'>
                    <a
                      href='#'
                      className='dropdown-toggle'
                      data-toggle='dropdown'
                    >
                      <img
                        src='dist/img/user2-160x160.jpg'
                        className='user-image'
                        alt='User Image'
                      />
                      <span className='hidden-xs'>Alexander Pierce</span>
                    </a>
                    <ul className='dropdown-menu'>
                      {/* User image */}
                      <li className='user-header'>
                        <img
                          src='dist/img/user2-160x160.jpg'
                          className='img-circle'
                          alt='User Image'
                        />
                        <p>
                          Alexander Pierce - Web Developer
                          <small>Member since Nov. 2012</small>
                        </p>
                      </li>
                      {/* Menu Body */}
                      <li className='user-body'>
                        <div className='col-xs-4 text-center'>
                          <a href='#'>Followers</a>
                        </div>
                        <div className='col-xs-4 text-center'>
                          <a href='#'>Sales</a>
                        </div>
                        <div className='col-xs-4 text-center'>
                          <a href='#'>Friends</a>
                        </div>
                      </li>
                      {/* Menu Footer*/}
                      <li className='user-footer'>
                        <div className='pull-left'>
                          <a href='#' className='btn btn-default btn-flat'>
                            Profile
                          </a>
                        </div>
                        <div className='pull-right'>
                          <a href='#' className='btn btn-default btn-flat'>
                            Sign out
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {/* Left side column. contains the logo and sidebar */}
          <aside className='main-sidebar'>
            {/* sidebar: style can be found in sidebar.less */}
            <section className='sidebar'>
              {/* Sidebar user panel */}
              <div className='user-panel'>
                <div className='pull-left image'>
                  <img
                    src='dist/img/user2-160x160.jpg'
                    className='img-circle'
                    alt='User Image'
                  />
                </div>
                <div className='pull-left info'>
                  <p>Alexander Pierce</p>
                  <a href='#'>
                    <i className='fa fa-circle text-success' /> Online
                  </a>
                </div>
              </div>
              {/* search form */}
              <form action='#' method='get' className='sidebar-form'>
                <div className='input-group'>
                  <input
                    type='text'
                    name='q'
                    className='form-control'
                    placeholder='Search...'
                  />
                  <span className='input-group-btn'>
                    <button
                      type='submit'
                      name='search'
                      id='search-btn'
                      className='btn btn-flat'
                    >
                      <i className='fa fa-search' />
                    </button>
                  </span>
                </div>
              </form>
              {/* /.search form */}
              {/* sidebar menu: : style can be found in sidebar.less */}
              <ul className='sidebar-menu'>
                <li className='active treeview'>
                  <a href='#'>
                    <i className='fa fa-dashboard' /> <span>Dashboard</span>
                  </a>
                </li>
                <li className='treeview'>
                  <Link to={"/users"}>
                    <i className='fa fa-files-o' />
                    <span>Layout Options</span>
                  </Link>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-th' /> <span>Widgets</span>
                  </a>
                </li>
                <li className='treeview'>
                  <a href='#'>
                    <i className='fa fa-folder' /> <span>Examples</span>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-book' /> Documentation
                  </a>
                </li>
              </ul>
            </section>
            {/* /.sidebar */}
          </aside>
          {/* Right side column. Contains the navbar and content of the page */}
          {/* <div className='content-wrapper'>
            <section className='content'>
              <div className='row'>
                <div className='col-lg-3 col-xs-6'>
                  <div className='small-box bg-aqua'>
                    <div className='inner'>
                      <h3>150</h3>
                      <p>New Orders</p>
                    </div>
                    <div className='icon'>
                      <i className='ion ion-bag' />
                    </div>
                    <a href='#' className='small-box-footer'>
                      More info <i className='fa fa-arrow-circle-right' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-3 col-xs-6'>
                  <div className='small-box bg-green'>
                    <div className='inner'>
                      <h3>
                        53<sup style={{ fontSize: 20 }}>%</sup>
                      </h3>
                      <p>Bounce Rate</p>
                    </div>
                    <div className='icon'>
                      <i className='ion ion-stats-bars' />
                    </div>
                    <a href='#' className='small-box-footer'>
                      More info <i className='fa fa-arrow-circle-right' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-3 col-xs-6'>
                  <div className='small-box bg-yellow'>
                    <div className='inner'>
                      <h3>44</h3>
                      <p>User Registrations</p>
                    </div>
                    <div className='icon'>
                      <i className='ion ion-person-add' />
                    </div>
                    <a href='#' className='small-box-footer'>
                      More info <i className='fa fa-arrow-circle-right' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-3 col-xs-6'>
                  <div className='small-box bg-red'>
                    <div className='inner'>
                      <h3>65</h3>
                      <p>Unique Visitors</p>
                    </div>
                    <div className='icon'>
                      <i className='ion ion-pie-graph' />
                    </div>
                    <a href='#' className='small-box-footer'>
                      More info <i className='fa fa-arrow-circle-right' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='row' />
            </section>
          </div> */}
        </div>
        {/* ./wrapper */}
      </div>
    </>
  );
}

export default Sidebar;
