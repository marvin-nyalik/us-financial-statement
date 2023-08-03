import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Companies from './components/Companies';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Companies />} />
          <Route path="/detail/:symbol" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
