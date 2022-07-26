import React from 'react';
import { Helmet } from "react-helmet";
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import HeaderImage from './components/HeaderImage';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Programs from './components/Programs';
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
    }
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
            <HeaderImage />
            <div className="appPaddingWrapper pageContent">
              <Switch>
                <Route exact path="/" component={About} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/programs" component={Programs} />
                <Route path="/team" component={Team} />
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
