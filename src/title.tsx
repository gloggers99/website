export function Title({text}: { text: string }) {
    return (
        <p className={"text-2xl sm:text-3xl font-bold text-ctp-surface w-fit mb-4"}>{text}</p>
    )
}