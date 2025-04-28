"use client"

import { frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"

export default function Drag() {
    const ref = useRef<HTMLDivElement>(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div ref={ref} style={{ ...ball, x, y }} className="w-full h-full fixed md:flex hidden top-0 left-0 cursor-default" />
}

const spring = { damping: 20, stiffness: 100, restDelta: 0.01 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
    const x = useSpring(0, spring)
    const y = useSpring(0, spring)

    useEffect(() => {
        if (!ref.current) return

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!

            frame.read(() => {
                x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
                y.set(clientY - element.offsetTop - element.offsetHeight / 2)
            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)
    }, [])

    return { x, y }
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 70,
    height: 70,
    backgroundColor: "#f2f2f2",
    borderRadius: "50%",
    opacity: "80%" ,
    
}
