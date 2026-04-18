import { ObjectID } from "mongodb";
export interface Job {
    id: string;
    _id: string | ObjectID;
    version: number;
    info: {
        title: string;
        createdAt: string;
        updatedAt: string;
        status: string;
    };
    visibility: string;
    ownership: {
        clientId: string;
        clientName: string;
        clientLocation: string;
        clientRating: number;
    };
    content: {
        description: string;
        skills: string[];
        category: string;
    };
    attachment: {
        fileId: string;
        fileName: string;
        fileUrl: string;
        fileType: string;
    }[];
    classification: {
        experienceLevel: string;
        jobType: string;
        duration: string;
    };
    segmentationData: {
        industry: string;
        projectSize: string;
    };
    contractTerms: {
        budget: {
            amount: number;
            currency: string;
            type: string;
        };
    };
    contractorSelection: {
        preferredContractorType: string;
        numberOfHires: number;
    };
    additionalInfo: {
        isRemote: boolean;
        preferredLocation: string;
    };
    ptcInfo: {
        isPtcEligible: boolean;
        ptcType: string | null;
    };
    proposalsStatistics: {
        totalProposals: number;
        averageRating: number;
    };
    customFields?: {
        fieldName: string;
        fieldValue: string;
    }[];
}
