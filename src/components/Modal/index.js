/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import 'react-morphing-modal/dist/ReactMorphingModal.css';

const ModalButton = ({ openModal }) => {
  const btnRef = useRef(null);
  function handleClick() {
    // do some complicated stuff
    openModal(btnRef);
  }

  return (
    <button type="button" ref={btnRef} onClick={handleClick}>
      Show modal
    </button>
  );
};

export default ModalButton;
