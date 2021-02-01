import Typing from './Typing';

const TYPING_MSGS = [
  "I'm Fullstack Developer.",
  "I'm Technology Evangelist.",
  "I'm <strong>me<strong>."
];

const Bio = () => {
  const options = {
    strings: TYPING_MSGS,
    typeSpeed: 65,
    backSpeed: 70,
    cursorChar: '|'
  };

  return (
    <section>
      <p className="text-xl">
        Hello 👋, <Typing options={options} />
      </p>
    </section>
  );
};
export default Bio;
