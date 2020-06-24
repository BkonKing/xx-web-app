import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img: Blob, callback: Function) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file: File) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('必须上传JPG/PNG格式文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片必须小于2MB!');
  }
  return isJpgOrPng && isLt2M;
}

interface UploadProps {
  action: string;
  value: string;
  onChange?: ((value: any) => void);
}

interface UploadState {
  imageUrl: string;
  loading: boolean;
}

class UploadImage extends React.Component<UploadProps, UploadState> {
  constructor(props: UploadProps) {
    super(props);
    this.state = {
      imageUrl: this.props.value,
      loading: false,
    };
  }

  handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // 在现实世界中从响应中获取此url.
      getBase64(info.file.originFileObj, (imageUrl: string) => {
        const { onChange } = this.props
        // eslint-disable-next-line no-unused-expressions
        onChange && onChange(imageUrl);
        this.setState({
          imageUrl,
          loading: false,
        });
      });
    }
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">上传</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        accept="jpg,png"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={this.props.action}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {this.state.imageUrl ? (
          <img src={this.state.imageUrl} alt="图片" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

export default UploadImage;
