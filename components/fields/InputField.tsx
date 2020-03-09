import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldProps } from "formik";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps & InputProps) => {
  const errorMessages = touched[field.name] && errors[field.name];

  return (
    <div>
      <input {...field} {...props} />
      {errorMessages && <div style={{ color: "red" }}>{errorMessages}</div>}
    </div>
  );
};
