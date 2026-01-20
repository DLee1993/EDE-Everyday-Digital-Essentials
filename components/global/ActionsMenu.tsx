import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type Action = {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
    isDelete?: boolean; // optional flag to separate it visually
};

type ActionsMenuProps = {
    actions: Action[];
    disabled?: boolean;
};

export function ActionsMenu({ actions, disabled }: ActionsMenuProps) {
    const normalActions = actions.filter((a) => !a.isDelete);
    const deleteActions = actions.filter((a) => a.isDelete);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" disabled={disabled}>
                    Actions
                    <ChevronDown />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                {normalActions.map((action) => (
                    <DropdownMenuItem
                        key={action.label}
                        onClick={action.onClick}
                        className="gap-4!"
                    >
                        {action.icon}
                        {action.label}
                    </DropdownMenuItem>
                ))}

                {deleteActions.length > 0 && (
                    <>
                        <DropdownMenuSeparator />

                        {deleteActions.map((action) => (
                            <DropdownMenuItem
                                key={action.label}
                                onClick={action.onClick}
                                className="gap-4!"
                                variant="destructive"
                            >
                                {action.icon}
                                {action.label}
                            </DropdownMenuItem>
                        ))}
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
