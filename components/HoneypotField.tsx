/**
 * Honeypot Field Component
 * Hidden field to detect bots - legitimate users won't see or fill this
 * If filled, the submission is from a bot
 */
'use client';

import { useState } from 'react';

interface HoneypotFieldProps {
  name?: string;
}

export function HoneypotField({ name = 'website_url' }: HoneypotFieldProps) {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
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
