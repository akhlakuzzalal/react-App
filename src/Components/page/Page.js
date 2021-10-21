import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Page = ({ title, ...rest }) => {
   useEffect(() => {
      document.title = title;
   }, [title]);
   return <Route {...rest} />;
};

Page.propTypes = {
   title: PropTypes.string.isRequired,
};

export { Page };