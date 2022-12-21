
import Animals from './components/Animals';
import useAnimalSearch from './hooks/useAnimalSearch';


function App() {
    const {searchAnimals,animals} = useAnimalSearch();
    console.log(animals)

  return (
    <main>
        <h1>Animal Search</h1>
        <input type="text"
        placeholder='Search for a Animal'
        onChange={(e) => searchAnimals(e.target.value)}/>

        <ul>
            {animals && animals.map((anim) => ( <Animals key={anim.id} {...anim} /> ))}
            {animals?.length === 0 && 'No animals were found'}
        </ul>

    </main>
  )
}

export default App;
