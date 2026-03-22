import { motion } from "framer-motion"
import { GlassPanel } from "./GlassPanel"

// ─ CodeMockup 
type PartColor = "purple" | "muted" | "dim" | "empty"

interface CodePart {
    text: string
    color: PartColor
}

interface CodeLine {
    num: string
    parts: CodePart[]
}

const CODE_LINES: CodeLine[] = [
    {
        num: "01",
        parts: [
            { text: "import", color: "purple" },
            { text: " { WebDeveloper } ", color: "muted" },
            { text: "from", color: "purple" },
            { text: " '@tosunian/dev'", color: "dim" },
        ],
    },
    {
        num: "02",
        parts: [{ text: "\u00a0", color: "empty" }],
    },
    {
        num: "03",
        parts: [
            { text: "const", color: "purple" },
            { text: " portfolio ", color: "muted" },
            { text: "= ", color: "muted" },
            { text: "new ", color: "purple" },
            { text: "Architect", color: "dim" },
            { text: "({", color: "muted" },
        ],
    },
    {
        num: "04",
        parts: [
            { text: "  name: ", color: "muted" },
            { text: "'Leandro'", color: "dim" },
            { text: ",", color: "muted" },
        ],
    },
    {
        num: "05",
        parts: [
            { text: "  focus: ", color: "muted" },
            { text: "'Performance'", color: "dim" },
            { text: ",", color: "muted" },
        ],
    },
    {
        num: "06",
        parts: [
            { text: "  stack: [", color: "muted" },
            { text: "'Next.js'", color: "dim" },
            { text: ", ", color: "muted" },
            { text: "'Node.js'", color: "dim" },
            { text: ", ", color: "muted" },
            { text: "'MongoDB'", color: "dim" },
            { text: "]", color: "muted" },
        ],
    },
    {
        num: "07",
        parts: [{ text: "});", color: "muted" }],
    },
]

const COLOR_MAP: Record<PartColor, string> = {
    purple: "text-[#ad46ff]",
    muted: "text-white/75",
    dim: "text-purple-300",
    empty: "opacity-0 select-none",
}

const STACK_ICONS = [
    { icon: "⚡", label: "TypeScript" },
    { icon: "▲", label: "Next.js" },
    { icon: "⬡", label: "Node.js" },
] as const

export const CodeMockup = () => (
    <GlassPanel className="relative p-5 overflow-hidden sm:p-6">
        {/* Window chrome */}
        <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                <div className="w-3 h-3 rounded-full bg-[#ad46ff]/50" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-white/25">
                VS CODE — PAGE.TSX
            </span>
        </div>

        {/* Code lines */}
        <div className="space-y-2.5 font-mono text-xs sm:text-sm leading-relaxed">
            {CODE_LINES.map((line, i) => (
                <motion.div
                    key={line.num}
                    className="flex items-center gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                >
                    <span className="text-[#ad46ff]/30 w-5 text-right shrink-0 select-none tabular-nums">
                        {line.num}
                    </span>
                    <span>
                        {line.parts.map((part, j) => (
                            <span key={j} className={COLOR_MAP[part.color]}>
                                {part.text}
                            </span>
                        ))}
                    </span>
                </motion.div>
            ))}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between pt-5 mt-8 border-t border-white/6">
            <div className="flex -space-x-2.5">
                {STACK_ICONS.map(({ icon, label }) => (
                    <div
                        key={label}
                        title={label}
                        className="w-9 h-9 rounded-full border-2 border-[#0e0e10] bg-[#1a1a22] flex items-center justify-center"
                    >
                        <span className="text-[#ad46ff] text-xs font-bold">{icon}</span>
                    </div>
                ))}
            </div>
            <motion.div
                className="text-[9px] sm:text-[10px] text-[#ad46ff] font-bold tracking-widest uppercase bg-[#ad46ff]/10 px-3 py-1 rounded-full"
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                Deploying…
            </motion.div>
        </div>
    </GlassPanel>
)
