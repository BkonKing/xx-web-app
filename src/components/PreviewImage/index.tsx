import React, { FC, useState } from 'react';
import { Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import styles from './style.less'

interface PreviewImage {
  src: string;
  alt: string;
  width?: string;
}

const PreviewImage: FC<PreviewImage> = (props) => {
  const { src, alt = '图片', width = '100px' } = props
  const [previewVisible, setPreviewVisible] = useState<boolean>(false)
  const showModal = () => setPreviewVisible(true);
  const handleCancel = () => setPreviewVisible(false);

  return (
    <div className={styles.preview_image_box}>
      <div className={styles.image} style={{ 'width': width }}>
        <img width="100%" src={src} alt={alt} />
        {src ?
          <>
            <EyeOutlined className={styles.icon} onClick={showModal} />
            <Modal
              visible={previewVisible}
              title="预览"
              footer={null}
              onCancel={handleCancel}
            >
              <img alt={`${alt}预览`} style={{ width: '100%' }} src={src} />
            </Modal></> : null}
      </div>
    </div>
  )
}

export default PreviewImage
