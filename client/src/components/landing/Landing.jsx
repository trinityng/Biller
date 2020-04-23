import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page3';
import Page3 from './Page2';
import Footer from './Footer';

import '../static/style.js';

class Landing extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Header key="header" />
        <Banner key="banner" />
        <Page1 key="page1" />
        <Page3 key="page3" />
        <Page2 key="page2" />  
        <Footer key="footer" />
        <DocumentTitle title="Biller" />
      </div>
    );
  }
}
export default Landing;
