import { Space, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export default function AddressCard({
  address,
  id,
  buildingDetail,
  apartmentDetail,
  specialInstruction,
  handleEdit,
  handleDelete,
}) {
  const { t } = useTranslation();

  return (
    <AddressCardWrapper>
      <Space direction="vertical" size={8} className="card-content">
        <div className="font-title card-title">{address}</div>
        {buildingDetail && <div className="card-title">{buildingDetail || ''}</div>}
        {apartmentDetail && <div className="card-title">{apartmentDetail || ''}</div>}
        {specialInstruction && <div className="card-title">{specialInstruction || ''}</div>}
      </Space>
      <div className="item-action-section">
        <Space size={10}>
          <div role="presentation" className="link" onClick={() => handleEdit(id)}>
            {t('button.edit')}
          </div>
          <Popconfirm
            title={t('address.confirmDelete')}
            onConfirm={() => handleDelete(id)}
            onCancel={() => {}}
            okText={t('button.remove')}
            cancelText={t('button.cancel')}
          >
            <div className="link">
              {t('button.remove')}
            </div>
          </Popconfirm>
        </Space>
      </div>
    </AddressCardWrapper>
  );
}

AddressCard.propTypes = {
  id: PropTypes.string,
  address: PropTypes.string,
  buildingDetail: PropTypes.string,
  apartmentDetail: PropTypes.string,
  specialInstruction: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

AddressCard.defaultProps = {
  handleEdit: () => {},
  handleDelete: () => {},
}

const AddressCardWrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  position: relative;

  border-left: 3px solid #000;
  display: flex;
  flex-direction: column;

  .card-content {
    flex-grow: 2;
  }

  .item-action-section {
    display: flex;
    justify-content: flex-end;
  }
`;
