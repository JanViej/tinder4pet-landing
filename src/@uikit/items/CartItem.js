import { EditFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useTotalPriceOfProduct } from 'hooks/useCart';
import { useTranslation } from 'react-i18next';
import { formatI18nData, formatMoney } from 'utils/tools';
import styled from 'styled-components';

const CartItemStyle = styled.div`
  .item-quantity {
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-s);
    margin-right: 12px;
  }
  .cart-item-ic-edit {
    font-size: 10px;
    margin-left: 10px;
  }
  .btn-remove, .btn-edit {
    font-size: 10px;
    color: var(--text-description);
  }

  .btn-edit {
    padding-left: 10px;
  }
`;

export default function CartItem({ item, onRemove, onEdit }) {
  const { t } = useTranslation();
  const { totalPrice } = useTotalPriceOfProduct(item.data, item.quantity);

  return (
    <CartItemStyle className="d-flex mt-15">
      <div className="item-quantity">{item.quantity}</div>
      <div className="flex-1 mr-10">
        <div className="size-l">
          {formatI18nData(item?.product?.name)}
          {/* <EditFilled
            className="cart-item-ic-edit"
            onClick={() => onEdit(item)}
          /> */}
        </div>
        <div className="description size-s">
          {Object.keys(item.data || {})
            .map((key) =>
              item.data[key].map((e) => formatI18nData(e?.name)).join(','),
            )
            ?.join(', ')}
        </div>
        <Button
          className="btn-remove p-0"
          onClick={() => onRemove(item)}
          size="small"
          type="text"
        >
          {t('button.remove')}
        </Button>
        <Button
          className="btn-edit p-0"
          onClick={() => onEdit(item)}
          size="small"
          type="text"
        >
          {t('button.edit')}
        </Button>
      </div>
      <div className="description">{formatMoney(totalPrice, 3, 'đ')}</div>
    </CartItemStyle>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};
