import { useState,useEffect } from "react"

export function useMediaQuery(query) {
  const [matches,setMatches] = useState(window.matchMedia(query.matches))

  useEffect(() => {
    const media = window.matchMedia(query)  
    const listener = () => setMatches(media.matches);
    media.addEventListener("change",listener);
    
    return () => media.removeEventListener("change",listener)
  },[query])

  
  return matches;

}
