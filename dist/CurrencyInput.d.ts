declare module "@unicef/material-ui-currency-textfield"

import * as React from "react"

export interface CurrencyInputProps {
  type?: "text" | "tel" | "hidden"
  variant?: string
  id?: string
  className?: string
  style?: object
  disabled?: boolean
  label?: string
  textAlign?: "right" | "left" | "center"
  tabIndex?: number
  autoFocus?: boolean
  placeholder?: string
  value?: string | number
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  onFocus?(): void
  onBlur?(): void
  onKeyPress?(): void
  onKeyUp?(): void
  onKeyDown?(): void
  currencySymbol?: string
  margin?: string
  decimalCharacter?: string
  decimalCharacterAlternative?: string
  decimalPlaces?: number
  decimalPlacesShownOnBlur?: number
  decimalPlacesShownOnFocus?: number
  digitGroupSeparator?: string
  leadingZero?: "allow" | "deny" | "keep"
  maximumValue?: string
  minimumValue?: string
  negativePositiveSignPlacement?: "l" | "r" | "p" | "s"
  negativeSignCharacter?: string
  outputFormat?: "string" | "number"
  selectOnFocus?: boolean
  positiveSignCharacter?: string
  readOnly?: boolean
  fullWidth?: boolean
  disableUnderline?: boolean
  preDefined?: object
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
}

export default class CurrencyInput extends React.Component<
  CurrencyInputProps,
  any
> {}
