import Card from 'react-bootstrap/Card';
import '../components/CharacterCard.css'; // Asegúrate de que la ruta sea correcta

function CharacterCard({ character }) {
return (
    <Card border="primary" style={{width: '16rem', margin: '10px'}}>
        <Card.Header>{character.name}</Card.Header>
        <Card.Body>
            <Card.Img variant="top" src={character.image} alt={character.name} />
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
                <strong className="character-info">Especie:</strong> {character.species}
                <br />
                <strong className="character-info">Estado:</strong> {character.status}
                <br />
                <strong className="character-info">Género:</strong> {character.gender}
                <br />
                <strong className="character-info">Ubicación:</strong> {character.location.name}
                <br />
                <strong className="character-info">Origen:</strong> {character.origin.name}
                <br />
                <strong className="character-info">Tipo:</strong> {character.type ? character.type : 'N/A'}
                <br />
                <strong className="character-info">Fecha de creación:</strong> {new Date(character.created).toLocaleDateString()}
            </Card.Text>
        </Card.Body>
    </Card>
);
}

export default CharacterCard;
