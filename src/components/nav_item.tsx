interface navItemArgs extends React.HTMLAttributes<HTMLLIElement> {
    icon: React.JSX.Element;
    content: string; 

}

export const NavItem = ({
    content,
    icon,
    ...props
}: navItemArgs) => {
    const responsiveClasses = 'lg:gap-6 lg:w-full lg:p-2 lg:h-fit'
    return (
        <li {...props} className={`flex ${responsiveClasses} cursor-pointer hover:bg-[#00B1FD]/40 rounded-md transition-colors  items-center`}>
            <div>
                {icon}
            </div>
            <div>
                {content}
            </div>
        </li>
    )
};