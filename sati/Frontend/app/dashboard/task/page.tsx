import React from "react";
import { DataTable } from "../../UI/dataTable/data-table";
import data from "../../UI/dataTable/data.json";

const TaskTablePage = () => {
    return <DataTable data={data} />;
};

export default TaskTablePage;
