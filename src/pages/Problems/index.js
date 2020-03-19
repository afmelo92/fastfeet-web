/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import api from '~/services/api';

import Options from '~/components/Options';

import { Wrapper, Table, THeader, TRow } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('delivery/problems', {
        params: {
          page,
        },
      });

      const data = response.data.map(p => {
        if (p.id < 10) {
          p.id = `0${p.id}`;
        }
        return {
          ...p,
          visible: false,
        };
      });

      setProblems(data);
    }

    loadProducts();
  }, [page]);

  function handleToggleVisible(id) {
    setProblems(
      problems.map(p => {
        if (p.id === id) {
          return { ...p, visible: !p.visible };
        }
        return p;
      })
    );
  }

  return (
    <Wrapper>
      <h1>Problemas na entrega</h1>
      <Table>
        <THeader>
          <div>Encomenda</div>
          <div>Problema</div>
          <div>Ações</div>
        </THeader>
        {problems.map(problem => (
          <TRow key={problem.id}>
            <div>#{problem.id}</div>
            <div>
              <p>{problem.description}</p>
            </div>
            <div>
              <MdMoreHoriz
                onClick={() => handleToggleVisible(problem.id)}
                size={30}
                color="#C6C6C6"
              />
              <Options visible={problem.visible} />
            </div>
          </TRow>
        ))}
      </Table>
    </Wrapper>
  );
}
