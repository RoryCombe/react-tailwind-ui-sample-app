import React from 'react';
import { Icons, Tag, Button, ApplicationUI } from 'react-tailwind-ui'
import './App.css';

const { PageHeading } = ApplicationUI.headings

function App() {
  return (
    <div className="p-8 bg-white">
      <PageHeading headline="Rory Combe" tags={[
        <Tag key="tag1" icon={<Icons.Briefcase />}>Full-time</Tag>,
        <Tag key="tag2" icon={<Icons.MapMarker />}>Munich, Germany</Tag>,
        <Tag key="tag3" icon={<Icons.Dollar />}>$135k</Tag>,
        <Tag key="tag4" icon={<Icons.Calendar />}>Starts on July 15, 2020</Tag>,
      ]}
        buttons={[
          <Button key="btn1"><Icons.Pencil /> Edit</Button>,
          <Button key="btn2" space><Icons.Link /> View</Button>,
          <Button key="btn3" space primary><Icons.Checkmark /> Hire</Button>,
        ]}
      />
    </div>
  );
}

export default App;
