export function Input({ type, placeholder }: { type: string; placeholder?: string }) {
    return(
        <>
            <input 
            type={type}
            placeholder={placeholder}
            className="w-full bg-gray-400/10 p-3 rounded-md border-2 border-gray-500 font-manrope transition-all
             text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
             placeholder-gray-300/60"
            />
        </>
    )
}