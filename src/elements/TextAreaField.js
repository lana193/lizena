import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  .sc-AxhUy yxHEJ {
    background-color: white;
  }
`;

export const TextAreaField = ({ input, label, placeholder, type, meta: { touched, error }}) => {
  console.log(234, input)
  return (
    <div>
      <label>{label}</label>
      <div>
        <StyledTextArea {...input} placeholder={placeholder} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
}
