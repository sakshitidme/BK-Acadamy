import { useEffect, useRef } from "react"

const ScrollFade = ({ children }) => {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.remove("opacity-0", "translate-y-10")
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
  }, [])

  return (
    <div
      ref={ref}
      className="transition-all duration-700 opacity-0 translate-y-10"
    >
      {children}
    </div>
  )
}

export default ScrollFade
