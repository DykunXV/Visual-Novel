"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log('FudgeStory template starting');
    //define transitions
    Template.transition = {
        clock: {
            duration: 1,
            alpha: './Images/Transitions/puzzle.png',
            edge: 1,
        },
        longerClock: {
            duration: 2,
            alpha: './Images/Transitions/puzzle.png',
            edge: 1,
        },
    };
    //define audio
    Template.audio = {
        backgroundTheme: './Audio/BGM/TEST.mp3',
    };
    //define items
    Template.items = {
        crowbar: {
            name: 'Crowbar',
            description: 'Krasses Teil',
            image: './Images/Items/crowbar.png',
        },
    };
    //define backgrounds
    Template.locations = {
        bedroom: {
            name: 'Bedroom',
            background: './Images/Backgrounds/test.jpg',
        },
    };
    //define characters
    Template.characters = {
        narrator: {
            name: '',
        },
        john: {
            name: 'John',
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: './Images/Characters/test/1.jpg',
                happy: './Images/Characters/test/1.jpg',
                upset: './Images/Characters/test/1.jpg',
            },
            smol: './Images/Characters/test/1.jpg',
        },
        mario: {
            name: 'Mario',
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: '',
                happy: '',
                upset: '',
            },
        },
        chris: {
            name: 'Chris',
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: '',
                happy: '',
                upset: '',
            },
        },
    };
    //define animations
    function fromRightToOutOfCanvas() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(120, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromRightToOutOfCanvas = fromRightToOutOfCanvas;
    function fromRightToLeft() {
        return {
            start: { translation: Template.ƒS.positions.bottomright },
            end: { translation: Template.ƒS.positions.bottomleft },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromRightToLeft = fromRightToLeft;
    //define data that will be saved
    Template.dataForSave = {
        nameProtagonist: '',
        points: 0,
    };
    //define in game Menu
    let inGameMenu = {
        save: 'Save',
        load: 'Load',
        close: 'Close',
    };
    let gameMenu;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenu.close:
                gameMenu.close();
                menu = false;
                break;
        }
    }
    let menu = true;
    //Shortcuts für's Menü
    document.addEventListener('keydown', hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log('Saved');
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log('Loaded');
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.F10:
                if (menu) {
                    console.log('Closing Menu');
                    gameMenu.close();
                    menu = false;
                }
                else {
                    console.log('Opening Menu');
                    gameMenu.open();
                    menu = true;
                }
        }
    }
    window.addEventListener('load', start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, 'gameMenu');
        buttonFunctionalities("Close");
        let scenes = [
            { id: 'Einführung', scene: Template.Introduction, name: 'Introduction' },
            { id: 'Test', scene: Template.Test, name: 'Test', next: 'Einführung' },
        ];
        let uiElement = document.querySelector('[type=interface]');
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Introduction() {
        console.log('FudgeStory Introduction Scene starting');
        let text = {
            narrator: {
                T0000: '',
                T0001: '',
            },
            john: {
                T0000: `Hi ${Template.dataForSave.nameProtagonist} bra`,
                T0001: 'Bye John',
            },
            mario: {
                T0000: 'Hi Mario',
                T0001: 'Bye Mario',
            },
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        //Delay
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(2)]);
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Character.show(Template.characters.john, Template.characters.john.pose.happy, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, 'Namen eingeben ');
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.characters.john, `Hi ${Template.dataForSave.nameProtagonist} bra`);
        await Template.ƒS.Character.animate(Template.characters.john, Template.characters.john.pose.happy, Template.fromRightToLeft());
        await signalDelay();
        await Template.ƒS.Speech.tell(Template.characters.john, 'hey, manueller text');
        await Template.ƒS.Character.hide(Template.characters.john);
        //await ƒS.Inventory.add(items.crowbar);
        //await ƒS.Inventory.open();
        let firstDialogueElementOptions = {
            iSayOk: 'Okay.',
            iSayYes: 'Ja.',
            iSayNo: 'Nein.',
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.john, 'hey, manueller text');
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.show(Template.characters.mario, Template.characters.mario.pose.angry, Template.ƒS.positionPercent(30, 100));
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.mario, text.mario.T0000);
        }
        await Template.ƒS.Speech.tell(Template.characters.john, text.john.T0000);
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Test() {
        console.log('FudgeStory Introduction Scene starting');
    }
    Template.Test = Test;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map