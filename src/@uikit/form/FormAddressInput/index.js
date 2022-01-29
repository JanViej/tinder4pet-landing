import usePlacesAutocomplete, {
  getLatLng,
  getGeocode,
} from 'use-places-autocomplete';
import { AutoComplete, Form } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const AddressInput = ({
  debounce = 600,
  name,
  form,
  ...props
}) => {
  const { t } = useTranslation();
  const [, setCoordinates] = useState({})

  const {
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete({
    debounce,
  });
  const handleChange = (e) => {
    setValue(e);
    form?.setFieldsValue({
      [name]: e,
    });
  };

  const handleSelect = async (e) => {
    form?.setFieldsValue({
      [name]: e,
    });
    try {
      const results = await getGeocode({ address: e });
      const coordinates = await getLatLng(results[0]);
      setCoordinates({
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      })
    } catch (error) {
      console.log(error);
    }
  };

  const renderSuggestions = data.map((suggestion) => {
    const {
      // eslint-disable-next-line
      structured_formatting: { main_text, secondary_text },
    } = suggestion;
    // eslint-disable-next-line
    return {
      value: `${main_text} ${secondary_text}`,
    };
  });

  return (
    <Form.Item
      name={name}
      {...props}
    >
      <AutoComplete
        options={status === 'OK' && renderSuggestions}
        onSearch={handleChange}
        onChange={handleSelect}
        placeholder={t(`products.location.placeholder.delivery`)}
        // {...cart?.orderInfo?.address && {
        //   value: cart?.orderInfo?.address,
        // }}
      />
    </Form.Item>
    // <AddressInputWrapper>

      
    // </AddressInputWrapper>
  );
};

AddressInput.propTypes = {
  debounce: PropTypes.number,
  menuType: PropTypes.string,
  name: PropTypes.string,
  form: PropTypes.object,
};

const AddressInputWrapper = styled.div`
  ${'' /* width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid #ECECEC;
  transition: border-color ease 0.3s;

  &:hover, &:focus {
    border-color: #000;
  }

  & > * {
    margin: 0 5px;
  } */}

  .ant-select {
    margin: 0 5px;
    width: 100%;
    ${'' /* border: none; */}

    .ant-select-selector {
      ${'' /* border: none !important; */}
      box-shadow: none !important;

      &:focus {
        box-shadow: none !important;
      }
    }
  }
`;

export default AddressInput;
