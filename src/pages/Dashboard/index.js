import React from 'react';

import dot from '~/assets/images/dot.png';

import {
  Wrapper,
  Container,
  DeliverymanCell,
  StatusCell,
  TableHeader,
  TableRow,
} from './styles';

export default function Dashboard() {
  return (
    <Wrapper>
      <Container>
        <h1>Gerenciando encomendas</h1>
        <input type="text" placeholder="Buscar por encomendas" />
      </Container>

      <TableHeader>
        <div>ID</div>
        <div>Destinatário</div>
        <div>Entregador</div>
        <div>Cidade</div>
        <div>Estado</div>
        <div>Status</div>
        <div>Ações</div>
      </TableHeader>
      {/** ROW */}
      <TableRow>
        <div>#01</div>
        <div>Ludwig van Beethoven</div>
        <div>
          <DeliverymanCell>
            <img
              width="35"
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt=""
            />
            John Doe
          </DeliverymanCell>
        </div>
        <div>Rio do Sul</div>
        <div>Santa Catarina</div>
        <div>
          <StatusCell>
            <img src={dot} alt="" width="10" />
            ENTREGUE
          </StatusCell>
        </div>
        <div>
          <button type="button">...</button>
        </div>
      </TableRow>
      <TableRow>
        <div>#01</div>
        <div>Ludwig van Beethoven</div>
        <div>
          <DeliverymanCell>
            <img
              width="35"
              src="https://ui-avatars.com/api/?name=Antonio+Banderas"
              alt=""
            />
            Antonio Banderas
          </DeliverymanCell>
        </div>
        <div>Rio do Sul</div>
        <div>Santa Catarina</div>
        <div>
          <StatusCell>
            <img src={dot} alt="" width="10" />
            ENTREGUE
          </StatusCell>
        </div>
        <div>
          <button type="button">...</button>
        </div>
      </TableRow>
    </Wrapper>
  );
}
