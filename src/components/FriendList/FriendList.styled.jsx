import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 270px;
  max-height: 50px;
  margin-bottom: 10px;
  padding: 4px;
  background: #ffffff;
  border-radius: 4px 4px 4px 4px;
  box-shadow: 1px -2px 25px 2px rgba(14, 11, 11, 0.56);

  &:hover {
    background-color: gray;
  }
`;

export const Avatar = styled.img`
  border-radius: 25%;
`;

export const Name = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.17;
  letter-spacing: 0.02em;
`;
