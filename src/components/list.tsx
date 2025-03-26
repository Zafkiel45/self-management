interface argsSignature extends React.HTMLAttributes<HTMLUListElement> {
    children: React.JSX.Element | React.JSX.Element[];
    isColumn: boolean;
};

export const List = ({
    children,
    isColumn,
    ...props
}: argsSignature) => {
    return (
        <ul {...props} className={`${isColumn ? 'flex-col':'flex'} gap-3 w-full flex-wrap items-center `}>
            {children}
        </ul>
    )
};