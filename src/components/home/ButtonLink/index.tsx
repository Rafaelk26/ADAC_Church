export function ButtonLink({nome, href}: {nome: string, href: string}) {
  return (
    <a href={href}>
        <button className="
        w-max bg-blue-500 text-white text-xl 
        font-medium font-manrope py-3 px-4 rounded-md transition-all
        hover:bg-blue-600 hover:scale-105 hover:cursor-pointer">
            {nome}   
        </button>
    </a>
  );
}