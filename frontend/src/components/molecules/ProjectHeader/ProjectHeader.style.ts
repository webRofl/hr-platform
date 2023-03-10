import { styleMixins } from '@/style';
import { Grid } from '@mui/material';
import styled from 'styled-components';

export const RelativeGrid = styled(Grid)`
  position: relative;
`;

export const GridItem = styled('div')`
  ${styleMixins.blockStyle}
`;

export const BriefInfo = styled(GridItem)`
  padding: 1rem 1.5rem;
  padding-top: 0.5rem;
`;

export const Title = styled('h1')`
  line-height: 1rem;
`;

export const Salary = styled('h4')`
  font-weight: 500;
  font-size: 18px;
  line-height: 1rem;
`;

export const ProjectImg = styled('img')`
  width: 15rem;
  position: absolute;
  right: 1rem;
  top: 1.5rem;
`;

export const AuthorBlock = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled('img')`
  width: 7rem;
  border-radius: 50%;
`;
