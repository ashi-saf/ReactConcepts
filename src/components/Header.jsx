import logo from '../assets/react-core-concepts.png';

export default function Header() {
  const description = ['Crucial', 'Fundamental', 'Core'];
  function getRandom(num) {
    return Math.floor(Math.random() * (num + 1));
  }

  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description[getRandom(2)]} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}
