interface buttonParams extends React.HTMLAttributes<HTMLButtonElement> {
  content: string;
  color: string;
  hoverColor: string;
  activeColor: string;
}

export const Button = ({
  content,
  color,
  activeColor,
  hoverColor,
  ...props
}: buttonParams) => {
  const largeScreensClasses = "lg:px-8 lg:py-2 lg:text-lg";
  return (
    <button
      {...props}
      className={`${color} ${hoverColor} ${activeColor} transition-colors rounded-md text-white shadow-sm cursor-pointer ${largeScreensClasses}`}
    >
      {content}
    </button>
  );
};
