
import './App.css'
import JokeCard from './components/jokeCard'
import RandomUserPage from './page/RandomUser'

function App() {

  return (
    <>
      <div className='flex items-center bg-slate-500 justify-center h-screen'>
      
        {/* <RandomUserPage /> */}
        <JokeCard />
      </div>
    </>
  )
}

export default App
