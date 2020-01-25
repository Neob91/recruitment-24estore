import React from 'react';

import { CurrencyItem } from '@/components';

interface OwnProps {
  codes: string[];
}

type Props = OwnProps;

export const CurrencyList: React.FC<Props> = ({ codes }) => {
  return (
    <div>
      {codes.map(c => (
        <CurrencyItem key={c} code={c} />
      ))}
    </div>
  );
};
