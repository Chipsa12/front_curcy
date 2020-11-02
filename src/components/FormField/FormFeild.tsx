import React, {useState} from "react";
import styles from './FormField.modules.pcss'

type FormFieldProps = {
  labelClassName ?: string;
  name ?: string;
  label ?: string;
  type ?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className ?: string;
}

const FormField = (props: FormFieldProps): React.ReactElement =>{
  const {labelClassName, name, label, type='text', placeholder, value, className, onChange} = props;

  const handleChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    const value = ev.currentTarget.value;
    onChange(value);
  }

  return (
    <div className={styles.className}>
      <p>{name}</p>
      <label className={labelClassName}>{label}</label>
      <input type={type}  placeholder={placeholder} value = {value} onChange={handleChange}/>
    </div>
  );

};

export default FormField;
