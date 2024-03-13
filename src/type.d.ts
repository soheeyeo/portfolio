interface Iabout {
    info: string;
    email: string;
}

interface Iprojects {
    name: string;
    intro: string;
    type: string;
    stack: object[];
    info: string;
    link: object[];
    goals: string[];
    plan: string;
    features: string[];
    role: string[];
    lesson: object[];
}

interface Iskills {
    name: string;
    category: string;
    content: string[];
}

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
