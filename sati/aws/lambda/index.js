const axios = require("axios");

const APPSYNC_URL = process.env.APPSYNC_URL;
const APPSYNC_API_KEY = process.env.APPSYNC_API_KEY;

exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    const newJob = event.fullDocument || event;
    if (!newJob || !newJob._id) {
        console.error("Invalid event structure");
        return { statusCode: 400, body: "Invalid event structure" };
    }

    const mutation = `
    mutation NotifyNewJob($input: JobInput!) {
      notifyNewJob(input: $input) {
        _id
        version
        info { title createdAt updatedAt status }
        visibility
        ownership { clientId clientName clientLocation clientRating }
        content { description skills category }
        attachment { fileId fileName fileUrl fileType }
        classification { experienceLevel jobType duration }
        segmentationData { industry projectSize }
        contractTerms { budget { amount currency type } }
        contractorSelection { preferredContractorType numberOfHires }
        additionalInfo { isRemote preferredLocation }
        ptcInfo { isPtcEligible ptcType }
        proposalsStatistics { totalProposals averageRating }
        customFields { fieldName fieldValue }
      }
    }
  `;

    try {
        const response = await axios.post(
            APPSYNC_URL,
            {
                query: mutation,
                variables: {
                    input: {
                        _id: newJob._id,
                        version: newJob.version || 1,
                        info: newJob.info || {
                            title: "",
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString(),
                            status: "open",
                        },
                        visibility: newJob.visibility || "public",
                        ownership: newJob.ownership || {
                            clientId: "",
                            clientName: "",
                            clientLocation: "",
                            clientRating: 0,
                        },
                        content: newJob.content || {
                            description: "",
                            skills: [],
                            category: "",
                        },
                        attachment: newJob.attachment || [],
                        classification: newJob.classification || {
                            experienceLevel: "",
                            jobType: "",
                            duration: "",
                        },
                        segmentationData: newJob.segmentationData || {
                            industry: "",
                            projectSize: "",
                        },
                        contractTerms: newJob.contractTerms || {
                            budget: { amount: 0, currency: "", type: "" },
                        },
                        contractorSelection: newJob.contractorSelection || {
                            preferredContractorType: "",
                            numberOfHires: 0,
                        },
                        additionalInfo: newJob.additionalInfo || {
                            isRemote: false,
                            preferredLocation: "",
                        },
                        ptcInfo: newJob.ptcInfo || {
                            isPtcEligible: false,
                            ptcType: "",
                        },
                        proposalsStatistics: newJob.proposalsStatistics || {
                            totalProposals: 0,
                            averageRating: 0,
                        },
                        customFields: newJob.customFields || [],
                    },
                },
            },
            {
                headers: {
                    "x-api-key": APPSYNC_API_KEY,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log(
            "Mutation response:",
            JSON.stringify(response.data, null, 2)
        );
        return { statusCode: 200, body: JSON.stringify(response.data) };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
