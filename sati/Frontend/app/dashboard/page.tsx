import React from "react";
import CardSection from "../UI/Dashboard/Card-Section";
import DataCard from "../UI/Dashboard/DataCard";
const testPage = () => {
    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    <CardSection>
                        <DataCard />
                        {/* <DataCard />
                        <DataCard />
                        <DataCard />
                        <DataCard /> */}
                    </CardSection>
                </div>
            </div>
        </div>
    );
};
export default testPage;
