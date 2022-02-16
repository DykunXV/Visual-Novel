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
    let soundEffects: {
        flashback: string;
        phoneVibration: string;
        schoolBell: string;
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
        skatepark: {
            name: string;
            background: string;
        };
        school: {
            name: string;
            background: string;
        };
        bowlingAlley: {
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
    function fromMidToRight(): ƒS.AnimationDefinition;
    function fromMidToLeft(): ƒS.AnimationDefinition;
    function fromOutOfCanvasToMid(): ƒS.AnimationDefinition;
    let dataForSave: {
        nameProtagonist: string;
        reprehensibility: number;
        firstSpellSpoken: boolean;
        secondSpellSpoken: boolean;
        thirdSpellSpoken: boolean;
        masterVolume: number;
    };
    function showCredits(): void;
    function addReprehensibility(reprehensibility: number): void;
    function removeReprehensibility(reprehensibility: number): void;
    function showInfo(info: string): void;
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
    function Credits(): ƒS.SceneReturn;
}
