const USERS = "users";

export const usersQueryKey = (page: number, searchQuery: string) => {
  return [USERS, page, searchQuery];
};
