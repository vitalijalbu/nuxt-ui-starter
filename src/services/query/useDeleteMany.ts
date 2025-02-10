import { useMutation } from "@tanstack/vue-query";
import { deleteMany } from "../api";

export const useDeleteMany = () => {
  return useMutation(({ resource, ids }) => deleteMany({ resource, ids }));
};
