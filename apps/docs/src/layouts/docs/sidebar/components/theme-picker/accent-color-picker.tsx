import { ThemePickerRadioGroup } from "./theme-picker-radio-group";
import type { Theme } from "~/utils/theme";

import "./accent-picker.css";

function AccentColorPicker() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brand",
  ] satisfies Theme["color"][];

  return (
    <ThemePickerRadioGroup
      items={colors.map((color) => {
        return {
          value: color,
          render: (
            <div data-accent-color={color} className="accent-picker">
              <span className="indicator" />
              {color}
            </div>
          ),
        };
      })}
      label="Color"
      themeKey="color"
      selector="data-accent-color"
    />
  );
}

export { AccentColorPicker };
