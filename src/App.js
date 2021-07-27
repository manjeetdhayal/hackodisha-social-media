import './App.css';
import './components/style/hackodisha.scss';
import Hackodisha from './components/hackodisha';
import Date from './components/date';
import Paragraph from './components/paragraph';
import SocialLinks from './components/socialLinks';

function App() {
  return (
    <main>
      {/*  Hackodisha  */}
      <Hackodisha />

      {/* Date  */}
      <Date />

      {/*  para */}
      <Paragraph />

      {/*  cards  */}
      <SocialLinks />
    </main>
  );
}

export default App;
