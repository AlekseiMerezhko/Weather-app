import React, { useRef } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import { Formik } from 'formik'
import camelCaseKeys from 'camelcase-keys'
import ReactRouterPropTypes from 'react-router-prop-types'
import PropTypes from 'prop-types'

import {
  Container,
  Title,
  Card,
  Form,
  FormGroup,
  Input,
  Button,
  FlexboxContainer,
  TextArea,
  FormStatusMessage,
  Spinner,
  Recaptcha
} from 'components'

import { ContactUsFormMessages, EmailFieldMessages, NameFieldMessages } from 'defineMessages'
import api from 'api'
import { onChangeCaptcha, onTouchCaptcha, onResetCaptcha, errorStatusBuilder } from 'helpers'
import { ContactUsFormShema } from 'validationShemas'

function ContactUsForm({ history, initialValues }) {
  const intl = useIntl()
  const validationSchema = ContactUsFormShema(intl)
  const captchaRef = useRef()
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={function handleSubmit(values, { setStatus, setErrors, setSubmitting }) {
        api
          .sendContactUs(values)
          .then(() => {
            setTimeout(() => history.push('/'), 4000)
            setSubmitting(false)
            setStatus({
              success: {
                title: intl.formatMessage(ContactUsFormMessages.succesMessageTitle),
                message: intl.formatMessage(ContactUsFormMessages.successMessageNotification)
              },
              error: ''
            })
            onResetCaptcha(captchaRef)
          })
          .catch(function catchTheError({ errors, message }) {
            setSubmitting(false)
            setStatus(errorStatusBuilder({ errors, message }))
            errors && setErrors(camelCaseKeys(errors))
            onResetCaptcha(captchaRef)
            setTimeout(() => setStatus({}), 4000)
          })
      }}
      render={function ContactUsFormRender({
        status,
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        setTouched,
        setFieldValue
      }) {
        function handleCaptchaOnChange(value) {
          if (value) {
            onTouchCaptcha(touched, setTouched)
            onChangeCaptcha(value, setFieldValue)
          }
        }
        return (
          <Container size="xs">
            <Title>
              <FormattedMessage id="ContactUsForm.title" defaultMessage="Contact Us" />
            </Title>
            <FormStatusMessage status={status} />
            <Card>
              <Form onSubmit={handleSubmit}>
                {isSubmitting && <Spinner />}
                <FormGroup
                  label={intl.formatMessage(NameFieldMessages.nameLabel)}
                  labelFor="name"
                  helperText={touched.name && errors.name}
                  intent={touched.name && errors.name ? 'danger' : 'none'}
                >
                  <Input
                    id="name"
                    type="text"
                    placeholder={intl.formatMessage(NameFieldMessages.nameInputPlaceholder)}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="name-input"
                  />
                </FormGroup>
                <FormGroup
                  label={intl.formatMessage(EmailFieldMessages.emailFormInputLabel)}
                  labelFor="email"
                  helperText={touched.email && errors.email}
                  intent={touched.email && errors.email ? 'danger' : 'none'}
                >
                  <Input
                    id="email"
                    type="text"
                    placeholder={intl.formatMessage(EmailFieldMessages.emailFormInputPlaceholder)}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="email-input"
                  />
                </FormGroup>
                <FormGroup
                  label={intl.formatMessage(ContactUsFormMessages.conditionsFormCheckboxLabel)}
                  labelFor="conditions"
                  helperText={touched.conditions && errors.conditions}
                  intent={touched.conditions && errors.conditions ? 'danger' : 'none'}
                  containerClasses="flex flex-row-reverse justify-between items-center flex-wrap"
                  labelClasses="inline"
                  contentClasses="mb-2 inline flex-none items-center"
                >
                  <Input
                    id="conditions"
                    type="checkbox"
                    value={values.conditions}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="focus:outline-none focus:shadow-outline border border-red align-middle"
                    data-testid="conditions-input"
                  />
                </FormGroup>
                <FormGroup
                  label={intl.formatMessage(ContactUsFormMessages.messageFormTextAreaLabel)}
                  labelFor="message"
                  helperText={touched.message && errors.message}
                  intent={touched.message && errors.message ? 'danger' : 'none'}
                >
                  <TextArea
                    id="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    data-testid="message-textarea"
                  />
                </FormGroup>
                <FormGroup
                  labelFor="recaptcha_token"
                  helperText={touched.recaptcha_token && errors.recaptcha_token}
                  intent={touched.recaptcha_token && errors.recaptcha_token ? 'danger' : 'none'}
                  data-testid="message-recaptcha"
                >
                  <Recaptcha onChange={handleCaptchaOnChange} captchaRef={captchaRef} />
                </FormGroup>
                <FlexboxContainer>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !!Object.keys(errors).length}
                    onClick={handleSubmit}
                    data-testid="submit-contact-us-form-button"
                  >
                    <FormattedMessage
                      id="ContactUsForm.buttons.submitForm"
                      defaultMessage="Submit"
                    />
                  </Button>
                </FlexboxContainer>
              </Form>
            </Card>
          </Container>
        )
      }}
    />
  )
}

ContactUsForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conditions: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    recaptcha_token: PropTypes.string.isRequired
  })
}

ContactUsForm.defaultProps = {
  initialValues: {
    name: '',
    email: '',
    conditions: false,
    message: '',
    recaptcha_token: ''
  }
}
export default ContactUsForm
