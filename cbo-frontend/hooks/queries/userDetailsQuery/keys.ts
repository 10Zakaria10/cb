const USER_DETAILS = "userDetails";

export const userDetailsQueryKey = (id: string) => {
  return [USER_DETAILS, id];
};
