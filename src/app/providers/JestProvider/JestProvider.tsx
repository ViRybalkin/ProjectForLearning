import { FC, Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';

const JestProvider: FC<any> = ({ children }) => {
  return (
    <MemoryRouter>
      <Suspense fallback="">
        { children }
      </Suspense>
    </MemoryRouter>
  );
};

export { JestProvider };
