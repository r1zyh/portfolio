import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
