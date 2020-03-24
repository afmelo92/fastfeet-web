/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';
import { MdImage } from 'react-icons/md';

import { Container } from './styles';

const ImageInput = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [preview, setPreview] = useState(defaultValue);
  const handlePreview = useCallback(e => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <div>
            <MdImage size={40} color="#DDDDDD" />
            <p>Adicionar foto</p>
          </div>
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={handlePreview}
          id="avatar"
          accept="image/*"
          {...rest}
        />
      </label>
    </Container>
  );
};
export default ImageInput;
