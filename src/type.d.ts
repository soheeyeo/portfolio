interface Iabout {
    info: string;
    email: string;
}

interface Iprojects {
    _id: string;
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
    _id: string;
    name: string;
    category: string;
    content: string;
    src: string;
}

interface Ilink {
    url: string;
    github: string;
    accountId: string;
    accountId2: string;
    accountPw: string;
}

interface IprojProps {
    proj: Iprojects;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isopen: boolean;
}

interface IprojectProps {
    data: Iprojects[];
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

type sizePropsType = {
    width: number;
    height: number;
};

interface ICircle {
    update: () => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
}
