import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.scss';
import {
  Form,
  Field,
  ErrorMessage,
} from 'formik';

type Props = {
  isFormInvalid?: boolean;
  handleCommentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
export function CommentForm({isFormInvalid, handleCommentChange}: Props) {
 
  return (
    <Form className={styles.form}>
      <label htmlFor="comment" className={styles.inputLabel}>
            <Field
                id='#input'
                placeholder='Leave your comment'
                className={styles.input}  
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleCommentChange(e)}
                name="comment"
                as="textarea"
                aria-invalid={isFormInvalid}
            />
            <ErrorMessage name="comment" />
        </label>
      <button type="submit" className={styles.button}>Comment</button>
    </Form>
  );
}