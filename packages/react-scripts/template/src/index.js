import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider as StyledThemeProvider } from 'style/provider';

import Pages from 'pages';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  return (
    <StyledThemeProvider>
      <Router>
        <Pages />
      </Router>
    </StyledThemeProvider>
  );
}
