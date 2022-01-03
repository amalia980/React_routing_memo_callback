import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/pages/pages/pages/Layout';
import Home from './components/pages/pages/pages/Home';
import About from './components/pages/pages/pages/About';
import NoView from './components/pages/pages/pages/NoView';
import DemoMemo from './components/pages/pages/pages/DemoMemo';
import MemoHook from './components/pages/pages/pages/MemoHook';
import CallbackHook from './components/pages/pages/pages/CallbackHook';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="demomemo" element={<DemoMemo />} />
          <Route path="memohook" element={<MemoHook />} />
          <Route path="callbackhook" element={<CallbackHook />} />
          <Route path="*" element={<NoView />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
