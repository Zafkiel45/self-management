interface chartsContainerArgs extends React.HTMLAttributes<HTMLDivElement> {
  children: React.JSX.Element | React.JSX.Element[];
  configs: string;
}

export const MainContent = ({ children, configs }: chartsContainerArgs) => {
    const responsiveClasses = 'w-full h-[95vh] lg:m-5 lg:p-5 lg:gap-5'

    return (
    <div className={` text-white flex ${configs} gap-2 items-center overflow-y-auto ${responsiveClasses}`}>
      {children}
    </div>
  );
};
