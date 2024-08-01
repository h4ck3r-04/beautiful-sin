"use client";
import * as React from "react";
import { Search } from "@/components/Search";
import { useState } from "react";
import DynamicComponentLoader from "@/props/DynamicContentLoader";

const Dashboard: React.FC = () => {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  const handleSelectComponent = (componentName: string) => {
    setSelectedComponents((prevComponents) => [
      ...prevComponents,
      componentName,
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center align-middle justify-center">
      <Search onSelect={handleSelectComponent} />
      {selectedComponents.map((componentName, index) => (
        <DynamicComponentLoader key={index} componentName={componentName} />
      ))}
    </div>
  );
};

export default Dashboard;
