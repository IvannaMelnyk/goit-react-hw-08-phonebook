import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import s from './container.module.css';

export default function Container({ children }) {
  return (
    <div className={s.container}>
      {children}
      <CssBaseline />
    </div>
  );
}
