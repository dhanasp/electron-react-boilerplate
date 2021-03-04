import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import * as widgetConfig from './data/widgetConfig.json';

const getNotices = () => {
  return widgetConfig.widget_ui_policy.notices;
};

const Hello = () => {
  return (
    <div className="smart-assist">
      <div className="header">
        <div className="title">
          <h1>Smart Assist</h1>
        </div>
        <div className="voice-to-text">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img className="meghaphone-icon" src="icons/megaphone.png" />
        </div>
      </div>
      <div className="upper-body">
        <div className="left-panel">
          <div className="widgets">
            <div className="app">
              <img width="100%" alt="icon" src="icons/calendar.svg" />
            </div>
            <div className="app">
              <img width="100%" alt="icon" src="icons/calendar.svg" />
            </div>
            <div className="app">
              <img width="100%" alt="icon" src="icons/calendar.svg" />
            </div>
            <div className="app">
              <img width="100%" alt="icon" src="icons/calendar.svg" />
            </div>
          </div>
        </div>
        <div className="middle-panel">
          <div className="notice-board">
            <div className="notice-header">Notices -</div>
            <div className="notice">
              {getNotices().map((notice, index) => (
                // eslint-disable-next-line react/jsx-key
                <div>
                  {/* eslint-disable-next-line react/no-array-index-key */}
                  <div className="notice-text" key={index}>
                    {notice}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="widget insights" />
          <div className="widget password-manager" />
        </div>
      </div>
      <div className="lower-body">
        <div className="advertisement widget" />
        <div className="widget chat-iframe widget">
          {/* <div className="assistance-ui"> */}
          {/*  <iframe src="http://localhost:9981/" allowpopups="true"></iframe> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
