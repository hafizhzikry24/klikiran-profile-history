import Footer from './components/footer' ;
import Header from './components/header' ;
import Content from './components/contents' ;
import Images from './components/images';
import Intro from './components/intro';
import Histo from  './components/histo'
import './App.css';
import Contact from './components/contact';


function App() {
  return (


    
    <div className="min-h-screen">
      <div>
        <Header />
        <Intro />
        <Histo />
        <Content />
        <Images />
        <Contact/>
        <Footer />
      </div>


    </div>
  );
}
 

export default App;
