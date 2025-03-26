interface navbarArgs extends React.HTMLAttributes<HTMLElement> {
    children: React.JSX.Element | React.JSX.Element[];

}

export const Navbar = ({
    children,
    ...props
}: navbarArgs) => {
    const responsiveClasses = 'lg:gap-5 lg:p-5 lg:h-screen lg:w-[18vw]';

    return (
        <nav {...props} className={`bg-neutral-950 text-white border-r border-r-[#5A5A5A] flex flex-col items-center ${responsiveClasses}`}>
            {children}
        </nav>
    )
};