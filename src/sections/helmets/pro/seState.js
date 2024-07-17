import { useMemo, useState, useCallback } from 'react';


// ----------------------------------------------------------------------
export function isEqual(a, b) {
    if (a === null || a === undefined || b === null || b === undefined) {
      return a === b;
    }
}
export function useSetState(initialState) {
  const [state, set] = useState(initialState);

  const canReset = !isEqual(state, initialState);

  const setState = useCallback((updateState) => {
    set((prevValue) => ({ ...prevValue, ...updateState }));
  }, []);

  const setField = useCallback(
    (name, updateValue) => {
      setState({
        [name]: updateValue,
      });
    },
    [setState]
  );

  const onResetState = useCallback(() => {
    set(initialState);
  }, [initialState]);

  const memoizedValue = useMemo(
    () => ({
      state,
      setState,
      setField,
      onResetState,
      canReset,
    }),
    [canReset, onResetState, setField, setState, state]
  );

  return memoizedValue;
}
