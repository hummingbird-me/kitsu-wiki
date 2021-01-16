import React, { ReactElement, useState } from 'react';

// Styles
import { Select } from '../../styles/components/ui/select';
// Media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';

const useDropdown = (
  label: string,
  defaultState: string,
  options: Array<string>
): [string, any, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = (): ReactElement => (
    <>
      <label htmlFor={id}>{label}</label>
      <Select
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
      </Select>
      <FontAwesomeIcon icon={faCaretDown} />
    </>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
