"use client";

import * as React from "react";
import {
    DndContext,
    closestCenter,
    type DragEndEvent,
    type UniqueIdentifier,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
    SortableContext,
    arrayMove,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
    ColumnDef,
    ColumnFiltersState,
    Row,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    CheckCircle2Icon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
    ColumnsIcon,
    GripVerticalIcon,
    LoaderIcon,
    MoreVerticalIcon,
    PlusIcon,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { useIsMobile } from "../../../hooks/use-mobile";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

import { Checkbox } from "../../../components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Label } from "../../../components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";
import { Separator } from "../../../components/ui/separator";
import TaskForm from "../TaskForm";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../../components/ui/sheet";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";
import { Tabs, TabsContent } from "../../../components/ui/tabs";

export const schema = z.object({
    id: z.number(),
    header: z.string(),
    type: z.enum(["UI", "UX", "Bugs", "Documentation", "Issue"]),
    status: z.enum(["In Progress", "Done", "Closed"]),
    priority: z.enum(["High", "Medium", "Low"]),
    reviewer: z.string(),
    due: z.date(),
});

// Create a separate component for the drag handle
function DragHandle({ id }: { id: number }) {
    const { attributes, listeners } = useSortable({
        id,
    });

    return (
        <Button
            {...attributes}
            {...listeners}
            variant="ghost"
            size="icon"
            className="size-7 text-muted-foreground hover:bg-transparent"
        >
            <GripVerticalIcon className="size-3 text-muted-foreground" />
            <span className="sr-only">Drag to reorder</span>
        </Button>
    );
}
const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
        id: "drag",
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) =>
                        table.toggleAllPageRowsSelected(!!value)
                    }
                    aria-label="Select all"
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "header",
        header: "Header",
        cell: ({ row }) => {
            return <TableCellViewer item={row.original} />;
        },
        enableHiding: false,
    },
    {
        accessorKey: "type",
        header: "Task Type",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge
                    variant="outline"
                    className="px-1.5 text-muted-foreground"
                >
                    {row.original.type}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <Badge
                variant="outline"
                className="flex gap-1 px-1.5 text-muted-foreground [&_svg]:size-3"
            >
                {row.original.status === "Done" ? (
                    <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
                ) : (
                    <LoaderIcon />
                )}
                {row.original.status}
            </Badge>
        ),
    },
    {
        accessorKey: "due",
        header: () => <div className="w-full text-right">Due By</div>,
        cell: ({ row }) => (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    toast.promise(
                        new Promise((resolve) => setTimeout(resolve, 1000)),
                        {
                            loading: `Saving ${row.original.due}`,
                            success: "Done",
                            error: "Error",
                        },
                    );
                }}
            >
                {/* add calender */}
            </form>
        ),
    },
    {
        accessorKey: "priority",
        header: "Priority",
        cell: ({ row }) => {
            return (
                <>
                    <Label
                        htmlFor={`${row.original.id}-target`}
                        className="sr-only"
                    >
                        Priority
                    </Label>
                    <Select>
                        <SelectTrigger
                            className="h-8 w-40"
                            id={`${row.original.id}-reviewer`}
                        >
                            <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                    </Select>
                </>
            );
        },
    },

    {
        accessorKey: "reviewer",
        header: "Reviewer",
        cell: ({ row }) => {
            const isAssigned = row.original.reviewer !== "Assign reviewer";

            if (isAssigned) {
                return row.original.reviewer;
            }

            return (
                <>
                    <Label
                        htmlFor={`${row.original.id}-reviewer`}
                        className="sr-only"
                    >
                        Reviewer
                    </Label>
                    <Select>
                        <SelectTrigger
                            className="h-8 w-40"
                            id={`${row.original.id}-reviewer`}
                        >
                            <SelectValue placeholder="Assign reviewer" />
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="Eddie Lake">
                                Eddie Lake
                            </SelectItem>
                            <SelectItem value="Jamik Tashpulatov">
                                Jamik Tashpulatov
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </>
            );
        },
    },
    {
        id: "actions",
        cell: () => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
                        size="icon"
                    >
                        <MoreVerticalIcon />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-32">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Make a copy</DropdownMenuItem>
                    <DropdownMenuItem>Favorite</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
];

