import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../CommentForm';
import { RootState, updateComment } from '../store/reducer';
import {
  Formik,
  FormikValues,
} from 'formik';

interface ICommentFormValues {
  comment: string;
}
interface ICommentFormErrors {
  comment?: string;
}

export function CommentFormContainer() {
  const comment = useSelector<RootState, string>(state => state.commentText);
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef<HTMLTextAreaElement>(null);

  const initialValues:ICommentFormValues = {
    comment: comment,
  }

  const initialErrors:ICommentFormErrors = {}

  function handleSubmit() {
      console.log('Form send');
  }
  
  useEffect(() => {
    ref.current?.focus();
  }, [])
  
  
  function validationFormik(values:FormikValues) {
    const errors = initialErrors;
    if (values.comment.length <= 3) {
      errors.comment = 'Please, enter more than 3 symbols';
      setIsFormInvalid(true);
    } else {
      setIsFormInvalid(false);
    }
    return errors;
  }

  function handleCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value));
  }
  
  return (
    <Formik
      initialValues={initialValues}
      initialErrors={initialErrors}
      onSubmit={(values) => handleSubmit()}
      validate={(values) => validationFormik(values)}
      enableReinitialize={true}
    >
      <CommentForm
        handleCommentChange={handleCommentChange}
        isFormInvalid={isFormInvalid}
      />
    </Formik>
  );
}