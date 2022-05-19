export const colors = {
    "gray50": "rgb(249 250 251)",
    "gray100": "rgb(243 244 246)",
    "gray200": "rgb(229 231 235)",
    "gray500": "rgb(107 114 128)",
    "gray700": "rgb(55 65 81)",

    "orange200": "rgb(254 215 170)"
}

export const shadow = {
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
}

export const text = {
    "base": "font-size: 1rem; line-height: 1.5rem;",
    "xl": "font-size: 1.25rem ; line-height: 1.75rem;",
    "2xl": "font-size: 1.5rem; line-height: 2rem;",
}

export const fontWeight = {
    bold: "700",
}

export const radius = {
    md: "0.375rem"
}

const size = {
    sm: "640px",
    md: "768px",
    xl: "1280px",
    "2xl": "1536px",
}

export const breakpoint = {
    sm: `(min-width: ${size.mobileS})`,
    md: `(min-width: ${size.md})`,
    xl: `(min-width: ${size.xl})`,
    "2xl": `(min-width: ${size["2xl"]})`,
}