import { useContext, useState } from "react";
import { InitialDataContext } from "./initialDataContext";

export const useDataSSR = (resourceName, loadFunc) => {
  const context = useContext(InitialDataContext);
  const [data, setData] = useState(context._data[resourceName]);

  if (context._isServerSide) {
    // push loadFunc to _requests
    context._requests.push(
      loadFunc().then(result => context._data[resourceName] = result)
    );
  } else if (!data) { // if CSR and not loaded
    loadFunc().then(result => {
      setData(result)
      context._data[resourceName] = result;
    })
  }

  return data;
}