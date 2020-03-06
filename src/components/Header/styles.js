import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 26px;
      width: 135;
      margin-right: 20px;
      padding: 0 20px 0 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-size: 15px;
      font-weight: bold;
      color: #999;
      margin-right: 20px;
    }

    a.current {
      color: #444;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      color: #666;
      margin-bottom: 5px;
    }

    a {
      color: red;
    }
  }
`;

export const Profile = styled.div``;
