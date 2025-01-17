import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues:props.currentUser
  });

  setValue('name',props.currentUser.name);
  setValue('username',props.currentUser.username);

  const onSubmit = (data,e) => {
    e.target.reset();
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input 
        type="text" 
        name="name"
        ref={
          register({
            required: {value: true, message: 'Field Required'}
          })
        }
      />
      <div className="container text-center text-danger">
        {errors?.name?.message}
      </div>
      <label>Username</label>
      <input 
        type="text" 
        name="username"
        ref={
          register({
            required: {value: true, message: 'Field Required'}
          })
        }
      />
      <div className="container text-center text-danger">
        {errors?.username?.message}
      </div>
      <button>Edit user</button>
    </form>
  );
}

export default EditUserForm;
