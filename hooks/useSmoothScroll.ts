export function useSmoothScroll() {
    return (id: string) => {
        const target = document.getElementById(id)
        if (!target) return

        const targetY = target.getBoundingClientRect().top + window.scrollY
        const startY = window.scrollY
        const distance = targetY - startY
        const duration = 900

        let startTime: number | null = null
        const ease = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            window.scrollTo(0, startY + distance * ease(progress))
            if (progress < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
    }
}