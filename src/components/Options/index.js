import React from 'react';
import { IoMdEye, IoMdCreate } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

import { Container, OptionList, VisualizeButton } from './styles';

export default function Options({ visible, id }) {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  return (
    <Container>
      <OptionList visible={visible}>
        <VisualizeButton to={`/product/edit/${id}`}>
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
