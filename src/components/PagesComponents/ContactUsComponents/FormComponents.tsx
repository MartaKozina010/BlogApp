import React from "react"
import { useField } from "formik"
import Checkbox from "@mui/material/Checkbox"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"

type MyTextInputProps = {
  label: string
  name: string
} & React.HTMLProps<HTMLInputElement>

export const MyTextInput: React.FC<MyTextInputProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props)
  return (
    <>
      <InputLabel
        id="demo-simple-select-label"
        htmlFor={props.id || props.name}
      >
        {label}
      </InputLabel>
      <input {...field} {...props} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  )
}

type MyCheckboxProps = {
  name: string
}

export const MyCheckbox: React.FC<MyCheckboxProps> = ({
  children,
  ...props
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } }

  const [field, meta] = useField({ ...props, type: "checkbox" })
  return (
    <>
      <Checkbox {...label} {...field} {...props} size="small" />
      {children}
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  )
}

type MySelectProps = {
  label: string
  name: string
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>

export const MySelect: React.FC<MySelectProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Box sx={{ minWidth: 200 }}>
      <InputLabel
        id="demo-simple-select-label"
        htmlFor={props.id || props.name}
      >
        {label}
      </InputLabel>
      <select {...field} {...props} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </Box>
  )
}

type MyTextareaProps = {
  label: string
  name: string
} & React.HTMLProps<HTMLTextAreaElement>

export const MyTextarea: React.FC<MyTextareaProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <InputLabel
        id="demo-simple-select-label"
        htmlFor={props.id || props.name}
      >
        {label}
      </InputLabel>
      <textarea {...field} {...props} />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  )
}
