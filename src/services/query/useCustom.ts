import { useQuery } from "@tanstack/vue-query";
import { custom } from "../api";

export const useCustom = ({
  url,
  method,
  filters,
  sorters,
  payload,
  query,
  headers,
}) => {
  return useQuery({
    queryKey: [url, method, filters, sorters, payload, query, headers],
    queryFn: () =>
      custom({
        url,
        method,
        filters,
        sorters,
        payload,
        query,
        headers,
      }),
  });
};
