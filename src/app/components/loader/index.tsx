import React, { memo } from "react";

/**
 * LoadingAnimation component.
 * Renders a loading animation.
 */
const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-gray-500"></div>
    </div>
  );
};

export default memo(LoadingAnimation);
