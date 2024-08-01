import * as React from "react";
import dynamic from "next/dynamic";

interface DynamicComponentLoaderProps {
  componentName: string;
}

const DynamicComponentLoader: React.FC<DynamicComponentLoaderProps> = ({
  componentName,
}) => {
  const Component = React.useMemo(() => {
    if (!componentName) return null;
    return dynamic(() => import(`@/components/dynamic/${componentName}`));
  }, [componentName]);

  return Component ? <Component /> : null;
};

export default DynamicComponentLoader;
