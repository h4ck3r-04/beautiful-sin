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
    <div className="flex flex-row justify-center items-center">
      <Search onSelect={handleSelectComponent} />
      <div className="min-h-screen flex flex-row flex-wrap space-x-4">
        {selectedComponents.map((componentName, index) => (
          <DynamicComponentLoader key={index} componentName={componentName} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
