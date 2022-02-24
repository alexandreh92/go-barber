import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  useMemo,
} from 'react';
import { useField } from '@rocketseat/unform';

import { useSelector } from 'react-redux';
import { Container } from './styles';

const AvatarInput = () => {
  const { name } = useSelector((state) => state.user.profile);
  const { defaultValue, registerField } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  const parsedName = useMemo(
    () => name.replace(/\s+/g, '-').toLowerCase(),
    [name]
  );

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar',
        ref: ref.current,
        path: 'files[0]',
      });
    }
  }, [ref, registerField]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;

    e.preventDefault();
    setPreview(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            `https://avatars.dicebear.com/api/personas/${parsedName}.svg?b=%23c9c9c9`
          }
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
