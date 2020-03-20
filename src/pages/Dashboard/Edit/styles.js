/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { components } from 'react-select';
import animatedComponents from 'react-select/animated';
import { Link } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  h1 {
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 237px;
    height: 40px;
  }

  button {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 142px;
    height: 36px;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    background: #7d40e7;
    border-radius: 4px;
    border: none;
  }
`;

export const RegLink = styled(Link)`
  color: #fff;
`;

export const Table = styled.div`
  display: grid;
`;

export const THeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 1fr;
  font-weight: bold;
  color: #444;
  padding: 20px;

  div {
    &:last-child {
      text-align: end;
    }
  }
`;

export const TRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 1fr;
  color: #666;
  font-size: 16px;
  background: #fff;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 5px;

  div {
    display: flex;
    text-align: left;
    align-items: center;

    p {
      margin-left: 5px;
      align-items: center;
    }

    button {
      border: 0;
      background: none;
    }

    &:last-child {
      justify-content: end;
    }
  }
`;

const handleBackgroundColorTag = status => {
  switch (status) {
    case 'ENTREGUE':
      return '#DFF0DF';
    case 'CANCELADA':
      return '#FAB0B0';
    case 'RETIRADA':
      return '#BAD2FF';
    default:
      return '#F0F0DF';
  }
};

const handleTextColorTag = status => {
  switch (status) {
    case 'ENTREGUE':
      return '#2CA42B';
    case 'CANCELADA':
      return '#DE3B3B';
    case 'RETIRADA':
      return '#4D85EE';
    default:
      return '#C1BC35';
  }
};

export const StatusTag = styled.div`
  background: ${({ status }) => handleBackgroundColorTag(status)};
  color: ${({ status }) => handleTextColorTag(status)};
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 50px;

  div {
    background: ${({ status }) => handleTextColorTag(status)};
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border-radius: 50%;
  }
`;

export const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${props => (props.color ? props.color : 'none')};
  color: ${props => (props.color ? darken(0.4, `${props.color}`) : 'none')};

  p {
    width: 100%;
    text-align: center;
    margin-left: 0 !important;
  }
`;

export const customStyles = {
  control: styles => ({
    ...styles,
    width: 237,
    height: 36,
  }),
  placeholder: base => ({
    ...base,
    color: '#999',
    paddingBottom: 15,
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
      <MdSearch size={20} />
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
