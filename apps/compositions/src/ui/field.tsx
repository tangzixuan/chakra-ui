import type { FieldProps as ChakraFieldProps } from "@chakra-ui/react"
import {
  Field as ChakraField,
  ErrorMessage,
  HelpText,
  Label,
  RequiredIndicator,
} from "@chakra-ui/react"
import { forwardRef } from "react"

export interface FieldProps extends Omit<ChakraFieldProps, "label"> {
  label?: React.ReactNode
  hint?: React.ReactNode
  error?: React.ReactNode
  asterisk?: boolean
}

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, hint, error, asterisk, ...rest } = props
    return (
      <ChakraField ref={ref} {...rest}>
        {label && (
          <Label>
            {label} {asterisk && <RequiredIndicator />}
          </Label>
        )}
        {children}
        {hint && <HelpText>{hint}</HelpText>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ChakraField>
    )
  },
)
