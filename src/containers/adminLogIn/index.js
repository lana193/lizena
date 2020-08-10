import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    logInAsAdmin, 
    selectAuth
 } from '../../store/domains/auth';

 import AdminWrapper from './AdminWrapper';

 const mapStateToProps = state => ({
     selectedUser: selectAuth(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    logInAsAdmin
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(AdminWrapper);