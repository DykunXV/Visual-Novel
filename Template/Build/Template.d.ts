declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        longerClock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let audio: {
        backgroundTheme: string;
    };
    let items: {
        crowbar: {
            name: string;
            description: string;
            image: string;
        };
    };
    let locations: {
        bedroom: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        john: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
            smol: string;
        };
        mario: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        chris: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    function fromRightToOutOfCanvas(): ƒS.AnimationDefinition;
    function fromRightToLeft(): ƒS.AnimationDefinition;
    let dataForSave: {
        nameProtagonist: string;
        points: number;
    };
}
declare namespace Template {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Template {
    function Test(): ƒS.SceneReturn;
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
