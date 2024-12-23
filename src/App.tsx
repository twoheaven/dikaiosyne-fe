// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'; // ThemeProvider 임포트
import { theme } from './styles/theme'; // theme 임포트
import Paths from './utils/paths';
import Layout from './componets/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      {' '}
      {/* light 테마 사용 */}
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={Paths.Home} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={Paths.About} element={<About />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
