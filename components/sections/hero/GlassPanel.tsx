
// ─ GlassPanel 

interface GlassPanelProps {
    children: React.ReactNode
    className?: string
}

export const GlassPanel = ({ children, className = "" }: GlassPanelProps) => (
    <div
        className={`rounded-2xl border border-white/[0.07] shadow-2xl ${className}`}
        style={{
            background: "rgba(18, 18, 24, 0.65)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
        }}
    >
        {children}
    </div>
)