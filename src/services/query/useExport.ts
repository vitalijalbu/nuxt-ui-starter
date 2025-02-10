import { useMutation } from "@tanstack/vue-query";
import { exportData as exportDataApi } from "../api";


export const useExport = () => {
  return useMutation({
    mutationFn: (filters) => exportDataApi(filters),
    onSuccess: (data) => {
      toast.success("Esportazione completata");
    },
    onError: (error) => {
      toast.error("Errore nell'esportazione :" + error.message);
    },
  });
};
