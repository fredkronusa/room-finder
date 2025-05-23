import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  style: React.CSSProperties;
  popoverModal?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, popoverModal }) => {
  if (!isOpen) return null;

  return (
    <div className={popoverModal ? "modal-popover": "modal-overlay" } >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;