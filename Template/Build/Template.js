"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log('FudgeStory template starting');
    //define transitions
    Template.transition = {
        puzzle: {
            duration: 1,
            alpha: './Images/Transitions/puzzle.png',
            edge: 1,
        },
        waves: {
            duration: 2,
            alpha: './Images/Transitions/waves.jpg',
            edge: 1,
        },
        circlewipeClockwise: {
            duration: 1,
            alpha: './Images/Transitions/circlewipe-cw.jpg',
            edge: 1,
        },
        circlewipeTop: {
            duration: 2,
            alpha: './Images/Transitions/circlewipe-top.jpg',
            edge: 1,
        },
    };
    //define audio
    Template.audio = {
        backgroundTheme: './Audio/BGM/TEST.mp3',
    };
    //define items
    Template.items = {
        Crowbar: {
            name: 'Crowbar',
            description: 'Krasses Teil',
            image: './Images/Items/crowbar.jpg',
        },
        Blowbar: {
            name: 'Blowbar',
            description: 'Krasseres Teil',
            image: './Images/Items/blowbar.jpg',
        },
    };
    //define backgrounds
    Template.locations = {
        dream: {
            name: 'Dream',
            background: './Images/Backgrounds/dream.jpg',
        },
        bedroom: {
            name: 'Bedroom',
            background: './Images/Backgrounds/bedroom.jpg',
        },
    };
    //define characters
    Template.characters = {
        narrator: {
            name: 'Erzähler',
        },
        jason: {
            name: 'Jason',
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: './Images/Characters/Jason/Jason_Neutral.png',
                angry: './Images/Characters/test/1.jpg',
                happy: './Images/Characters/test/1.jpg',
                upset: './Images/Characters/test/1.jpg',
            },
        },
        alice: {
            name: 'Alice',
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: './Images/Characters/Alice/Alice_Neutral.png',
                angry: './Images/Characters/test/1.jpg',
                happy: './Images/Characters/test/1.jpg',
                upset: './Images/Characters/test/1.jpg',
            },
        },
        thomas: {
            name: 'Thomas',
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: './Images/Characters/Thomas/Thomas_Neutral.png',
                angry: './Images/Characters/test/1.jpg',
                happy: './Images/Characters/test/1.jpg',
                upset: './Images/Characters/test/1.jpg',
            },
        },
        jasonsThoughts: {
            name: "Jasons Gedanken",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: './Images/Characters/JasonsThoughts/JasonsThoughts_Neutral.png',
            }
        }
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
    //add custom class
    function showCredits() {
        Template.ƒS.Text.addClass("credits");
        Template.ƒS.Text.print("Hier könnten jetzt Credits stehen.");
        // showCredits();
    }
    Template.showCredits = showCredits;
    //define in game Menu
    let inGameMenu = {
        save: 'Save',
        load: 'Load',
        close: 'Close',
    };
    //define animations for game Menu
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
                document.getElementById('scene').style.display = 'inline-block';
                document.getElementById('menu-background').style.display = 'none';
                menu = false;
                break;
        }
    }
    let menu = true;
    //Define menu Shortcuts
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
                    document.getElementById('scene').style.display = 'inline-block'; //needed to activate background menu when 'F10' is pressed
                    document.getElementById('menu-background').style.display = 'none';
                    menu = false;
                }
                else {
                    console.log('Opening Menu');
                    gameMenu.open();
                    document.getElementById('scene').style.display = 'none'; //needed to deactivate background menu when 'F10' is pressed
                    document.getElementById('menu-background').style.display = 'inline-block';
                    console.log("hey");
                    menu = true;
                }
        }
    }
    window.addEventListener('load', start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenu, buttonFunctionalities, 'gameMenu');
        buttonFunctionalities("Close");
        let scenes = [
            { id: '000', scene: Template.ADream, name: 'Ein Traum', next: '001' },
            { id: '001', scene: Template.MyIntroduction, name: 'Einführung', next: '002' },
            { id: '002', scene: Template.MeetingYourFriends, name: 'Treffen mit Freunden', next: '000' },
        ];
        let uiElement = document.querySelector('[type=interface]');
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function ADream() {
        console.log('Scene 001_Introduction starting');
        let text = {
            jasonsThoughts: {
                T0000: 'Die Welt, in der wir leben, ist ein schöner Ort.',
                T0001: 'Man könnte fast schon behaupten, dass eine gewisse Magie hinter allem steckt.',
                T0002: 'Alles in unserem Universum soll mal nicht existiert haben? Der Urknall soll für alles verantwortlich sein?',
                T0003: 'Woher kam denn der Urknall?',
                T0004: 'Plausible Erläuterungen gibt es nicht. Warum also glauben wir nicht an ein wenig Magie in unserem Leben?',
                T0005: 'In Anbetracht all dieser Fakten - warum glaubst du denn, nicht an ein bisschen Magie in dir?',
                T0006: 'Glaube zum Beispiel daran, dass du jetzt deinen Namen ändern kannst.',
                T0007: 'Jeder wird vergessen, wie dein vorheriger Name war.',
                T0008: 'Wenn das der für dich möglich wäre, wie würdest du heißen wollen?',
                T0009: 'Ein interessanter Name. Am besten vergisst du ihn nicht, denn es ist nun deiner.',
                T0010: 'Nun schreite voran und wache aus diesem Traum auf. Entdecke deine wahren Kräfte.',
            }
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        await Template.ƒS.Location.show(Template.locations.dream);
        await Template.ƒS.update(Template.transition.circlewipeTop.duration, Template.transition.circlewipeTop.alpha, Template.transition.circlewipeTop.edge);
        await Template.ƒS.Character.show(Template.characters.jasonsThoughts, Template.characters.jasonsThoughts.pose.neutral, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0000);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0001);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0002);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0003);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0004);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0005);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0006);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0007);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0008);
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        Template.characters.jason.name = Template.dataForSave.nameProtagonist;
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0009);
        await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0010);
        await Template.ƒS.Character.hide(Template.characters.jasonsThoughts);
        await Template.ƒS.update(1);
    }
    Template.ADream = ADream;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function MyIntroduction() {
        console.log('Scene 001_Introduction starting');
        let text = {
            jason: {
                T0000: '*Aufsteh Geräusche*',
                T0001: 'Huh, was ein Traum.',
                T0002: '...',
                T0003: 'Magie, huh?',
                T0004: 'Falls ich wirklich Magie besitze, taucht jetzt vor meinen Augen ein Hase auf!',
                T0005: '...',
                T0006: '..........',
                T0007: 'Was bin ich auch für ein Idiot auch nur für eine Sekunde überhaupt daran geglaubt zu haben.',
                T0008: 'Warum sollte ich, ein gewöhnlicher einundzwanzigjähriger Student, in der Lage so komplexe Dinge wie Magie zu benutzen?',
                T0009: 'Ich verstehe Mathe schon fast kaum, und das sollte vermutlich wesentlich leichter sein.',
                T0010: 'Naja, zurück ins echte Leben. Es ist Samstag, das heißt ich habe den ganzen Tag für mich!',
                T0011: 'Was mache ich denn am besten mit meiner Freizeit..',
                T0012: 'Ich glaube meine Freunde wollten heute zusammen was unternehmen. Vielleicht kann ich da noch mitmischen.',
                T0013: 'Hm, irgendwie überzwingt mich gerade der Drang zu schlafen.',
                T0014: 'Ein paar Stunden Schlaf würden mir wahrscheinlich nicht weh tun. Zurück in die Traumwelt!',
                T0015: 'Ah, du schon wieder! Hab das mit der Magie probiert. Hat nicht geklappt.',
                T0016: 'Warte mal, stalkst du mich?',
                T0017: 'Ah, ja, das ergibt Sinn..',
                T0018: 'Also, um zurück zu der Magie zu kommen, was wäre denn ein solcher Zauberspruch?',
                T0019: 'Dann erzählst du mir hier quasi eventuell auch nur Humbug?',
                T0020: 'Ich sollte echt keine Energy Drinks mehr vor dem Schlafen trinken. Das waren absolut wirre Träume heute.',
                T0021: 'Naja, da sich das mit dem Schlaf jetzt geklärt hat, kann ich wohl auch was anderes machen.',
                T0022: 'Ich glaube meine Freunde wollten heute zusammen was unternehmen. Vielleicht kann ich da noch mitmischen.',
            },
            jasonsThoughts: {
                T0000: 'Ist das dein Ernst? Ich erwecke in dir Kraft die Magie in dir zu benutzen und du gehst wieder schlafen?',
                T0001: 'DU HAST NICHT MAL ANSATZWEISE PROBIERT ETWAS ZU MACHEN.',
                T0002: 'Wer auch nur ansatzweise etwas von Magie weiß, der weiß auch, dass zu jedem Zauber ein Spruch gehört, der aufgesagt werden muss.',
                T0003: 'Ich bin Teil deines Traums! Deine Gedanken! Ich bin quasi du!',
                T0004: 'Ich weiß nicht, ob du mir gerade nicht zugehört hast, aber ich bin quasi du. Ich habe diesbezüglich also genau so wenig Ahnung wie du.',
                T0005: 'So, mir reicht es. Ich wecke dich jetzt wieder auf und dann gehst du irgendwo hin und versuchst wenigstens deine Kraft zu benutzen. Tschüss.',
            },
            narrator: {
                T0000: `${Template.dataForSave.nameProtagonist} wacht aus seinem Traum auf.`,
                T0001: `${Template.dataForSave.nameProtagonist} schläft wieder ein.`,
                T0002: `${Template.dataForSave.nameProtagonist} wacht wieder aus seinem Traum auf.`,
            },
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        //Delay
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(2)]);
        await Template.ƒS.Location.show(Template.locations.bedroom);
        await Template.ƒS.update(Template.transition.waves.duration, Template.transition.waves.alpha, Template.transition.waves.edge);
        await Template.ƒS.Character.show(Template.characters.jason, Template.characters.jason.pose.neutral, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0001);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0002);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0003);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0004);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0005);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0006);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0007);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0008);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0009);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0010);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0011);
        let firstDialogueElementOptions = {
            iChooseFriends: 'Mit Freunden treffen.',
            iChooseSleep: 'Weiter schlafen.',
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iChooseFriends:
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0012);
                break;
            case firstDialogueElementOptions.iChooseSleep:
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0013);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0014);
                await Template.ƒS.Location.show(Template.locations.dream);
                await Template.ƒS.Character.hide(Template.characters.jason);
                await Template.ƒS.update(Template.transition.waves.duration, Template.transition.waves.alpha, Template.transition.waves.edge);
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
                await Template.ƒS.Character.show(Template.characters.jasonsThoughts, Template.characters.jasonsThoughts.pose.neutral, Template.ƒS.positionPercent(50, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0000);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0015);
                await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0001);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0016);
                await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0002);
                await Template.ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0003);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0017);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0018);
                await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0004);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0019);
                await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0005);
                await Template.ƒS.Character.hide(Template.characters.jasonsThoughts);
                await Template.ƒS.Location.show(Template.locations.bedroom);
                await Template.ƒS.Character.show(Template.characters.jason, Template.characters.jason.pose.neutral, Template.ƒS.positionPercent(50, 100));
                await Template.ƒS.update(Template.transition.waves.duration, Template.transition.waves.alpha, Template.transition.waves.edge);
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0020);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0021);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0022);
                break;
        }
    }
    Template.MyIntroduction = MyIntroduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function MeetingYourFriends() {
        console.log('Scene 002_MeetingYourFriends starting');
        let text = {
            narrator: {
                T0000: '',
                T0001: '',
            },
            jason: {
                T0000: `Hi ${Template.dataForSave.nameProtagonist} bra`,
                T0001: 'Bye jason',
            },
            alice: {
                T0000: 'Hi Alice',
                T0001: 'Bye Alice',
            },
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        //Delay
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(2)]);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, `Hi ${Template.dataForSave.nameProtagonist} bra`);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0000);
        await Template.ƒS.Character.animate(Template.characters.jason, Template.characters.jason.pose.happy, Template.fromRightToLeft());
        await signalDelay();
        await Template.ƒS.Speech.tell(Template.characters.jason, 'hey, manueller text');
        await Template.ƒS.Character.hide(Template.characters.jason);
        let firstDialogueElementOptions = {
            iSayOk: 'Okay.',
            iSayYes: 'Ja.',
            iSayNo: 'Nein.',
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.jason, 'hey, manueller text');
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.show(Template.characters.alice, Template.characters.alice.pose.angry, Template.ƒS.positionPercent(30, 100));
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0000);
        }
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0001);
    }
    Template.MeetingYourFriends = MeetingYourFriends;
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
            jason: {
                T0000: `Hi ${Template.dataForSave.nameProtagonist} bra`,
                T0001: 'Bye jason',
            },
            alice: {
                T0000: 'Hi Alice',
                T0001: 'Bye Alice',
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
        await Template.ƒS.Character.show(Template.characters.jason, Template.characters.jason.pose.happy, Template.ƒS.positionPercent(30, 100));
        //console.log(items);
        //ƒS.Inventory.add(items.Blowbar);
        //ƒS.Inventory.open();
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.narrator, 'Namen eingeben ');
        Template.dataForSave.nameProtagonist = await Template.ƒS.Speech.getInput();
        await Template.ƒS.Speech.tell(Template.characters.jason, `Hi ${Template.dataForSave.nameProtagonist} bra`);
        await Template.ƒS.Character.animate(Template.characters.jason, Template.characters.jason.pose.happy, Template.fromRightToLeft());
        await signalDelay();
        await Template.ƒS.Speech.tell(Template.characters.jason, 'hey, manueller text');
        await Template.ƒS.Character.hide(Template.characters.jason);
        let firstDialogueElementOptions = {
            iSayOk: 'Okay.',
            iSayYes: 'Ja.',
            iSayNo: 'Nein.',
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.jason, 'hey, manueller text');
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.show(Template.characters.alice, Template.characters.alice.pose.angry, Template.ƒS.positionPercent(30, 100));
                break;
            case firstDialogueElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0000);
        }
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0001);
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Test() {
        console.log('FudgeStory Test Scene starting');
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
        await Template.ƒS.Speech.tell(Template.characters.narrator, 'Namen eingeben2 ');
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
        await Template.ƒS.Speech.tell(Template.characters.john, text.john.T0001);
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