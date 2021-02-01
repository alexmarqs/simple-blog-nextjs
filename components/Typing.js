import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typing = ({ options }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <span ref={elementRef} />
    </>
  );
};

export default Typing;
