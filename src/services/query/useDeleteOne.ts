import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { deleteOne } from "../api/strapi";


export const useDeleteOne = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ resource, id }) => deleteOne({ resource, id }),
    onError: ({ errorMessage, error }) => {
      toast.error(errorMessage || "Error deleting resource: " + error.message);
    },
    onSuccess: ({ successMessage }) => {
      toast.success(successMessage || "Elemento eliminato con successo");
    },
    onSettled: ({ resource }) => {
      queryClient.invalidateQueries([resource]);
    },
  });

  const handleDelete = ({
    resource,
    id,
    confirmTitle = "Stai per eliminare un elemento",
    confirmMessage = "Sei sicuro di voler procedere?",
    confirmText = "Elimina",
    cancelText = "Chiudi",
    isConfirmDelete = true,
    confirmIcon = null,
    successMessage = "Elemento eliminato con successo",
    errorMessage = "Errore durante l'eliminazione dell'elemento",
  }) => {
    confirm({
      title: confirmTitle,
      message: confirmMessage,
      cancelText,
      confirmText,
      icon: confirmIcon,
      isDelete: isConfirmDelete,
      isPending: mutation.isPending,
      async onOk() {
        try {
          await mutation.mutateAsync({
            resource,
            id,
            successMessage,
            errorMessage,
          });
        } catch (error) {
          // Error toast is handled in the onError callback
        }
      },
    });
  };

  return { mutate: handleDelete };
};
