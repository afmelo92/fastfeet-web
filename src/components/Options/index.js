/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useModal, Modal } from 'react-morphing-modal';

import { IoMdEye, IoMdCreate } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

import ModalButton from '~/components/Modal';

import { deleteItemRequest as deleteProductRequest } from '~/store/modules/product/actions';
import { deleteItemRequest as deleteDeliverymanRequest } from '~/store/modules/deliveryman/actions';
import { deleteItemRequest as deleteRecipientRequest } from '~/store/modules/recipient/actions';
import { setModal } from '~/store/modules/modal/actions';

import { Container, OptionList, VisualizeButton } from './styles';

export default function Options({ visible, id, path }) {
  const dispatch = useDispatch();
  const { open, modalProps } = useModal();

  function handleClick(delId) {
    switch (path) {
      case 'product':
        dispatch(deleteProductRequest(delId));
        break;
      case 'deliveryman':
        dispatch(deleteDeliverymanRequest(delId));
        break;
      case 'recipients':
        dispatch(deleteRecipientRequest(delId));
        break;
      default:
        console.tron.log('DEFAULT');
    }
  }

  /**
   * function handleModal(modalId) {
    dispatch(setModal(modalId));
  }

   */
  return (
    <Container>
      <OptionList visible={visible} path={path}>
        <ModalButton openModal={open}>
          {path === 'delivery/problems' ? (
            <FaPen size={15} color="#8E5BE8" />
          ) : (
            <IoMdEye size={20} color="#8E5BE8" />
          )}
          <p>Visualizar</p>
        </ModalButton>

        {path === 'delivery/problems' ? (
          <button type="button" onClick={() => handleClick(id)}>
            <MdDeleteForever size={20} color="#DE3B3B" />
            <p>Cancelar encomenda</p>
          </button>
        ) : (
          <>
            <VisualizeButton to={`/${path}/edit/${id}`}>
              <IoMdCreate size={20} color="#4D85EE" />
              <p>Editar</p>
            </VisualizeButton>
            <button type="button" onClick={() => handleClick(id)}>
              <MdDeleteForever size={20} color="#DE3B3B" />
              <p>Excluir</p>
            </button>
          </>
        )}
      </OptionList>
      <Modal {...modalProps}>Hello World</Modal>
    </Container>
  );
}
