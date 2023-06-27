import { lazy, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { LoginModalProps } from './LoginModal.types';

const LoginForm = lazy(() => import('../LoginForm/LoginForm'));

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <div>
      <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}>
        <Suspense fallback={<Loader />}>
          <LoginForm onClose={onClose} />
        </Suspense>
      </Modal>
    </div>
  );
};

export { LoginModal };
