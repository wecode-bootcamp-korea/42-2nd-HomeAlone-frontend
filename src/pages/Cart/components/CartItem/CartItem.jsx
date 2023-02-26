import React from 'react';
import * as S from './CartItem.style';

export default function CartItem({
  cartListData,
  handleCheckbBoxChange,
  handleSelectAllChange,
  handleDeleteAllSelected,
  allSelected,
  closeBtn,
  isClicked,
  handleSelectBox,
}) {
  return (
    <div>
      <S.SelectBox>
        <S.SelectBoxLabel>
          <S.SelectInput
            type="checkbox"
            onChange={handleSelectAllChange}
            checked={allSelected}
          />
          모두선택
        </S.SelectBoxLabel>
        <S.SelectDeleteButton type="button" onClick={closeBtn}>
          선택삭제
        </S.SelectDeleteButton>
      </S.SelectBox>
      {cartListData.length > 0 &&
        cartListData.map(data => {
          return (
            <S.ItemBox key={data.cartId}>
              <S.ItemTitle>{data.brand}</S.ItemTitle>
              <S.ItemBoxList>
                <S.ItemList>
                  <S.ItemDetail>
                    <S.ItemInput
                      key={data.cartId}
                      checked={data.isSelected}
                      type="checkbox"
                      onChange={() => handleCheckbBoxChange(data.cartId)}
                    />
                    <div>
                      <S.DtailLink to="/detail">
                        <S.ItemImg src={data.imageUrl} alt="productImg" />
                        <S.ItemContent>
                          <label>{data.name}</label>
                          <S.ItemShipping>업체 직접 배송</S.ItemShipping>
                        </S.ItemContent>
                      </S.DtailLink>
                    </div>
                  </S.ItemDetail>
                  <S.Deletbutton type="button" onClick={closeBtn}>
                    <S.DeletImg
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
                      alt="closeBtn"
                    />
                  </S.Deletbutton>
                </S.ItemList>
                <div>
                  <S.ItemOptions>
                    <S.Quantity>수량</S.Quantity>
                    <S.CountWrapper>
                      <S.Select
                        onChange={e => handleSelectBox(data.productId, e)}
                        defaultValue={data.quantity}
                        quantity={data.quantity}
                      >
                        {QUANTITY_LIST.map(quantityList => {
                          return (
                            <option
                              key={quantityList.id}
                              value={quantityList.quantity}
                            >
                              {quantityList.quantity}
                            </option>
                          );
                        })}
                      </S.Select>
                      <S.SellingPrice>
                        {(
                          data.quantity *
                          (data.price - data.discount)
                        ).toLocaleString()}
                        원
                      </S.SellingPrice>
                    </S.CountWrapper>
                  </S.ItemOptions>
                </div>
                {data.shippingFee === '0.00' ? (
                  <S.ItemFooter>배송비 무료</S.ItemFooter>
                ) : (
                  <S.ItemFooter>
                    배송비 {Math.trunc(data.shippingFee)}원
                  </S.ItemFooter>
                )}
              </S.ItemBoxList>
            </S.ItemBox>
          );
        })}
      {isClicked && (
        <S.DeleteModalWrapper>
          <S.DeleteModal>
            <p>이 상품을 삭제하겠습니까?</p>
            <S.CloseButton>
              <S.CencleButton type="button" onClick={closeBtn}>
                취소
              </S.CencleButton>
              <S.DeletButton type="button" onClick={handleDeleteAllSelected}>
                삭제
              </S.DeletButton>
            </S.CloseButton>
          </S.DeleteModal>
        </S.DeleteModalWrapper>
      )}
    </div>
  );
}

const QUANTITY_LIST = [
  {
    id: 1,
    quantity: 1,
  },
  {
    id: 2,
    quantity: 2,
  },
  {
    id: 3,
    quantity: 3,
  },
  {
    id: 4,
    quantity: 4,
  },
  {
    id: 5,
    quantity: 5,
  },
];
