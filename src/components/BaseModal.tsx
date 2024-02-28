'use client';
import { CSSProperties, useEffect, useState } from 'react';
import Modal, { Styles } from 'react-modal';
import CloseIcon from '../../public/closeIcon.svg';

export interface BasicModalProps extends React.PropsWithChildren {
  showModal: boolean;
  onClose: () => void;
  btnText: string;
  btnAction: () => void;
  customButtons?: boolean;
}

interface BasicModalStylesProps {
  className?: string;
  customExternalStyles?: CSSProperties;
}

const BaseModal = (props: BasicModalProps & BasicModalStylesProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.showModal);

  useEffect(() => {
    setIsOpen(props.showModal);
  }, [props.showModal]);

  const hideModal = () => {
    setIsOpen(false);
    props.onClose();
  };

  const customStyles: Styles = {
    overlay: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: 'rgba(3, 23, 52, 0.5)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      inset: 0,
      outline: 'none',
      position: 'initial',
      padding: '20px',
      borderRadius: '10px',

      ...props.customExternalStyles,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      onRequestClose={hideModal}
      className={props.className}
    >
      <div>
        <div className='mb-[15px] flex justify-end'>
          <CloseIcon className='cursor-pointer' onClick={hideModal} />
        </div>
        {props.children}
        {!props.customButtons && (
          <div className='flex justify-center gap-6'>
            <button
              onClick={() => {
                props.btnAction();
                hideModal();
              }}
              className='flex h-[42px] w-[170px] items-center justify-center rounded bg-[#3885E8] text-[18px] text-white'
            >
              {props.btnText}
            </button>
            <button
              onClick={hideModal}
              className='flex h-[42px] w-[170px] items-center justify-center rounded bg-[#BAB8B3] text-[18px] text-white'
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default BaseModal;
