type Error = {
  response: {
    data: {
      message: string;
    };
    status: number;
  };
};

export const handleError = (e: unknown) => {
  const {
    response: { data, status },
  } = e as unknown as Error;
  return { data, status };
};
