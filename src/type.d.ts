interface Iabout {
    info: string;
    email: string;
}

interface Iprojects {
    name: string;
    intro: string;
    type: string;
    stack: object;
    info: string;
    link: Ilink;
    goals: string[];
    plan: string;
    features: string[];
    role: string[];
    lesson: object;
}

interface Iskills {
    name: string;
    category: string;
    content: string[];
}

interface Ilink {
    url: string;
    github: string;
    accountId: string;
    accountId2: string;
    accountPw: string;
}

type projectProps = {
    data: Iprojects[];
};

type projProps = {
    proj: Iprojects;
};

type ApiAboutType = {
    message: string;
    status: string;
    about: Iabout[];
};

type ApiProjectsType = {
    message: string;
    status: string;
    projects: Iprojects[];
};

type ApiSkillsType = {
    message: string;
    status: string;
    skills: Iskills[];
};
