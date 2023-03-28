/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ModalContainer, Overlay } from './styles';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({children, isOpen, onClose}: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <Overlay>
      <ModalContainer>
        <header>
          <button onClick={onClose}>X</button>
        </header>
        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')!
  );
}