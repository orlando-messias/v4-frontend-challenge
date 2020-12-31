import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Tool {
  title: string;
  link: string;
  description: string;
};

function Home() {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    api.get<Tool[]>('/tools').then(response => {
      setTools(response.data);
    });
  });

  return (
    <div>
      <h2>This is Home</h2>
      {tools.map(tool => <p>{tool.title}</p>)}
    </div>
  )
}

export default Home;