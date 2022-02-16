declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        waves: {
            duration: number;
            alpha: string;
            edge: number;
        };
        circlewipeClockwise: {
            duration: number;
            alpha: string;
            edge: number;
        };
        circlewipeTop: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let audio: {
        dreamTheme: string;
        bedroomTheme: string;
        busStopTheme: string;
        skateparkTheme: string;
        schoolTheme: string;
        bowlingTheme: string;
    };
    let items: {
        Crowbar: {
            name: string;
            description: string;
            image: string;
        };
        Blowbar: {
            name: string;
            description: string;
            image: string;
        };
    };
    let locations: {
        dream: {
            name: string;
            background: string;
        };
        bedroom: {
            name: string;
            background: string;
        };
        bedroomNight: {
            name: string;
            background: string;
        };
        busStop: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        jason: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                neutral2: string;
                thinking: string;
                disappointed: string;
            };
        };
        alice: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                neutral2: string;
                happy: string;
                sad: string;
            };
        };
        thomas: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                neutral2: string;
                thinking: string;
                questioning: string;
            };
        };
        jasonsThoughts: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                neutral2: string;
                thinking: string;
                disappointed: string;
            };
        };
    };
    function fromRightToOutOfCanvas(): ƒS.AnimationDefinition;
    function fromRightToLeft(): ƒS.AnimationDefinition;
    function fromMidToRight(): ƒS.AnimationDefinition;
    function fromMidToLeft(): ƒS.AnimationDefinition;
    let dataForSave: {
        nameProtagonist: string;
        reprehensibility: number;
        firstSpellSpoken: boolean;
        secondSpellSpoken: boolean;
        thirdSpellSpoken: boolean;
    };
    function showCredits(): void;
}
declare namespace Template {
    function ADream(): ƒS.SceneReturn;
}
declare namespace Template {
    function MyIntroduction(): ƒS.SceneReturn;
}
declare namespace Template {
    function MeetingYourFriends(): ƒS.SceneReturn;
}
declare namespace Template {
    function AWish(): ƒS.SceneReturn;
}
declare namespace Template {
    function ANewAwakening(): ƒS.SceneReturn;
}
declare namespace Template {
    function Together(): ƒS.SceneReturn;
}
declare namespace Template {
    function PrematureEnding(): ƒS.SceneReturn;
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
