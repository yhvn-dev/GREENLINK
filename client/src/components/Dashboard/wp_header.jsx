export function Wp_header({left,right}) {
  return (
    <div className='center w-full h-full col-start-1 col-end-4 bg-[var(--pal2-whitea)]'>
        <ol className="wp_part left w-full h-full flex items-center justify-start ">{left}</ol>
        <ol className="wp_part right w-1/3 h-full flex items-center justify-end">{right}</ol>
    </div>
  )
}

