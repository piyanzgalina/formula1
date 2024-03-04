import { useQuery } from "@tanstack/react-query";

export const useInvalidButton = ({ selectedYear, selectedCircuit}) => {

  return useQuery({
    queryKey: ["invalidButton", selectedYear, selectedCircuit],

    queryFn: () => {
        let message;

        if (!selectedCircuit || !selectedYear) {
            message = '* Please select both a year and a circuit';
            return message
        }
        
    },
    enabled: !selectedCircuit || !selectedYear
  });
};
