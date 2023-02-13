import React, { useEffect, PropsWithChildren } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const ScrollToTop: React.FC<PropsWithChildren<RouteComponentProps>> = ({ history, children }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      const mainScroll = document.querySelector('#main-scroll');

      if (mainScroll) {
        mainScroll.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);