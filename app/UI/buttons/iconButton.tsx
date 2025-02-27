export default function IconButton(props: React.PropsWithChildren<{className?:string}>) {
    return (
        <button {...props} className={`${props.className} rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-16 w-16`}>{props.children}</button>
    )
}