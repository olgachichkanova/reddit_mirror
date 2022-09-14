import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import styles from './replyform.scss';

interface IReplyForm {
  author?: string;
}

export function ReplyForm({author}: IReplyForm) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState(`${author},`);
  
  useEffect(() => {
    ref.current?.focus();
    if(ref.current){
      ref.current.selectionStart = ref.current?.value.length;
      ref.current.selectionEnd = ref.current?.value.length;
    }
  }, [])
  
  
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea 
        id='#input'
        placeholder='Leave your comment'
        className={styles.input} 
        value={value} 
        onChange={handleChange}
        ref={ref}
      />
      <button type="submit" className={styles.button}>Comment</button>
    </form>
  );
}