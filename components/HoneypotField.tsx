/**
 * Honeypot Field Component
 * Hidden field to detect bots - legitimate users won't see or fill this
 * If filled, the submission is from a bot
 */
'use client';

import { useState } from 'react';

interface HoneypotFieldProps {
  name?: string;
  onChange?: (value: string) => void;
}

export function HoneypotField({ name = 'website_url', onChange }: HoneypotFieldProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      tabIndex={-1}
      autoComplete="off"
      style={{
        position: 'absolute',
        left: '-5000px',
        opacity: 0,
        height: 0,
        width: 0,
        zIndex: -1,
      }}
      aria-hidden="true"
    />
  );
}
