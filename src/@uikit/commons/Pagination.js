import { Pagination as AntdPagination } from 'antd';
import styled from 'styled-components';

const Pagination = props => {
  const itemRender = (_current, type, originalElement) => {
    const { current, pageSize, onChange } = props || {};
    if (type === 'prev') {
      return <span role="presentation" onClick={() => onChange(current - 1, pageSize)} style={{ lineHeight: '30px', display: 'block'}}>Previous</span>;
    }
    if (type === 'next') {
      return <span role="presentation" onClick={() => onChange(current + 1, pageSize)} style={{ lineHeight: '30px', display: 'block'}}>Next</span>;
    }
    return originalElement;
  }
  return (
    <PaginationWrapper>
      <AntdPagination
        showSizeChanger={false}
        itemRender={itemRender}
        {...props}
      />
    </PaginationWrapper>
)}

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  .ant-pagination-item {
    border: none;
  }

  .ant-pagination-disabled {
    display: none;
  }

  .ant-pagination-item-active {
    border: 1px solid #000;
    border-radius: 50%;

    a {
      color: #000;
    }
  }
`

export default Pagination;
