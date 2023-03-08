import React from 'react';
import { Modal } from 'widget';
import { LoginForm } from '../LoginForm';
import { LoginModalProps } from './LoginModal.types';

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <div>
      <Modal lazy isOpen={isOpen} onClose={onClose}>
        <LoginForm onClose={onClose} />
      </Modal>
    </div>
  );
};

export { LoginModal };
