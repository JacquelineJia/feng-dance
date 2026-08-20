import React from 'react';
import { Helmet } from "react-helmet";
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import HeaderImage from './components/HeaderImage';
// import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Programs from './components/Programs';
import Register from './components/Register';
import Team from './components/Team';
//import logo from './logo.svg';
import messages from './translations/messages';
import './App.scss';

let locale = (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US';

if (locale.startsWith('zh')) locale = 'zh';
else locale = 'en';

class App extends React.Component {
  state = {
    i18nConfig: {
      key: locale,
      locale: locale,
      messages: messages[locale],
    },
    linkIndex: 1,
  }

  onChangeLanguage = lang => {
    const { i18nConfig } = this.state;
    let language = lang;
    if (!language) {
      if (i18nConfig.locale === 'en') {
        language = 'zh';
      }
      else language = 'en';
    }
    i18nConfig.key = language;
    i18nConfig.locale = language;
    i18nConfig.messages = messages[language];
    this.setState({ i18nConfig });
  }

  handleClick = linkIndex => {
    this.setState({ linkIndex });
  };

  render() {
    const { i18nConfig } = this.state;
    return (
      <IntlProvider {...i18nConfig}>
        <div className="app">
          <Helmet>
            <title>Feng Dance School</title>
            <meta name="keywords" content="ottawa,feng,dance,school,studio,children,class,classes,ballet,jazz,funk,hip,hop,flexibility,training,technique,chinese,traditional,classical,program"/>
            <meta name="description" content="Feng Dance School has more than 30 years of professional dance performance and teaching history in Canada. At present, Feng Dance School offers ballet, jazz, jazz funk, Chinese dance, hip-hop and flexibility training classes, taught by professional dance teachers."/>
            <meta name="subject" content="Ottawa Feng Dance School"/>
            <meta name="copyright"content="Ottawa Feng Dance School"/>
            <meta name="language" content="EN"/>
          </Helmet>
          <Router>
            <NavigationBar onChangeLanguage={this.onChangeLanguage} />
            <div className="heroWrapper">
              {/* <Route exact path="/" component={Banner} /> */}
              <Banner />
              <HeaderImage />
            </div>
            <div className="appPaddingWrapper pageContent">
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/programs" component={Programs} />
                <Route path="/team" component={Team} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/register" component={Register} />
                <Redirect to="/" />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
