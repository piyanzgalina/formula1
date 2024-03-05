import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useSchedule = () => {
  return useQuery({
    queryKey: ['schedule'],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `https://ergast.com/api/f1/2024.json`,
        ); 
  
        const shedule = data.MRData.RaceTable;

        return shedule;

      } catch(err) {
        return `Some error: ${err}`;
      }
    },
  });
};