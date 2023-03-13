import React, { lazy, Suspense } from 'react';
import { Modal } from 'widget';
import { Loader } from 'shared';
import { LoginModalProps } from './LoginModal.types';

const LoginForm = lazy(() => import('../LoginForm/LoginForm'));

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <div>
      <Modal lazy isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
          <LoginForm onClose={onClose} />
        </Suspense>
      </Modal>
    </div>
  );
};

export { LoginModal };
