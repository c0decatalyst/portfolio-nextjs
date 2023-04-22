export interface PageInfo {
    // _type: "pageInfo";
    name: string;
    roleHeader: string;
    email: string;
    profilePicUrl: string;
    thumbPicUrl: string;
    bgInfo: string;

}

export interface Technology {
    // _type: "skill";
    logoUrl: string;
    // progress: number;
    title: string;
}

export interface Skill {
    // _type: "skill";
    logoUrl: string;
    progress: number;
    title: string;
}

export interface Project {
    // _type: "project";
    title: string;
    logoUrl: string;
    linkToBuild: string;
    summaryList: string[];
    technologies: Technology[];
}

export interface Experience {
    // _type: "experience";
    company: string;
    logoUrl: string;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    summaryList: string[];
    technologies: Technology[];
}

export interface Social {
    // _type: "social";
    title: string;
    url: string;
}