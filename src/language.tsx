import type {IconType} from "react-icons";

export function Language({name, Icon, color}: { name: string, Icon: IconType, color?: string }) {
    return (
        <span className="inline-flex items-center gap-1">
            <span className={color}>{name}</span>
            <Icon className="w-4 h-4 sm:w-3 sm:h-3"/>
        </span>
    )
}