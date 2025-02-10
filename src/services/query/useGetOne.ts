import { useQuery } from "@tanstack/vue-query";
import { getOne } from "../api";

export const useGetOne = ({ resource, id, meta }) => {
  if (!id) return null;
  return useQuery({
    queryKey: [resource, id, meta],
    queryFn: () => getOne({ resource, id, meta }),
  });
};
