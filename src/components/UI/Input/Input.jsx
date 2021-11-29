import React, { useRef, useImperativeHandle } from "react";
import styled from "styled-components";

const TheDiv = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  & label,
  & input {
    display: block;
  }

  & label {
    font-weight: bold;
    flex: 1;
    color: #464646;
    margin-bottom: 0.5rem;
  }

  & input {
    flex: 3;
    font: inherit;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  & input {
    border-color: ${(props) => !props.valid && "red"};
    background: ${(props) => !props.valid && "#fbdada"};
  }

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      activate: activate,
    };
  });

  return (
    <TheDiv valid={props.valid}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.type}
      />
    </TheDiv>
  );
});

export default Input;