function DraggableRow({ row }: { row: Row<z.infer<typeof schema>> }) {
    const { transform, transition, setNodeRef, isDragging } = useSortable({
        id: row.original.id,
    });

    return (
        <TableRow
            data-state={row.getIsSelected() && "selected"}
            data-dragging={isDragging}
            ref={setNodeRef}
            className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
            style={{
                transform: CSS.Transform.toString(transform),
                transition: transition,
            }}
        >
            {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    );
}

// Define the raw data type (before Zod transformation)
type RawDataType = {
    id: number;
    header: string;
    type: "UI" | "UX" | "Bugs" | "Documentation" | "Issue";
    status: "In Progress" | "Done" | "Closed";
    priority: "High" | "Medium" | "Low";
    reviewer: string;
    due: string;
};

export function DataTable({ data: initialData }: { data: RawDataType[] }) {
    // Transform the raw data to match the schema
    const transformedData = React.useMemo(
        () =>
            initialData.map((item) => ({
                ...item,
                due: new Date(item.due),
            })),
        [initialData],
    );

    const [data, setData] = React.useState(() => transformedData);
    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const sortableId = React.useId();

    const dataIds = React.useMemo<UniqueIdentifier[]>(
        () => data?.map(({ id }) => id) || [],
        [data],
    );

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            columnVisibility,
            rowSelection,
            columnFilters,
            pagination,
        },
        getRowId: (row) => row.id.toString(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            setData((data) => {
                const oldIndex = dataIds.indexOf(active.id);
                const newIndex = dataIds.indexOf(over.id);
                return arrayMove(data, oldIndex, newIndex);
            });
        }
    }

    return (
        <Tabs
            defaultValue="outline"
            className="flex w-full flex-col justify-start gap-6"
        >
            <div className="flex items-center justify-end px-4 lg:px-6">
                <div>
                    <Button variant="outline" size="sm">
                        <PlusIcon />
                        <span className="hidden lg:inline">Add Task</span>
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                                <ColumnsIcon />
                                <span className="hidden lg:inline">
                                    Customize Columns
                                </span>
                                <span className="lg:hidden">Columns</span>
                                <ChevronDownIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                            {table
                                .getAllColumns()
                                .filter(
                                    (column) =>
                                        typeof column.accessorFn !==
                                            "undefined" && column.getCanHide(),
                                )
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    );
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="outline" size="sm">
                        <PlusIcon />
                        <span className="hidden lg:inline">Add Section</span>
                    </Button>
                </div>
            </div>
            <TabsContent
                value="outline"
                className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
            >
                <div className="overflow-hidden rounded-lg border">
                    <DndContext
                        collisionDetection={closestCenter}
                        modifiers={[restrictToVerticalAxis]}
                        onDragEnd={handleDragEnd}
                        id={sortableId}
                    >
                        <Table>
                            <TableHeader className="sticky top-0 z-10 bg-muted">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead
                                                    key={header.id}
                                                    colSpan={header.colSpan}
                                                >
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column
                                                                  .columnDef
                                                                  .header,
                                                              header.getContext(),
                                                          )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody className="**:data-[slot=table-cell]:first:w-8">
                                {table.getRowModel().rows?.length ? (
                                    <SortableContext
                                        items={dataIds}
                                        strategy={verticalListSortingStrategy}
                                    >
                                        {table.getRowModel().rows.map((row) => (
                                            <DraggableRow
                                                key={row.id}
                                                row={row}
                                            />
                                        ))}
                                    </SortableContext>
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </DndContext>
                </div>
                <div className="flex items-center justify-between px-4">
                    <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s)
                        selected.
                    </div>
                    <div className="flex w-full items-center gap-8 lg:w-fit">
                        <div className="hidden items-center gap-2 lg:flex">
                            <Label
                                htmlFor="rows-per-page"
                                className="text-sm font-medium"
                            >
                                Rows per page
                            </Label>
                            <Select
                                value={`${
                                    table.getState().pagination.pageSize
                                }`}
                                onValueChange={(value) => {
                                    table.setPageSize(Number(value));
                                }}
                            >
                                <SelectTrigger
                                    className="w-20"
                                    id="rows-per-page"
                                >
                                    <SelectValue
                                        placeholder={
                                            table.getState().pagination.pageSize
                                        }
                                    />
                                </SelectTrigger>
                                <SelectContent side="top">
                                    {[10, 20, 30, 40, 50].map((pageSize) => (
                                        <SelectItem
                                            key={pageSize}
                                            value={`${pageSize}`}
                                        >
                                            {pageSize}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex w-fit items-center justify-center text-sm font-medium">
                            Page {table.getState().pagination.pageIndex + 1} of{" "}
                            {table.getPageCount()}
                        </div>
                        <div className="ml-auto flex items-center gap-2 lg:ml-0">
                            <Button
                                variant="outline"
                                className="hidden h-8 w-8 p-0 lg:flex"
                                onClick={() => table.setPageIndex(0)}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <span className="sr-only">
                                    Go to first page
                                </span>
                                <ChevronsLeftIcon />
                            </Button>
                            <Button
                                variant="outline"
                                className="size-8"
                                size="icon"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                <span className="sr-only">
                                    Go to previous page
                                </span>
                                <ChevronLeftIcon />
                            </Button>
                            <Button
                                variant="outline"
                                className="size-8"
                                size="icon"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                <span className="sr-only">Go to next page</span>
                                <ChevronRightIcon />
                            </Button>
                            <Button
                                variant="outline"
                                className="hidden size-8 lg:flex"
                                size="icon"
                                onClick={() =>
                                    table.setPageIndex(table.getPageCount() - 1)
                                }
                                disabled={!table.getCanNextPage()}
                            >
                                <span className="sr-only">Go to last page</span>
                                <ChevronsRightIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent
                value="past-performance"
                className="flex flex-col px-4 lg:px-6"
            >
                <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
            </TabsContent>
            <TabsContent
                value="key-personnel"
                className="flex flex-col px-4 lg:px-6"
            >
                <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
            </TabsContent>
            <TabsContent
                value="focus-documents"
                className="flex flex-col px-4 lg:px-6"
            >
                <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
            </TabsContent>
        </Tabs>
    );
}

function TableCellViewer({ item }: { item: z.infer<typeof schema> }) {
    console.log("items");
    console.log(item);
    const isMobile = useIsMobile();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="link"
                    className="w-fit px-0 text-left text-foreground"
                >
                    {item.header}
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="flex w-[1000px] max-w-[90vw] flex-col sm:w-[1000px]"
            >
                <SheetHeader className="gap-1">
                    <SheetTitle>{item.header}</SheetTitle>
                    <SheetDescription>
                        Before marking as done make sure its been reviewed
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-1 flex-col gap-4 overflow-y-auto py-4 text-sm">
                    {!isMobile && (
                        <>
                            <Separator />
                            <div className="grid gap-2">
                                <div className="flex gap-2 font-medium leading-none">
                                    A note on how to break dow problems into
                                    small task
                                </div>
                                <div className="text-muted-foreground">
                                    Break complex software problems into
                                    bite-sized tasks. Focus on one goal at a
                                    time to reduce overwhelm, improve clarity,
                                    and make steady, measurable progress.
                                </div>
                            </div>
                            <Separator />
                        </>
                    )}

                    <TaskForm
                        taskData={{
                            title: item.header,
                            type: item.type,
                            status: item.status,
                            priority: item.priority,
                            reviewer: item.reviewer,
                            due: item.due,
                        }}
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
}
