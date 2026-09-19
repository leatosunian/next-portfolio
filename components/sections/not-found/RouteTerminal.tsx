import { motion } from "framer-motion"
import { GlassPanel } from "@/components/sections/hero/GlassPanel"

// Misma paleta que el CodeMockup del hero
type PartColor = "purple" | "muted" | "dim" | "comment" | "empty"

interface CodePart {
    text: string
    color: PartColor
}

const COLOR_MAP: Record<PartColor, string> = {
    purple: "text-[#ad46ff]",
    muted: "text-white/75",
    dim: "text-purple-300",
    comment: "text-white/30",
    empty: "opacity-0 select-none",
}

interface RouteTerminalProps {
    pathname: string
    status: string
}

// Terminal que "consulta" la ruta que el visitante intentó abrir
export const RouteTerminal = ({ pathname, status }: RouteTerminalProps) => {
    const lines: CodePart[][] = [
        [
            { text: "$ ", color: "purple" },
            { text: `curl -I tosunian.dev${pathname}`, color: "muted" },
        ],
        [
            { text: "HTTP/2 ", color: "comment" },
            { text: "404 Not Found", color: "dim" },
        ],
        [{ text: " ", color: "empty" }],
        [
            { text: "const", color: "purple" },
            { text: " page = ", color: "muted" },
            { text: "routes", color: "dim" },
            { text: ".find(", color: "muted" },
            { text: `'${pathname}'`, color: "dim" },
            { text: ")", color: "muted" },
        ],
        [{ text: "// → undefined", color: "comment" }],
        [{ text: " ", color: "empty" }],
        [
            { text: "redirect", color: "purple" },
            { text: "(", color: "muted" },
            { text: "'/'", color: "dim" },
            { text: ")", color: "muted" },
        ],
    ]

    return (
        <GlassPanel className="relative p-5 overflow-hidden sm:p-6">
            {/* Window chrome */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                    <div className="w-3 h-3 rounded-full bg-[#ad46ff]/50" />
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-white/25">
                    TERMINAL — 404
                </span>
            </div>

            {/* Lines */}
            <div className="space-y-2.5 font-mono text-xs sm:text-sm leading-relaxed">
                {lines.map((parts, i) => (
                    <motion.div
                        key={i}
                        className="flex items-start gap-3 sm:gap-4"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                    >
                        <span className="text-[#ad46ff]/30 w-5 text-right shrink-0 select-none tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 break-all">
                            {parts.map((part, j) => (
                                <span key={j} className={COLOR_MAP[part.color]}>
                                    {part.text}
                                </span>
                            ))}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-end pt-5 mt-8 border-t border-white/6">
                <motion.div
                    className="text-[9px] sm:text-[10px] text-[#ad46ff] font-bold tracking-widest uppercase bg-[#ad46ff]/10 px-3 py-1 rounded-full"
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    {status}
                </motion.div>
            </div>
        </GlassPanel>
    )
}
