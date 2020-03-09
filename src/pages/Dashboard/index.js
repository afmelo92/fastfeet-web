import React from 'react';
import { MdMoreHoriz, MdAdd } from 'react-icons/md';

import Options from '~/components/Options';

import { Wrapper, Container, Table, THeader, TRow, StatusTag } from './styles';

export default function Dashboard() {
  return (
    <Wrapper>
      <h1>Gerenciando encomendas</h1>
      <Container>
        <input type="text" placeholder="Buscar por encomendas" />
        <button type="button">
          <MdAdd size={30} color="#fff" />
          <p>CADASTRAR</p>
        </button>
      </Container>

      <Table>
        <THeader>
          <div>ID</div>
          <div>Destinatário</div>
          <div>Entregador</div>
          <div>Cidade</div>
          <div>Estado</div>
          <div>Status</div>
          <div>Ações</div>
        </THeader>
        <TRow>
          <div>#01</div>
          <div>Ludwig Van Beethoven</div>
          <div>
            <img
              width="35"
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt=""
            />
            <p>John Doe</p>
          </div>
          <div>Rio do sul</div>
          <div>SC</div>
          <div>
            <StatusTag>
              <div />
              ENTREGUE
            </StatusTag>
          </div>
          <div>
            <button type="button">
              <MdMoreHoriz size={30} color="#C6C6C6" />
              <Options />
            </button>
          </div>
        </TRow>
        <TRow>
          <div>#02</div>
          <div>Ludwig Van Beethoven</div>
          <div>
            <img
              width="35"
              src="https://ui-avatars.com/api/?name=Antonio+Banderas"
              alt=""
            />
            <p>Antonio Banderas</p>
          </div>
          <div>Rio do sul</div>
          <div>SC</div>
          <div>
            <StatusTag>
              <div />
              ENTREGUE
            </StatusTag>
          </div>
          <div>
            <button type="button">
              <MdMoreHoriz size={30} color="#C6C6C6" />
            </button>
          </div>
        </TRow>
        <TRow>
          <div>#02</div>
          <div>Ludwig Van Beethoven</div>
          <div>
            <img
              width="35"
              src="https://ui-avatars.com/api/?name=Antonio+Banderas"
              alt=""
            />
            <p>Antonio Banderas</p>
          </div>
          <div>Rio do sul</div>
          <div>SC</div>
          <div>
            <StatusTag>
              <div />
              ENTREGUE
            </StatusTag>
          </div>
          <div>
            <button type="button">
              <MdMoreHoriz size={30} color="#C6C6C6" />
            </button>
          </div>
        </TRow>
      </Table>
    </Wrapper>
  );
}
