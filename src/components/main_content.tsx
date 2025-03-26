interface chartsContainerArgs extends React.HTMLAttributes<HTMLDivElement> {
  children: React.JSX.Element | React.JSX.Element[];
}

export const MainContent = ({ children }: chartsContainerArgs) => {
    const responsiveClasses = 'w-full h-[95vh] lg:m-5 lg:p-5 lg:gap-5'

    return (
    <div className={`bg-[#171717] border border-[#5A5A5A] rounded-lg shadow-sm text-white flex flex-col gap-2 items overflow-y-auto ${responsiveClasses}`}>
      {children}
    </div>
  );
};
