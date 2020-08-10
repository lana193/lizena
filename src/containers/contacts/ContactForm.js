import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';

import { InputField, TextAreaField, SmallButton } from '../../elements';

const ContactForm = (props) => {
    const { handleSubmit }  = props;
    return (
        <div>
            <Form 
                onSubmit={handleSubmit}
                >
                <div className='form-container'>
                    <Field
                        name='user_name'
                        component={InputField}
                        type='text'
                        placeholder="Ваше ім'я"
                    />
                    <Field
                        name='user_email'
                        component={InputField}
                        type='email'
                        placeholder='Ваш email'
                    />
                    <Field
                        name='phone_number'
                        component={InputField}
                        type='number'
                        placeholder='Ваш номер телефону'
                    />
                    <Field
                        name='text'
                        component={TextAreaField}
                        type='textarea'
                        placeholder='Текст повідомлення'
                    />
                       {/* <Field
                        name='call_me'
                        component={InputField}
                        type='checkbox'
                        label='Перетелефонуйте мені у відповідь'
                    /> */}
                </div>
                <div className='button-wrapper'>
                    <SmallButton name='Надіслати' type='submit'  />
                </div>
            </Form>
        </div>
    );
}

export default reduxForm({
    form: 'contact-form',
    // initialValues: { call_me: false }
})(ContactForm);
