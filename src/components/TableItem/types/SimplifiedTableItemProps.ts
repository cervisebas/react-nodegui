import { TableItemProps } from "../interfaces/TableItemProps";

export type SimplifiedTableItemProps = Omit<TableItemProps, "cellPosition">;
