import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createMany } from "../api";


export const useCreateMany = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ resource, body }) => {
      return createMany({ resource, body });
    },
    onError: (error) => {
      toast.error("Errore nella creazione dell'elemento:", error);
    },
    onSuccess: ({ data, resource }) => {
      toast.success(`Elementi creati con successo`);
    },
    onSettled: ({data, error, variables, resource}) => {
      if (resource) {
        queryClient.invalidateQueries([resource]);
      } else {
        console.error("No resource found in mutation variables");
      }
    },
  });
};
