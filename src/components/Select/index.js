/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import AsyncSelect from 'react-select/async';
import { stateOptions } from './data';
import { Container } from './styles';

const filterColors = inputValue => {
  return stateOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

// eslint-disable-next-line react/prefer-stateless-function
export default class WithPromises extends Component {
  render() {
    return (
      <>
        <Container>
          <AsyncSelect
            cacheOptions
            defaultOptions
            loadOptions={promiseOptions}
            placeholder="Buscar por encomendas"
          />
        </Container>
      </>
    );
  }
}
