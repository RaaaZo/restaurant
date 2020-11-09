import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Input } from "components/atoms/Input";
import { Label } from "components/atoms/Label";

const StyledLabel = styled(Label)`
  margin: 10px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const FormCell = ({ id, name, type }) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{name}</StyledLabel>
      <StyledInput name={id} id={id} type={type} placeholder={id} />
    </>
  );
};

FormCell.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string
};

FormCell.defaultProps = {
  type: "text"
};

export default FormCell;
