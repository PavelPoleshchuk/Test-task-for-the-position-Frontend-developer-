import React from 'react';
import styles from './Modal.module.css';

interface IModalProps {
  children: React.ReactNode;
  getClickCloseModal: () => void;
}
const Modal = ({ children, getClickCloseModal }: IModalProps) => {
  return (
    <>
      <div onClick={getClickCloseModal} className={styles.modal}></div>
      <div className={styles.card}>{children}</div>;
    </>
  );
};

export default Modal;
