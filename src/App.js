import React from 'react';
import { Icons, Tag } from 'react-tailwind-ui'
import './App.css';

function App() {
  return (
    <div class="p-8 bg-white">
      <Tag icon={<Icons.Dollar />}>Money</Tag>
    </div>
  );
}

export default App;
