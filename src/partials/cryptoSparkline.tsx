import type { FC } from 'react';

import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

interface ComponentProp {
  // eslint-disable-next-line no-undef
  tokenData: ChartData[];
}

const CryptoSparkline: FC<ComponentProp> = ({ tokenData }) => {
  return (
    <ResponsiveContainer width='100%' height={80}>
      <AreaChart data={tokenData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip contentStyle={{ fontSize: '10px' }} />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CryptoSparkline;
