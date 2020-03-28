import React from 'react';
import { IoMdEye, IoMdCreate } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

import { Container, OptionList, VisualizeButton } from './styles';

export default function Options({ visible, id, path }) {
  return (
    <Container>
      <OptionList visible={visible}>
        <VisualizeButton to={`/${path}/edit/${id}`}>
          <IoMdEye size={20} color="#8E5BE8" />
          <p>Visualizar</p>
        </VisualizeButton>
        <button type="button">
          <IoMdCreate size={20} color="#4D85EE" />
          <p>Editar</p>
        </button>
        <button type="button">
          <MdDeleteForever size={20} color="#DE3B3B" />
          <p>Excluir</p>
        </button>
      </OptionList>
    </Container>
  );
}
