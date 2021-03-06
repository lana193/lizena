import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleGetObjects,
    handleCreateObject,
    selectObjects
 } from '../../store/domains/objects';

 import Objects from './Objects';

 const mapStateToProps = state => ({
     selectedObjects: selectObjects(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleGetObjects,
    handleCreateObject
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Objects);