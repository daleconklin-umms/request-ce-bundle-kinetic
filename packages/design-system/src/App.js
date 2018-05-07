import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { GettingStartedPage } from './GettingStartedPage';
import { ButtonsPage } from './ButtonsPage';
import { LayoutsPage } from './LayoutsPage';
import { AlertsPage } from './AlertsPage';
import { AvatarsPage } from './AvatarsPage';
import { BreadcrumbsPage } from './BreadcrumbsPage';
import { CardsPage } from './CardsPage';
import { FormsPage } from './FormsPage';
import { ModalsPage } from './ModalsPage';
import { MarkupStylesPage } from './MarkupStylesPage';
import { NavigationsPage } from './NavigationsPage';
import { PopoversPage } from './PopoversPage';
import { TypographyPage } from './TypographyPage';
import { Sidebar } from './Sidebar';

import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/css/font-awesome.css';
import 'typeface-open-sans/index.css';
import 'common/src/assets/styles/master.scss';
import 'kinops/src/assets/styles/master.scss';

class App extends Component {
  render() {
    return (
      <main className="package-layout package-layout--design-system">
        <div className="page-container page-container--panels">
          <Sidebar />
          <div className="page-panel page-panel--two-thirds">
            <Route path="/alerts" exact component={AlertsPage} />
            <Route path="/avatars" exact component={AvatarsPage} />
            <Route path="/breadcrumbs" exact component={BreadcrumbsPage} />
            <Route path="/cards" exact component={CardsPage} />
            <Route path="/forms" exact component={FormsPage} />
            <Route path="/layouts" exact component={LayoutsPage} />
            <Route path="/modals" exact component={ModalsPage} />
            <Route path="/markupstyles" exact component={MarkupStylesPage} />
            <Route path="/navigations" exact component={NavigationsPage} />
            <Route path="/popovers" exact component={PopoversPage} />
            <Route path="/typography" exact component={TypographyPage} />
            <Route path="/" exact component={GettingStartedPage} />
            <Route path="/buttons" exact component={ButtonsPage} />
            <Route path="/layout" exact component={LayoutsPage} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
