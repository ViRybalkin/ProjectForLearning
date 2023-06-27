const getQueryParams = (params: Partial<Record<string, string>>) => {
  const url = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.set(key, value);
    }
  });

  return `?${url.toString()}`;
};

export const addQueryParams = (params: Partial<Record<string, string>>) => {
  const queryString = getQueryParams(params);

  window.history.pushState(null, '', queryString);
};
