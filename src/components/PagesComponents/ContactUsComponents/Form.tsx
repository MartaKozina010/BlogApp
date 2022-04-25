import React, { useContext } from "react"
import { Formik, Form, FieldArray, Field } from "formik"
import * as Yup from "yup"
import MuiAlert, { AlertProps } from "@mui/material/Alert"
import Button from "@mui/material/Button"
import { CheckboxWithLabel, Select, TextField } from "formik-mui"
import { FormControl, MenuItem } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"
import styled from "styled-components"
import { DarkThemeContext } from "../../DarkMode/DarkModeProvider"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const FormBox = styled.div`
  width: 100%;
  max-width: 600px;
`

const SubmitBox = styled.div`
  display: flex;
  justify-content: space-between;
`

type Props = {
  nameAndSurname: string
  email: string
  phone: string
  question: [
    {
      type?: "design" | "planning" | "timeline" | "offer" | "other"
      description: string
    }
  ]
  notes: string
  termsAndConditions: boolean
}

const initialValues: Props = {
  nameAndSurname: "",
  email: "",
  phone: "",
  question: [
    {
      description: "",
    },
  ],
  notes: "",
  termsAndConditions: false,
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object({
  nameAndSurname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email addresss`").required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number")
    .required("Required"),
  question: Yup.array().of(
    Yup.object().shape({
      type: Yup.string()
        .required("Required")
        .oneOf(
          ["design", "planning", "timeline", "offer", "other"],
          "Select from the list"
        ),
      description: Yup.string()
        .max(2000, "You've reached maximum length")
        .required("Required"),
    })
  ),
  notes: Yup.string().max(2000, "You've reached maximum length"),
  termsAndConditions: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must accept the terms and conditions."),
})

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
})

export const SignupForm = () => {
  const isDarkMode = useContext(DarkThemeContext).isDarkMode

  const [open, setOpen] = React.useState(false)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          The message has been sent!
        </Alert>
      </Snackbar>
      <FormBox>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false)
            }, 400)
            setOpen(true)
          }}
          render={({ values }) => (
            <Form>
              <Field
                component={TextField}
                name="nameAndSurname"
                type="text"
                label="Name and surname"
                placeholder="John Kowalsky"
                style={{ width: "100%" }}
              />
              <Field
                component={TextField}
                name="email"
                type="text"
                label="E-mail"
                placeholder="john@kowalsky.com"
                style={{ width: "100%" }}
              />
              <Field
                component={TextField}
                name="phone"
                type="text"
                label="Phone"
                placeholder="123654789"
                style={{ width: "100%" }}
              />
              <FieldArray
                name="question"
                render={(arrayHelpers) => (
                  <div>
                    {values.question.map((question, index) => (
                      <div key={index}>
                        <FormControl fullWidth>
                          <Field
                            component={Select}
                            type="text"
                            name={`question.${index}.type`}
                            label="Select"
                          >
                            <MenuItem value="">
                              Select type of question
                            </MenuItem>
                            <MenuItem value="design">Design</MenuItem>
                            <MenuItem value="planning">Planning</MenuItem>
                            <MenuItem value="timeline">Timeline</MenuItem>
                            <MenuItem value="offer">Offer</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </Field>
                        </FormControl>
                        <Field
                          component={TextField}
                          name={`question.${index}.description`}
                          type="text"
                          placeholder="What's your expectation?"
                          multiline
                          rows={4}
                          style={{ width: "100%" }}
                          label="Description"
                        />
                        {index > 0 && (
                          <Button
                            variant="text"
                            onClick={() => arrayHelpers.remove(index)}
                            size="small"
                          >
                            ✕
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      variant="text"
                      onClick={() =>
                        arrayHelpers.push({ type: "", description: "" })
                      }
                      size="small"
                    >
                      add+
                    </Button>
                  </div>
                )}
              />
              <Field
                component={TextField}
                name="notes"
                type="text"
                placeholder="any other questions?"
                multiline
                rows={4}
                label="More"
                style={{ width: "100%" }}
              />
              <SubmitBox>
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="termsAndConditions"
                  Label={{ label: "I accept terms and conditions" }}
                />
                <Button variant="outlined" type="submit">
                  Submit
                </Button>
              </SubmitBox>
            </Form>
          )}
        />
      </FormBox>
    </ThemeProvider>
  )
}
