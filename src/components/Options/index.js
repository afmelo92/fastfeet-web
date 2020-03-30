import React from 'react';
import { useDispatch } from 'react-redux';

import { IoMdEye, IoMdCreate } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { deleteItemRequest } from '~/store/modules/product/actions';

import { Container, OptionList, VisualizeButton } from './styles';

export default function Options({ visible, id, path }) {
  const dispatch = useDispatch();

  function handleClick(id) {
    const delId = +id;

    dispatch(deleteItemRequest(delId));
  }

  return (
    <Container>
      <OptionList visible={visible}>
        <button type="button">
          <IoMdEye size={20} color="#8E5BE8" />
          <p>Visualizar</p>
        </button>
        <VisualizeButton to={`/${path}/edit/${id}`}>
          <IoMdCreate size={20} color="#4D85EE" />
          <p>Editar</p>
        </VisualizeButton>
        <button type="button" onClick={() => handleClick(id)}>
          <MdDeleteForever size={20} color="#DE3B3B" />
          <p>Excluir</p>
        </button>
      </OptionList>
    </Container>
  );
}
