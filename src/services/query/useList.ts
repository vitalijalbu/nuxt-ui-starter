import { useQuery } from "@tanstack/vue-query";
import { getList } from "../api";

interface UseListParams {
  resource: string | null;
  pagination?: Record<string, any>;
  filters?: Record<string, any>;
  sorters?: Record<string, any>;
  meta?: Record<string, any>;
}

export const useList = ({ resource, pagination, filters, sorters, meta }: UseListParams) => {
  return useQuery({
    queryKey: [resource, pagination, filters, sorters, meta],
    queryFn: () => getList({ resource, pagination, filters, sorters, meta }), 
  });
};
