import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending'
import Superhero from './components/Superhero';
import './style/landingPage.css'

function App() {
  return (
    <div>
      {/* halaman intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end halaman intro */}

      {/* halaman trending */}
      <div class="trending">
        <Trending />
      </div>
      {/* end halaman trending */}

      {/* halaman trending */}
      <div class="superhero">
        <Superhero />
      </div>
      {/* end halaman trending */}
    </div>
  );
}

export default App;
