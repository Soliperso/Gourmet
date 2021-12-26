import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = (props) => {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
