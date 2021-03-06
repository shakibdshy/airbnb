export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export interface LinkTabProps {
    label?: string;
    href?: string;
    target?: string;
}

export interface SkeletonProps {
    loading?: boolean;
}

interface CategoryItem {
    title: string;
    icon: string;
    itemId: string;
    id: string;
}