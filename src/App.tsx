import Logo from './assets/logo.svg';
import Calculator from './components/Calculator';

function App() {
  return (
    <main className='min-h-screen bg-c-light-grayish-cyan'>
      <div className='flex flex-col items-center py-8'>
        <img className='w-[25%] desk:w-[8%]' src={Logo} alt='' />
        <Calculator />
      </div>
    </main>
  );
}

export default App;
