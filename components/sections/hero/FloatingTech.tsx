// ─ FloatingTechChip 
// Uses a single animate object for both entry + float loop.
// NO variant arrays — avoids the "variants + animate array" conflict.

import { motion } from "motion/react"
import { GlassPanel } from "./GlassPanel"

interface FloatingTechChipProps {
    icon: string
    label: string
    sublabel: string
    color: string
    className?: string
    entryDelay?: number
    floatAmplitude?: number
}



export const FloatingTechCard = ({
    icon,
    label,
    sublabel,
    color,
    className = "",
    entryDelay = 1.0,
    floatAmplitude = -8,
}: FloatingTechChipProps) => (
    <motion.div
        className={`absolute ${className}`}
        initial={{ opacity: 0, scale: 0.85, y: 12 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            opacity: { duration: 0.5, delay: entryDelay },
            scale: {
                duration: 0.5, delay: entryDelay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
            },
        }}
    >
        <motion.div
            animate={{ y: [0, floatAmplitude, 0] }}
            transition={{
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: entryDelay },
            }}
        >
            <GlassPanel className="px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3">
                <div
                    className="flex items-center justify-center w-8 h-8 rounded-lg sm:w-10 sm:h-10 shrink-0"
                    style={{ background: `${color}18` }}
                >
                    <span className="text-base sm:text-lg" style={{ color }}>
                        {icon}
                    </span>
                </div>
                <div>
                    <div className="text-[11px] sm:text-xs font-bold text-white leading-none mb-0.5">
                        {label}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-white/40">{sublabel}</div>
                </div>
            </GlassPanel>
        </motion.div>
    </motion.div>
)