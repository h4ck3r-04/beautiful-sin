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
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Search onSelect={handleSelectComponent} />
      <div className="flex flex-wrap justify-center items-start mt-4 mx-auto">
        {selectedComponents.map((componentName, index) => (
          <div key={index} className="p-2">
            <DynamicComponentLoader componentName={componentName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
