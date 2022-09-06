import React from 'react'
import { useTranslation } from 'react-i18next';

export default function NumberInput({ className }) {
  const [t] = useTranslation();
  
  const numberInputChange = e => {
    // const value = e.target.value;

    // if (value.length < 2) {
    //   e.target.value =
    //     value[0] !== "+"
    //     ? value : value.slice(0, -1)
    // } else if (value.length < 3) {
    //   e.target.value =
    //     value[1] === "9"
    //     ? value : value.slice(0, -1)
    // } else if (value.length < 4) {
    //   e.target.value =
    //     value[2] === "8"
    //     ? value : value.slice(0, -1)
    // } else {
    //   e.target.value = isNaN(+value[value.length - 1])
    //   ? value.slice(0, -1)
    //   : value
    // }
  }

  return (
    <input
      type="number"
      placeholder={t("contact.phone")}
      name='phone_number'
      className={className}
      minLength={13}
      maxLength={13}
      required
      onChange={numberInputChange}
    />
  )
}
