import styled from 'styled-components';

export const ProfileContainer = styled('div')`
  position: absolute;
  bottom: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled('div')`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const Img = styled('img')`
  width: 2rem;
  border-radius: 50%;
`;
