import { motion } from "motion/react"
import type { Variants } from "motion/react"


const toggleContainer: React.CSSProperties = {
    outline: "none",
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "absolute",
    top: 18,
    left: 15,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "transparent",
}

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button
        className="outline-none border-none select-none cursor-pointer rounded-full bg-transparent align-middle relative z-10"
        onClick={toggle}
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
)


interface PathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}

function Path (props: PathProps) {
  return (
    <motion.path
        className={"fill-transparent stroke-3 stroke-foreground "}
        strokeLinecap="round"
        {...props}
    />
)}


