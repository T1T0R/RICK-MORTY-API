import {Container,Row,Col,Button} from 'react-bootstrap';
import {useState,useEffect} from 'react';
import CharacterCard from './components/CharacterCard';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de que esté importado



function App() {


  // Caracter inicia con un array vacio
  const [characters, setCharacters] = useState([]);

  // Cargar los personajes 
  const [page, setPage] = useState(1);

  //Utilizamos el useEffect para cargar los personajes
  //El useEffect se ejecuta cada vez que cambia la pagina
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, [page]);


  //Actualizar pagina 
  const loadMore =()=>{
    setPage(page => page + 1);
  }


  return (
    <div className="App">

    <Container className="my-4 text-center">
      <h1>Personajes de Rick y Morty</h1>
      <Row>
        {/*Mapeamos los personajes */}
        {characters.map(char => (
          <Col key={char.id} xs={12} sm={6} md={4} lg={3} className="mb-4">

            {/* Pasamos a traves Props el caracter*/}
            <CharacterCard character={char} />
          </Col>
        ))}
      </Row>
      <Button onClick={loadMore} variant="primary">Cargar más</Button>
    </Container>





    </div>
  );
}

export default App;
