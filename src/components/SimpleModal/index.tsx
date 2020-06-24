import React from 'react';
import { Modal } from 'antd';
import styles from './style.less';

interface SimpleModalProps {
  modalVisible: boolean;
  onCancel: () => void;
  onOk?: () => void;
  title: string;
  footer?: string | React.ReactNode | null;
  width?: string | number;
  okText?: string | React.ReactNode;
  cancelText?: string | React.ReactNode;
}

const SimpleModal: React.FC<SimpleModalProps> = (props) => {
  const {
    modalVisible,
    onOk,
    onCancel,
    title,
    footer,
    width = 700,
    okText = '保存',
    cancelText = '取消',
  } = props;

  return (
    <Modal
      destroyOnClose
      title={title}
      visible={modalVisible}
      onOk={() => onOk()}
      onCancel={() => onCancel()}
      footer={footer}
      className={styles.tableListModal}
      width={width}
      okText={okText}
      cancelText={cancelText}
    >
      {props.children}
    </Modal>
  );
};

export default SimpleModal;
