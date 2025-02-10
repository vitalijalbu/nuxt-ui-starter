import { useInfiniteQuery } from "@tanstack/vue-query";
import { getList } from "../api";

export const useInfiniteList = ({
  resource,
  filters,
  sorters,
  meta,
  pagination = {},
}) => {
  return useInfiniteQuery({
    queryKey: [resource, filters, sorters, meta],
    queryFn: async ({ pageParam = pagination?.page || 1 }) => {
      const result = await getList({
        resource,
        pagination,
        filters,
        sorters,
        meta,
      });
      return result; // Ensure the result contains the expected structure
    },
    getNextPageParam: (lastPage) => {
      //console.log("🌱 lastPage in getNextPageParam:", lastPage);
      const { page, pageCount } = lastPage?.meta?.pagination || {};
      return page < pageCount ? page + 1 : undefined;
    },
  });
};
