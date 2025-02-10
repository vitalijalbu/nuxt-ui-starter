import { useQuery } from "@tanstack/vue-query";
import { findOne } from "../api";

export const useGet = ({ resource, populate, filters }) => {
  return useQuery({
    queryKey: [resource, populate, filters],
    queryFn: () => findOne({ resource, populate, filters }),
  });
};
