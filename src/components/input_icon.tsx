interface inputParams extends React.InputHTMLAttributes<HTMLInputElement> {
    inputType: string;
    inputIcon: React.JSX.Element;
};

export const InputIcon = ({
    inputIcon,
    inputType,
    ...props
}: inputParams) => {
    const largeScreenClasses = "lg:px-3 lg:py-3"

    return (
        <div className="w-full h-full flex justify-center ">
            <div className={`${largeScreenClasses} rounded-tl-md rounded-bl-md border-t border-l border-b border-[#5A5A5A] shadow-sm`}>
                {inputIcon}
            </div>
            <div className="w-full">
                <input className={`${largeScreenClasses} w-full h-fit outline-0 placeholder:text-[#696767] rounded-tr-md rounded-br-md border-t border-r border-b border-[#5A5A5A] shadow-sm`} {...props} type={inputType} />   
            </div>
        </div>
    )
}