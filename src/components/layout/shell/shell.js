import React, { Component } from 'react';
import './shell.scss';

const Shell = ({ children }) => (
  <div className="shell">
    { children }
  </div>
);

export default Shell;
