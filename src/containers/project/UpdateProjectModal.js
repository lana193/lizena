import React, { useState } from 'react';
import Modal from 'react-modal';

import UpdateProjectForm from './UpdateProjectForm';
import { SmallButton } from '../../elements';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2
  }
};

const UpdateProjectModal = (props) => {
  const { handleUpdateProject, projectId, selectedProject, handleGetProject } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  let subtitle;
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.padding = '20px';
    subtitle.style.fontFamily = 'Raleway, sans-serif';
    subtitle.style.textAlign = 'center';
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const handleSubmit = (values) => {
    if (values.photos || values.main_image) {
      const fd = new FormData();
      fd.append('project_name', values.project_name);
      fd.append('description', values.description);

      if (values.photos) {
        values.photos.forEach(photo => {
          fd.append('photos', photo);
        })
      }

      if (values.main_image) {
        values.main_image.forEach(photo => {
          fd.append('main_image', photo);
        })
      }
      handleUpdateProject(projectId, fd).then(handleGetProject(projectId));
    }

    else {
      handleUpdateProject(projectId, values).then(handleGetProject(projectId));
    }

    closeModal();
  }

  const initialValues = {
    project_name: selectedProject.project_name,
    description: selectedProject.description
  }

  return (
    <div>
      <SmallButton name='Редагувати роботу' onClick={openModal} />
      <Modal
        appElement={document.getElementById('app')}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel='Update Project Modal'
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Редагувати роботу</h2>
        <UpdateProjectForm onSubmit={handleSubmit} selectedProject={selectedProject} initialValues={initialValues} />
        <SmallButton danger name='Скасувати' onClick={closeModal} />
      </Modal>
    </div>
  );
}
export default UpdateProjectModal;