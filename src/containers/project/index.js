import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleGetProject,
    selectProject,
    handleDeleteProject,
    selectDeletedProject,
    handleUpdateProject,
    selectUpdatedProject
 } from '../../store/domains/projects';

 import Project from './Project';

 const mapStateToProps = state => ({
     selectedProject: selectProject(state),
     deletedProject: selectDeletedProject(state),
     updatedProject: selectUpdatedProject(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleGetProject,
    handleDeleteProject,
    handleUpdateProject
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Project);