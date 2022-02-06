import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

const AvatarInput = () => {
  const { defaultValue, registerField } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar',
        ref: ref.current,
        path: 'files[0]',
      });
    }
  }, [ref, registerField]);

  function handleChange(e) {
    e.preventDefault();
    setPreview(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={preview || 'https://api.adorable.io/avatars/120/default.png'}
          alt=""
        />
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
};

export default AvatarInput;
