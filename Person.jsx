export default function Person({ person }) {
  console.log(person);
  return (
    <div>
      <h3> person: {person.name}</h3>
      <p> age: {person.age} </p>
    </div>
  );
}
