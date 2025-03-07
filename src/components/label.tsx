interface labelParams extends React.HTMLAttributes<HTMLLabelElement> {
    target: string ;
    content: string; 
}

export const Label = ({
    content,
    target,
    ...props
}: labelParams) => {
    return <label {...props} htmlFor={target}>{content}</label>
};