import React from 'react';

import { sectionStyle } from './style';

interface IOwnProps {
  title: string;
  children: React.ReactNode;
}

interface IProps extends IOwnProps {}

export const Section: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className={sectionStyle}>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};
