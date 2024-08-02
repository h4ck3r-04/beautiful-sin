"use client";
import * as React from "react";
import { Search } from "@/components/Search";
import { useState } from "react";
import DynamicComponentLoader from "@/props/DynamicContentLoader";

const Dashboard: React.FC = () => {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [draggedComponentIndex, setDraggedComponentIndex] = useState<
    number | null
  >(null);

  const handleSelectComponent = (componentName: string) => {
    setSelectedComponents((prevComponents) => [
      ...prevComponents,
      componentName,
    ]);
  };

  const handleDragStart = (index: number) => {
    setDraggedComponentIndex(index);
  };

  const handleDrop = (index: number) => {
    if (draggedComponentIndex !== null) {
      const updatedComponents = [...selectedComponents];
      const [draggedComponent] = updatedComponents.splice(
        draggedComponentIndex,
        1,
      );
      updatedComponents.splice(index, 0, draggedComponent);
      setSelectedComponents(updatedComponents);
      setDraggedComponentIndex(null);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Search onSelect={handleSelectComponent} />
      <div className="flex flex-wrap justify-center items-start mt-4 mx-auto">
        {selectedComponents.map((componentName, index) => (
          <div
            key={index}
            className="p-2"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
          >
            <DynamicComponentLoader componentName={componentName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
