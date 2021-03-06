import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleGetObject,
    selectObject,
    handleDeleteObject,
    selectDeletedObject,
    handleUpdateObject,
    selectUpdatedObject
 } from '../../store/domains/objects';

 import ObjectForSale from './ObjectForSale';

 const mapStateToProps = state => ({
     selectedObject: selectObject(state),
     deletedObject: selectDeletedObject(state),
     updatedObject: selectUpdatedObject(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleGetObject,
    handleDeleteObject,
    handleUpdateObject
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(ObjectForSale);