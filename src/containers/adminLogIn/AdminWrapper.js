import React from 'react';
import AdminForm from './AdminForm';

const AdminWrapper = (props) => {
  const { logInAsAdmin, selectedUser} = props;
  console.log(9999, selectedUser)
  const submit = (values) => {
    console.log(222, values)
    logInAsAdmin(values);
  }
    return (
      <AdminForm onSubmit={submit} selectedUser={selectedUser} />
    )
}

export default AdminWrapper;