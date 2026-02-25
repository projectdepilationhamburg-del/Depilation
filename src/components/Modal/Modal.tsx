
import type { FC } from 'react';
import { ModalOverlay, ModalContent} from './styles';
import type { ModalProps } from './types';

const Modal: FC<ModalProps> = ({ isOpen, children, onClose}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose} >
      <ModalContent onClick={(e)=>{ e.stopPropagation()}}>
         {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;