import React from 'react';

import { CurrencyItem } from '@/components';

interface IOwnProps {
  codes: string[];
}

interface IProps extends IOwnProps {}

export const CurrencyList: React.FC<IProps> = ({ codes }) => {
  return (
    <div>
      {codes.map(c => <CurrencyItem key={c} code={c} />)}
    </div>
  );
};
