import { Card } from 'react-bootstrap';

function CharacterCard({ character }) {
  return (
    <Card>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          Especie: {character.species} <br />
          Estado: {character.status}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
