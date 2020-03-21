/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { components } from 'react-select';
import animatedComponents from 'react-select/animated';
import { MdExpandMore } from 'react-icons/md';

import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  h1 {
    margin-bottom: 27px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    button:first-child {
      margin-right: 5px;
      background: #ccc;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    width: 112px;
    height: 36px;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    background: #7d40e7;
    border-radius: 4px;
    border: none;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const FirstHeader = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  font-weight: bold;
  color: #444;
  padding: 20px;
  > div {
    &:nth-child(1) {
      margin-right: 20px;
    }
  }
`;

export const SecondHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #444;
  padding: 20px;

  input {
    height: 45px;
    margin-top: 10px;
    padding-left: 10px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddddd;
    border-radius: 4px;
  }
`;

export const customStyles = {
  control: styles => ({
    ...styles,
    width: '100%',
    height: 45,
    marginTop: 10,
  }),
  placeholder: base => ({
    ...base,
    color: '#999',
    paddingBottom: 10,
    fontWeight: 'normal',
  }),
  indicatorsContainer: styles => ({
    ...styles,
    marginBottom: 15,
  }),

  // none of react-select's styles are passed to <Control />
};

export const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <MdExpandMore size={20} />
    </components.DropdownIndicator>
  );
};

export const IndicatorsContainer = props => {
  return (
    <div>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

export const componentStyle = {
  animatedComponents,
  DropdownIndicator,
  IndicatorsContainer,
  IndicatorSeparator: () => null,
};

export const componentStyleProduct = {
  animatedComponents,
  DropdownIndicator,
  IndicatorsContainer: () => null,
  IndicatorSeparator: () => null,
};
