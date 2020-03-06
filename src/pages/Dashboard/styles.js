import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    align-self: flex-start;
    margin-bottom: 30px;
  }

  input {
    width: 237px;
    height: 36px;
    margin-bottom: 22px;
  }
`;
/**
 *
 * /**
  border-collapse: collapse;
  width: 100%;
  border: 1px solid blue;
  border: 1px solid green;
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  align-items: center;

  th {
    text-align: left;
    padding-bottom: 10px;
    border: 1px solid yellow;
  }

  tr {
    border: 1px solid red;
  }

  td {
    background: #fff;
    justify-items: center;
    margin-bottom: 12px;
  }

  td:first-child {
    border-radius: 5px 0 0 5px;
  }

  td div {
    display: flex;
    align-items: center;
  }

  td div img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 12px;
  }

  /**


  td {
    align-items: center;
    background: #fff;
    margin: 0 50px;
    padding: 5px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

  }
  td:first-child {
    border-radius: 5px 0 0 5px;
  }

  td:last-child {
    border-radius: 0 5px 5px 0;
  }
   */

export const TableHeader = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  margin-bottom: 14px;
`;

export const TableRow = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 21px;
  align-items: center;
  padding: 20px;

  div {
  }
`;

export const DeliverymanCell = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const StatusCell = styled.div`
  display: flex;
  align-items: center;
  background: #dff0df;
  padding: 5px 8px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 14px;
  color: #2ca42b;

  img {
    margin-right: 5px;
  }
`;
