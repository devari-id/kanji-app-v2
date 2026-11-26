export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export type TPagination = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
