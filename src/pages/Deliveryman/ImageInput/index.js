/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';
import { MdImage } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  useEffect(() => {
    setFile(defaultValue && defaultValue.id);
    setPreview(defaultValue && defaultValue.url);
  }, [defaultValue]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <div>
            <MdImage size={40} color="#ddd" />
            <p>Adicionar foto</p>
          </div>
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

/**
 *
 * const ImageInput = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue);

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

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

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
        {`FILE VALUE: ${file}`}
        <input
          type="file"
          ref={inputRef}
          onChange={handleChange}
          id="avatar"
          data-file={file}
          accept="image/*"
          {...rest}
        />
      </label>
    </Container>
  );
};
export default ImageInput;
 */
