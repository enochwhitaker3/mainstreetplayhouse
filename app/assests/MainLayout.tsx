import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex desk:w-[1200px] desk:max-w-[1200px] avg:w-[800px] mobile:w-[500px]">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
