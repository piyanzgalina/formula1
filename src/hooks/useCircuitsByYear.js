import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useCircuitsByYear = ({ selectedYear }) => {

  return useQuery({
    queryKey: ["circuit", selectedYear],

    queryFn: async () => {
        if (selectedYear == 'Choose a year') {
            throw new Error(`Choose a year`);
        }

        const { data } = await axios.get(
          `https://ergast.com/api/f1/${selectedYear}.json`,
        );
        
        if (!data) throw new Error(`Ooops! Unable to fetch circuits`);

        const racesArr = data.MRData.RaceTable.Races;

        let circuits = [];

        racesArr.map((item) => {
            let obj = {};
            obj['label'] = item.raceName;
            obj['value'] = item.round;
            obj['date'] = item.date;
            obj['time'] = item.time;
            circuits.push(obj)
        })

        return circuits;
    },
    
    enabled: !!selectedYear,
  });
};
