
export const Roles = [
    { value: "BRONZE", label: "브론즈", color: "bg-amber-700" },
    { value: "SILVER", label: "실버", color: "bg-gray-400" },
    { value: "GOLD", label: "골드", color: "bg-yellow-500" },
    { value: "PLATINUM", label: "플래티넘", color: "bg-cyan-500" },
    { value: "DIAMOND", label: "다이아몬드", color: "bg-blue-500" },
]


export const getRankColor = (rank: string) => {
    return Roles.find((r) => r.value === rank)?.color || "bg-gray-500"
}


export const getRankLabel = (rank: string) => {
    return Roles.find((r) => r.value === rank)?.label || rank
}
