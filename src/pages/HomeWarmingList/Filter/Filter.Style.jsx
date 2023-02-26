import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const FilterWrap = styled.div`
  ${flex('flex-start', 'center', null)}
  padding-top: 100px;
  min-width: 0;
  margin: 0 -2px;
  padding: 5px 0;
  overflow: auto;
`;

export const Category = styled.div`
  margin-right: 5px;
  padding: 5px 10px 5px 10px;
  border-radius: 4px;
  border-color: #f5f5f5;
  border: 1px solid transparent;
  color: #757575;
  background-color: #f5f5f5;
  font-weight: 500;
  text-align: center;
  font-size: 15px;
  text-align: end;
  line-height: 19px;
  cursor: pointer;
`;

export const DownArrow = styled.img`
  width: 7px;
  height: 7px;
  margin-left: 5px;
`;

export const AddFilterList = styled.div`
  margin-top: 10px;
`;

export const AddedFilter = styled.span`
  margin-right: 10px;
  background-color: #35c5f0;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 26px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;
