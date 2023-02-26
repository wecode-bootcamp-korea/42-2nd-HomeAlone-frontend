import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from './components/CartItem/CartItem';
import TotalPrice from './components/TotalPrice/TotalPrice';
import { API } from '../../config/config';
import * as S from './Cart.style';

export default function Cart() {
  const [cartListData, setCartListData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const TOKEN = localStorage.getItem('token');

  const goToPayment = () => {
    const sendTotalCost = cartListData.map(el => ({
      isSelected: el.isSelected,
      cartId: el.cartId,
    }));

    fetch(`${API.CARTS}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: TOKEN,
      },
      body: JSON.stringify({
        data: sendTotalCost,
      }),
    }).then(() => {
      navigate(`/payment`);
    });
  };

  // TOFIX: PATCH API 연결 시 동작할 코드 (수량변경)
  const handleSelectBox = (productId, e) => {
    const updatedQuantity = cartListData.map(data =>
      data.productId === productId
        ? { ...data, quantity: e.target.value }
        : data
    );
    setCartListData(updatedQuantity);
    const sendUpdatedQuantity = {
      productId: productId,
      quantity: parseInt(e.target.value),
    };

    fetch(`${API.FROMCART}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: TOKEN,
      },
      body: JSON.stringify({ data: sendUpdatedQuantity }),
    })
      .then(res => res.json())
      .then(data => {
        data.message === 'success' && alert('수량이 변경되었습니다!');
      });
  };

  const handleCheckbBoxChange = cartId => {
    const updatedCheckBox = cartListData.map(checkBoxData =>
      checkBoxData.cartId === cartId
        ? { ...checkBoxData, isSelected: !checkBoxData.isSelected }
        : checkBoxData
    );
    setCartListData(updatedCheckBox);
  };

  const handleSelectAllChange = () => {
    const allSelected = cartListData?.every(
      checkBoxData => checkBoxData.isSelected
    );
    const updatedCheckBox = cartListData.map(checkBoxData => ({
      ...checkBoxData,
      isSelected: !allSelected,
    }));
    setCartListData(updatedCheckBox);
  };

  const allSelected = cartListData?.every(
    checkBoxData => checkBoxData.isSelected
  );

  //TOFIX: DELETE API 연결 시 동작할 코드
  const handleDeleteAllSelected = () => {
    const deletedAllItem = cartListData.map(el => ({
      cartId: el.cartId,
      isSelected: el.isSelected,
    }));

    setIsClicked(prev => !prev);
    fetch(`${API.CARTS}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: TOKEN,
      },
      body: JSON.stringify({
        data: deletedAllItem,
      }),
    })
      .then(res => res.json())
      .then(data => setCartListData(data.data));
  };

  const closeBtn = () => {
    setIsClicked(prev => !prev);
  };

  const totalCost = cartListData
    .filter(list => list.isSelected === true || list.isSelected === 1)
    .reduce(
      (acc, current) =>
        acc +
        (current.price - current.discount) * current.quantity +
        parseInt(current.shippingFee),
      0
    );

  const totalPrice = cartListData
    .filter(list => list.isSelected === true || list.isSelected === 1)
    .reduce((acc, current) => acc + current.price * current.quantity, 0);

  const totalShippingFee = cartListData
    .filter(list => list.isSelected === true || list.isSelected === 1)
    .reduce((acc, current) => acc + parseInt(current.shippingFee), 0);

  const totalDiscount = cartListData
    .filter(list => list.isSelected === true || list.isSelected === 1)
    .reduce((acc, current) => acc + parseInt(current.discount), 0);

  const disabledBtn = cartListData.filter(
    list => list.isSelected === true || list.isSelected === 1
  );

  const howMany = cartListData.filter(
    list => list.isSelected === true || list.isSelected === 1
  );

  //TOFIX: GET API 연결 시 동작할 코드
  useEffect(() => {
    fetch(`${API.CARTS}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartListData(data.data);
      });
  }, []);

  return (
    <S.CartList>
      {cartListData.length === 0 ? (
        <S.EmptyCart>
          <S.EmptyCartImg src="/images/soomin/cart.png" alt="emptyCart" />
          <Link to="/detail/1">
            <S.EmptyCartButton type="button">
              상품 담으러 가기
            </S.EmptyCartButton>
          </Link>
        </S.EmptyCart>
      ) : (
        <>
          <S.CartListMain>
            <S.CartListBox>
              <CartItem
                cartListData={cartListData}
                handleCheckbBoxChange={handleCheckbBoxChange}
                handleSelectAllChange={handleSelectAllChange}
                handleDeleteAllSelected={handleDeleteAllSelected}
                allSelected={allSelected}
                closeBtn={closeBtn}
                isClicked={isClicked}
                handleSelectBox={handleSelectBox}
              />
            </S.CartListBox>
          </S.CartListMain>
          <S.CartListAside>
            <S.TotalPriceBox>
              <TotalPrice
                totalPrice={totalPrice}
                totalCost={totalCost}
                totalShippingFee={totalShippingFee}
                totalDiscount={totalDiscount}
              />
              {disabledBtn.length === 0 ? (
                <S.TotalPriceButton
                  type="button"
                  onClick={goToPayment}
                  disabled={true}
                >
                  상품 구매하기
                </S.TotalPriceButton>
              ) : (
                <S.TotalPriceButton type="button" onClick={goToPayment}>
                  {!allSelected ? howMany.length : cartListData.length}개 상품
                  구매하기
                </S.TotalPriceButton>
              )}
            </S.TotalPriceBox>
          </S.CartListAside>
        </>
      )}
    </S.CartList>
  );
}
