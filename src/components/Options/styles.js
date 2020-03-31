import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
`;

export const OptionList = styled.div`
  position: absolute;
  width: ${props => (props.path === 'delivery/problems' ? '210px' : '150px')};
  height: ${props => (props.path === 'delivery/problems' ? '100px' : '120px')};
  left: ${props =>
    props.path === 'delivery/problems'
      ? 'calc(50% - 115px)'
      : 'calc(50% - 85px)'};
  top: ${props =>
    props.path === 'delivery/problems'
      ? 'calc(100% + 20px)'
      : 'calc(100% + 20px)'};
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #fff;
  padding: ${props =>
    props.path === 'delivery/problems'
      ? '15px 5px 0px 5px'
      : '15px 5px'} !important;
  display: ${props => (props.visible ? 'block' : 'none')} !important;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 25px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(255, 255, 255, 1);
  }

  button {
    width: 100%;
    display: flex;
    padding: 3px 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgba(153, 153, 153, 0.3) !important;

    &:last-child {
      padding-bottom: 0;
      margin-bottom: 0;
      border: none !important;
    }

    p {
      margin-left: 5px !important;
    }
  }
`;

export const VisualizeButton = styled(Link)`
  width: 100%;
  display: flex;
  padding: 3px 10px;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3) !important;
  text-decoration: none;
  color: '#999';
`;

/**
 *
 * &:last-child {
      padding-bottom: 0;
      margin-bottom: 0;
      border: none !important;
    }
 */
