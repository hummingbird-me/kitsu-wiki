import React, { ReactElement, useState } from 'react';

// Styles
import { MediaSelector } from '../../styles/components/select';
// Media
import { ReactComponent as CaretDownFill } from '../../assets/caretDownFill.svg';

const useDropdown = (
  label: string,
  defaultState: string,
  options: Array<string>
): [string, any, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = (): ReactElement => (
    <label htmlFor={id}>
      {label}
      <MediaSelector
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
          </option>
        ))}
      </MediaSelector>
      <CaretDownFill />
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
