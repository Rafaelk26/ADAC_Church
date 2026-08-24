export function Select({ children, ...rest }: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
    return(
        <>
            <div className="w-full relative group">
                <select
                {...rest}
                className="w-full bg-[#1a1a1a] p-3 rounded-md 
                border-2 border-gray-500 font-manrope transition-all
                text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                appearance-none pr-10"
                >
                    {children}
                </select>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 absolute top-1/2 -translate-y-1/2 right-2 text-gray-400
                    pointer-events-none transition-transform duration-300
                    group-focus-within:rotate-180"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                </svg>
            </div>
        </>
    )
}