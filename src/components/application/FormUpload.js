import firebase from 'api/firebase';
import { Upload, Form, Button } from 'antd';
import PropTypes from 'prop-types';
import { UploadOutlined } from '@ant-design/icons';

function UploadForm({ name, label, ...props }) {

  const formatImages = (files) =>
    files?.map((item) => item?.response || item?.url);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return formatImages(e);
    }
    return e && formatImages(e.fileList);
  };

  const customRequest = async ({ onSuccess, onError, file }) => {
    const uploadTask = firebase.storage().ref().child(`images/${file.name}`).put(file);
    
    uploadTask.on(
      'state_changed',
      () => {},
      error => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(url => {
          onSuccess(url, file); 
        })
      },
    )
  };

  return (
    <div>
      <Form.Item name={name} label="Image" getValueFromEvent={normFile} {...props}>
        <Upload
          name="logo"
          listType="picture"
          accept="image/*"
          customRequest={customRequest}
        >
          <Button icon={<UploadOutlined />}>
            Upload image
          </Button>
        </Upload>
      </Form.Item>
    </div>
  );
}

UploadForm.propTypes = {
  name: PropTypes.any,
  label: PropTypes.string,
};

export default UploadForm;
