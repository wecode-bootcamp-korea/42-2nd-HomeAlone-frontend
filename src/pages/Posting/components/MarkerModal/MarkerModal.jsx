import React from 'react';
import useSearch from '../../../../Hooks/useSearch';
import * as S from './MarkerModal.style';

export default function MarkerModal({
  isSelectClicked,
  isProductInfoOpen,
  handleMarker,
  setIsSelectClicked,
  onClickClose,
  handleProductId,
}) {
  const [filteredList, keyword, onChange] = useSearch();

  const onClickSelect = (e, product) => {
    handleProductId(e, product);
    setIsSelectClicked(true);
    handleMarker(e);
  };

  return (
    <div>
      {isProductInfoOpen && (
        <S.MarkerModalBox>
          {!isSelectClicked ? (
            <>
              <S.SearchBox>
                <S.SearchBar
                  type="text"
                  value={keyword || ''}
                  placeholder="상품명을 검색해보세요"
                  onChange={onChange}
                />
                <S.CloseBtn onClick={onClickClose}>취소</S.CloseBtn>
              </S.SearchBox>
              {keyword !== '' && (
                <S.SearchedList>
                  {filteredList &&
                    filteredList.map(product => {
                      return (
                        <S.SearchedItem key={product.productId}>
                          <S.ItemBox>
                            <S.ItemImg
                              src={product.productImage}
                              alt="Product Img"
                            />
                            <p>{product.productName}</p>
                          </S.ItemBox>
                          <S.SelectBtn
                            value={product.productId}
                            onClick={e => onClickSelect(e, product.productId)}
                          >
                            선택
                          </S.SelectBtn>
                        </S.SearchedItem>
                      );
                    })}
                </S.SearchedList>
              )}
            </>
          ) : (
            <S.SearchBox>
              <S.SearchedList>
                {filteredList &&
                  filteredList.map(product => (
                    <S.SearchedItem key={product.productId}>
                      <S.ItemBox>
                        <S.ItemImg
                          src={product.productImage}
                          alt="Product Img"
                        />
                        <p>{product.productName}</p>
                      </S.ItemBox>
                    </S.SearchedItem>
                  ))}
              </S.SearchedList>
            </S.SearchBox>
          )}
        </S.MarkerModalBox>
      )}
    </div>
  );
}
