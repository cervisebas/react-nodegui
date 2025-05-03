import { TableProps } from "../interfaces/TableProps";

export type CustomTableProps = Omit<TableProps, "cellRange">;
