import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  placeHolder,
  idFor,
  action,
  name,
}) {
  return (
    <div>
      <label htmlFor={ idFor }>
        <br />
        <input
          className="input-search"
          type={ type }
          placeholder={ placeHolder }
          id={ idFor }
          onChange={ action }
          name={ name }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  idFor: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
