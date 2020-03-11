import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

const handleTextColorTag = () => {};

export const OptionList = styled.div`
  position: absolute;
  width: 150px;
  height: 120px;
  left: calc(50% - 70px);
  top: calc(100% + 10px);
  flex-direction: column;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')} !important;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 25px);
    top: -20px;
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
  }
`;
