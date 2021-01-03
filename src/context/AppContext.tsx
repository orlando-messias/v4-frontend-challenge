import React, { createContext, useState, ReactNode } from 'react';

import { Tool } from '../pages/Home';

interface User {
  id: string,
  name: string,
  email: string,
  token: string
}

interface ContextValue {
  tools: Tool[];
  setTools(tools: Tool[]): void;
  onDelete: Boolean;
  setOnDelete(toggle: boolean): void;
  onAdd: Boolean;
  setOnAdd(toggle: boolean): void;
  user: User | null;
  setUser: Function;
  numberOfTools: Number;
  setNumberOfTools: Function;
};

export const AppContext = createContext<ContextValue>({} as ContextValue);

interface Props {
  children: ReactNode;
};

export function AppContextProvider(props: Props): JSX.Element {
  const [tools, setTools] = useState<Tool[]>([]);
  const [onDelete, setOnDelete] = useState(false);
  const [onAdd, setOnAdd] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [numberOfTools, setNumberOfTools] = useState(0);

  const context = {
    tools,
    setTools,
    onDelete,
    setOnDelete,
    onAdd,
    setOnAdd,
    user,
    setUser,
    numberOfTools,
    setNumberOfTools
  };

  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
};