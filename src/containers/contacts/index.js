import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    handleSendMessage, 
    selectContacts
 } from '../../store/domains/contacts';

 import Contacts from './Contacts';

 const mapStateToProps = state => ({
     selectedContacts: selectContacts(state)
 });

 const mapDispatchToProps = dispatch => bindActionCreators({
    handleSendMessage
 }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Contacts);