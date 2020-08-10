import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    logOutUser, 
    selectAuth
 } from '../../store/domains/auth';

 import AdminLogOut from './AdminLogOut';

 const mapStateToProps = state => ({
     selectedUser: selectAuth(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    logOutUser
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(AdminLogOut);