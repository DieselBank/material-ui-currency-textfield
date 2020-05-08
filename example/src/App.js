import React from "react"
import { CurrencyInput } from "@unicef/material-ui-currency-textfield"
import { Button } from "@material-ui/core"

export default function App() {
  const [value, setValue] = React.useState(99)
  const error = value < 100

  function resetValue() {
    setValue(0)
  }

  return (
    <React.Fragment>
      <CurrencyInput
        label="Amount"
        value={value}
        currencySymbol="$"
        maximumValue={"100000000000000000"}
        autoFocus
        onChange={(e, value) => setValue(value)}
        error={error}
        helperText={"minimum number is 100"}
        decimalCharacter="."
        digitGroupSeparator=","
        fullWidth
        disableUnderline={false}
      />
      <Button onClick={resetValue}>Reset</Button>
    </React.Fragment>
  )
}
