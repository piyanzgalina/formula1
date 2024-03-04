import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useRacesResults = ({ selectedYear, selectedCircuit }) => {

  if (!selectedYear || !selectedCircuit) {
    throw new Error('Choose both a year and a circuit')
  }

  return useQuery({
    queryKey: ["raceResults", selectedYear, selectedCircuit],
    queryFn: async () => {
      try {
        const { data } = await axios.get(
          `http://ergast.com/api/f1/${selectedYear}/${selectedCircuit}/results.json`,
        ); 
  
        const raceResult = data.MRData.RaceTable.Races[0];

        return raceResult;

      } catch(err) {
        return `Some error: ${err}`
      }
    },
    enabled: !!selectedYear  && !!selectedCircuit 
  });
};