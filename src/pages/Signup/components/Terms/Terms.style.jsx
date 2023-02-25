import styled from 'styled-components';
import { flex } from '../../../../styles/mixin';

const borderColor = '#eaedef';

export const TertmsWrapper = styled.div`
  ${flex(null, null, 'column')}
  height: 210px;
  margin-top: 10px;
  padding: 15px;
  border: 1px solid ${borderColor};
  border-radius: 3px;
`;

export const Title = styled.label`
  margin-top: 30px;
  font-weight: bolder;
`;

export const Contents = styled.label`
  margin-top: 10px;
  font-size: 14px;

  &:first-child {
    padding-bottom: 10px;
    font-weight: bolder;
    font-size: 15px;
    border-bottom: 1px solid ${borderColor};
  }
`;

export const CheckBox = styled.input`
  margin-right: 10px;
`;

export const Text = styled.span`
  margin-left: 3px;
  color: #828c94;
  font-size: 12px;
`;
