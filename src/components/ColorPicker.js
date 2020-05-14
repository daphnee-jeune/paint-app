import React from 'react'

const ColorPicker = ({ colors = [], activeColor, setActiveColor }) => {
  if (!colors.length) return null
  return (
    <fieldset className="color-picker">
      {colors.map((color, i) => (
        <label key={i}>
          <input
            name="color"
            type="radio"
            value={color}
            checked={activeColor === color}
            onChange={() => setActiveColor(color)}
          />
          <span style={{ background: color }} />
        </label>
      ))}
    </fieldset>
  )
}

export default ColorPicker