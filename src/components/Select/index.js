/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { components } from 'react-select';
import AsyncSelect from 'react-select/async';

import { MdSearch } from 'react-icons/md';

import api from '~/services/api';
import { stateOptions } from './data';

const customStyles = {
  control: styles => ({
    ...styles,
    width: 237,
    height: 36,
  }),
  placeholder: base => ({
    ...base,
    color: 'red',
    paddingBottom: 15,
  }),
  indicatorsContainer: styles => ({
    ...styles,
    border: '1px solid blue',
    marginBottom: 15,
  }),
  // none of react-select's styles are passed to <Control />
};

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <MdSearch size={20} />
    </components.DropdownIndicator>
  );
};

const IndicatorsContainer = props => {
  return (
    <div>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    resolve(
      api.get('products', {
        params: {
          page: 1,
          prod: '',
        },
      })
    );
  });

// eslint-disable-next-line react/prefer-stateless-function
export default class Select extends Component {
  state = { inputValue: '' };

  handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };

  render() {
    return (
      <AsyncSelect
        styles={customStyles}
        onChange={e => this.handleInputChange(e)}
        isMulti
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        placeholder="Buscar por encomendas"
        components={{
          DropdownIndicator,
          IndicatorsContainer,
          IndicatorSeparator: () => null,
        }}
      />
    );
  }
}
