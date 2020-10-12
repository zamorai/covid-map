import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Loader from './components/layout/Loader';

const Header = lazy(() => import ('./components/layout/Header'));
const Intro = lazy(() => import ('./components/layout/Intro'));
const Sidebar = lazy(() => import ('./components/Sidebar'));
const CovidMap = lazy(() => import ('./components/CovidMap'));

function App(props) {

  const renderItems = () => {
    if (props.auth.signedIn) {
      return (
        <Suspense fallback={<Loader/>} >
          <div className="app-container">
            <div className='header-container'>
              <Header/>
            </div>
            <div className="sidebar-container">
              <Sidebar />
            </div>
            <div className="map-container">
            <CovidMap />
            </div>
          </div>
        </Suspense>
      )
    } else {
      return (
        <Suspense fallback={<Loader/>} >
          <Intro />
        </Suspense>
      )
    }
  }

  return (
    <React.Fragment>
      {renderItems()}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);

