import React from 'react';
import '../../styles/detail.css';

const ProductDetailInfo = () => {
  return (
    <>
      <div className="wrapper">
        <div className="detail-top">
          <div className="detail-head">
            <div className="t08">
              From.
              <span className="blue b">어이딸부각</span>
            </div>
            <div className="t15 b">어이딸 김부각 세트 4종</div>
          </div>
        </div>
        <div className="detail-mid">
          <div className="detail-photo-box">
            <div className="detail-photo-frame">
              <div className="resImg">
                <div className="imgWrapper">
                  <img
                    src="https://www.bvoat.com/web/product/big/202009/938baf8dfe51f5931114256bee69da8d.jpg"
                    alt="[가치소비] 어이딸 김부각 세트-비보트"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="like-box w100">
            <div className="left">
              <span className="title">너 내 쇼핑 후보가 되어라!</span>
              <br />
              <span className="subtitle">
                이 상품, 마음에 든다면 투표해주세요
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailInfo;
