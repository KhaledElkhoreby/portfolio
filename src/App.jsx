import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './components/AboutMe/AboutMe';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';
import Portifolio from './components/Portifolio/Portifolio';
import Skills from './components/Skills/Skills';
import Section from './layout/Section/Section';

function App() {
  return (
    <>
      <Cover />
      <Section>
        <AboutMe />
      </Section>
      <Section dark fullview>
        <Skills />
      </Section>
      <Section fullview>
        <Portifolio />
      </Section>
      <Section dark>
        <Footer />
      </Section>
    </>
  );
}

export default App;
