import { useState } from "react";
import { Job } from "../../types/jobType";

const JobCard: React.FC<Job> = ({ info, id }) => {
    return (
        <div key={id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px 0',
            backgroundColor: '#f9f9f9'
        }}>
            <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>{info.title}</h3>
            <p style={{ margin: "4px 0", color: "#666", fontSize: "14px" }}>
                Status: <span style={{ fontWeight: "bold" }}>{info.status}</span>
            </p>
            <p style={{ margin: "4px 0", color: "#666", fontSize: "12px" }}>
                Created: {new Date(info.createdAt).toLocaleDateString()} • 
                Updated: {new Date(info.updatedAt).toLocaleDateString()}
            </p>
        </div>
    );
};

const JobListing: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
    return (
        <div>
            <h2>Job Listings</h2>
            {jobs.length === 0 ? (
                <p>No jobs available</p>
            ) : (
                jobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))
            )}
        </div>
    );
};

function App() {
    const [Jobs, setJobs] = useState<Job[]>([]);

    const addSampleJob = () => {
        const sampleJob: Partial<Job> = {
            id: `job-${Date.now()}`,
            _id: `job-${Date.now()}`,
            version: 1,
            info: {
                title: "Sample Job Title",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                status: "Active"
            }
        };
        setJobs((prev) => [...prev, sampleJob as Job]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button type="button" onClick={addSampleJob}>
                    Add Sample Job
                </button>
            </header>
            <div>
                <JobListing jobs={Jobs} />
            </div>
        </div>
    );
}

export default App;