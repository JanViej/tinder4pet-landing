import { Space, Popconfirm, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import dayjs from 'dayjs';
import flatten from 'lodash/flatten';
import orderBy from 'lodash/orderBy';
import styled from 'styled-components';
import { formatMoney, formatI18nData } from 'utils/tools';
import { ORDER_STATUS } from 'configs/constants';
import { useTranslation } from 'react-i18next';

export default function OrderCard({
  isOngoing,
  id,
  handleCancel,
  createdAt,
  status,
  orderItems,
  shippingMethod,
  pickingUpTime,
  address,
  totalPrice,
}) {
  const { t } = useTranslation();

  const orderSummary = useMemo(() => {
    let quantity = 0;
    orderItems?.forEach((item) => {
      quantity += item?.quantity || 0;
    });
    return { quantity };
  }, [orderItems]);

  return (
    <OrderCardWrapper>
      <Row gutter={[20, 20]}>
        <Col md={8} sm={8} xs={24}>
          <div className="size-18">{dayjs(createdAt).format('DD/MM/YYYY')}</div>
        </Col>
        <Col md={16} sm={16} xs={12}>
          <div>
            {t('orders.orderID', {
              id,
            })}
          </div>
        </Col>
        <Col md={8} sm={8} xs={12}>
          <div className="price-section size-14">
            {t('orders.itemPrice', {
              quantity: orderSummary.quantity,
              price: formatMoney(totalPrice, 3, 'đ'),
            })}
          </div>
        </Col>
        <Col md={16} sm={16} xs={24}>
          <div>
            {t('orders.itemStatus', {
              status: t(ORDER_STATUS[status]?.text),
            })}
          </div>
        </Col>
        <Col md={16} sm={16} xs={24}>
          <div>
            {shippingMethod === 'delivery'
              ? t('orders.itemAddress', {
                  address,
                })
              : t('orders.userPickUp')}
          </div>
        </Col>
        <Col md={8} sm={8} xs={24}>
          <div style={{paddingBottom: '10px'}}>
            {t('orders.expectedDeliveryTime', {
              time: dayjs(pickingUpTime).format('DD/MM/YYYY, HH:mm'),
            })}
          </div>
        </Col>
        {orderItems?.map((orderItem) => (
          <Col key={orderItem?.product?.id} md={8} sm={8} xs={24}>
            <div className="order-item">
              <div>{`${orderItem?.quantity}x`}</div>
              <div className="order-item-image">
                <img
                  src={
                    orderItem?.product?.thumbnail ||
                    orderItem?.product?.images?.[0]
                  }
                  alt=""
                />
              </div>
              <div className="order-item-title">
                <div>{formatI18nData(orderItem?.product?.name)}</div>
                <div className="item-description">
                  {flatten(
                    orderBy(
                      orderItem?.product?.productOptions,
                      ['isVariant'],
                      ['desc'],
                    )?.map((option) => option.optionItems),
                  )
                    ?.map((item) => formatI18nData(item?.name))
                    ?.join(', ')}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {isOngoing && (
        <div className="item-action-section">
          <Space size={10}>
            <Popconfirm
              title={t('orders.confirmCancel')}
              onConfirm={() => handleCancel(id)}
              onCancel={() => {}}
              okText={t('button.cancel')}
              cancelText={t('button.close')}
            >
              <div className="link">{t('button.cancel')}</div>
            </Popconfirm>
          </Space>
        </div>
      )}
    </OrderCardWrapper>
  );
}

OrderCard.propTypes = {
  id: PropTypes.string,
  handleCancel: PropTypes.func,
  isOngoing: PropTypes.bool,
  createdAt: PropTypes.string,
  status: PropTypes.string,
  orderItems: PropTypes.array,
  shippingMethod: PropTypes.string,
  pickingUpTime: PropTypes.string,
  address: PropTypes.string,
  totalPrice: PropTypes.number,
};

OrderCard.defaultProps = {
  handleCancel: () => {},
};

const OrderCardWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  position: relative;

  border-left: 3px solid #000;

  .price-section {
    color: #454545;
  }

  .order-item {
    display: flex;
    width: 100%;
    align-items: center;

    .order-item-image {
      width: 36px;
      min-width: 36px;
      height: 36px;
      margin: 0 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .order-item-title {
      .item-description {
        font-size: 10px;
        color: #454545;
      }
    }
  }

  .item-action-section {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
  }
`;
