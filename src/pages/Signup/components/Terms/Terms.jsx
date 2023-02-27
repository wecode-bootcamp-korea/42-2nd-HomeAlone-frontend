import React from 'react';
import { TERMS_LIST } from '../../data/TermsList';
import * as S from './Terms.style';

export default function Terms() {
  return (
    <>
      <S.Title>약관동의</S.Title>
      <S.TertmsWrapper>
        {TERMS_LIST.map(({ id, title, text }) => {
          return (
            <S.Contents key={id}>
              <S.CheckBox type="checkbox" />
              {title}
              <S.Text>{text}</S.Text>
            </S.Contents>
          );
        })}
      </S.TertmsWrapper>
    </>
  );
}
