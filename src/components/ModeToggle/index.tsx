import './modeToggle.scss';

import { useTheme } from '@hooks/index';
import { Moon, Sun } from 'lucide-react';
import React from 'react';

export const ModeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="mode-toggle-container">
      <div
        className="mode-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <Moon /> : <Sun />}
      </div>
    </div>
  );
};
