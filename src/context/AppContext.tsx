import React, { createContext, useState, ReactNode } from 'react';

import { Tool } from '../pages/Home';

interface ContextValue {
  tools: Tool[];
  setTools: Function;
  onDelete: Boolean;
  setOnDelete: Function;
  onAdd: Boolean;
  setOnAdd: Function;
};

const initialState: ContextValue = {
  tools: [],
  setTools: Function,
  onDelete: false,
  setOnDelete: Function,
  onAdd: false,
  setOnAdd: Function
};

export const AppContext = createContext(initialState);

interface Props {
  children: ReactNode;
};

export function AppContextProvider(props: Props): JSX.Element {
  const [tools, setTools] = useState<Tool[]>([]);
  const [onDelete, setOnDelete] = useState(false);
  const [onAdd, setOnAdd] = useState(false);

  const context = {
    tools,
    setTools,
    onDelete,
    setOnDelete,
    onAdd,
    setOnAdd
  };

  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
};