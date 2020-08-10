import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { SmallButton } from '../../elements';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const DeleteObjectModal = (props) => {
    const { handleDeleteObject, objectId } = props;
    
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true);
    }
    
    let subtitle;
    const afterOpenModal = () => {
      subtitle.style.padding = '20px';
      subtitle.style.fontFamily = 'Raleway, sans-serif';
      subtitle.style.textAlign = 'center';
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }
    
    const onModalSubmit = (ObjectId) => {
        handleDeleteObject(ObjectId);
        closeModal();
        window.location.replace('/for-sale');
    }
    
    return (
        <div>
          <SmallButton danger name='Видалити' onClick={openModal}/>
          <Modal
            appElement={document.getElementById('app')}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel='Delete Object Modal'
          >
            <h2 ref={_subtitle => (subtitle = _subtitle)}>Ви впевнені, що хочете видалити об'єкт?</h2>
            <ButtonWrapper>
              <SmallButton danger width='320px' name='Так' onClick={()=> onModalSubmit(objectId)}/>
              <SmallButton width='320px' name='Ні' onClick={closeModal}/>
            </ButtonWrapper>
          </Modal>
        </div>
  );
}

export default  DeleteObjectModal;