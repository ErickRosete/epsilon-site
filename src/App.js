import React, { Component } from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";
import HomePage from "./pages/Home/Home"
import RentPage from "./pages/Rent/Rent"
import ContactPage from "./pages/Contact/Contact"
import RentCategoryPage from "./pages/Rent/Category/Category"
import AboutPage from "./pages/About/About"
import QuotationPage from "./pages/Quotation/Quotation"

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChevronLeft,
  faMapMarkerAlt,
  faSearch,
  faChevronCircleLeft,
  faChevronCircleRight,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "./App.css";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URL}/graphql`
});

class App extends Component {
  render() {
    // console.log(process.env.REACT_APP_SERVER_URL);
    library.add([
      faFacebook,
      faLinkedin,
      faSearch,
      faHome,
      faWindowClose,
      faChevronLeft,
      faMapMarkerAlt,
      faChevronCircleLeft,
      faChevronCircleRight,
      faWhatsapp
    ]);

    return (
      <BrowserRouter>
        <ScrollToTop>
          <ApolloProvider client={client}>
            <Switch>
              <Route path="/inicio" component={HomePage} />
              <Route path="/renta/:id" component={RentCategoryPage} />
              <Route path="/contacto" component={ContactPage} />
              <Route path="/renta" component={RentPage} />
              <Route path="/nosotros" component={AboutPage} />
              <Route path="/cotizacion" component={QuotationPage} />
              <Redirect to="/inicio" />
            </Switch>
          </ApolloProvider>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
