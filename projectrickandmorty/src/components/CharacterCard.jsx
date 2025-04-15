import Card from 'react-bootstrap/Card';

function CharacterCard({ character }) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header>{character.name}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={character.image} alt={character.name} />
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <strong>Especie:</strong> {character.species}
          <br />
          <strong>Estado:</strong> {character.status}
          <br />
          <strong>Género:</strong> {character.gender}
          <br />
          <strong>Ubicación:</strong> {character.location.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
