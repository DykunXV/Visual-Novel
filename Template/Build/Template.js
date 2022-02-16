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
        reprehensibility: 0,
        firstSpellSpoken: false,
        secondSpellSpoken: false,
        thirdSpellSpoken: false,
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
                console.log(Template.dataForSave.reprehensibility);
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
            { id: '002', scene: Template.MeetingYourFriends, name: 'Treffen mit Freunden', next: '003' },
            { id: '003', scene: Template.AWish, name: 'Ein Wunsch', next: '004' },
            { id: '004', scene: Template.ANewAwakening, name: 'Ein erneutes Erwachen', next: '005' },
            { id: '005', scene: Template.Together, name: 'Zweisamkeit', next: '006' },
            { id: '006', scene: Template.PrematureEnding, name: 'Vorzeitiges Ende' },
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
            placeholder: {
                T0000: '',
                T0001: '',
                T0002: '',
                T0003: '',
                T0004: '',
                T0005: '',
                T0006: '',
                T0007: '',
                T0008: '',
                T0009: '',
                T0010: '',
                T0011: '',
                T0012: '',
                T0013: '',
                T0014: '',
                T0015: '',
                T0016: '',
                T0017: '',
                T0018: '',
                T0019: '',
                T0020: '',
                T0021: '',
                T0022: '',
                T0023: '',
                T0024: '',
                T0025: '',
                T0026: '',
                T0027: '',
                T0028: '',
                T0029: '',
                T0030: '',
                T0031: '',
                T0032: '',
                T0033: '',
                T0034: '',
                T0035: '',
                T0036: '',
                T0037: '',
                T0038: '',
            },
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
        //Delay
        let signalDelay = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(2)]);
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
                T0000: 'Alice und Jason sind schon seit ihrer Kindheit miteinander befreundet. Sie gingen in denselben Kindergarten, dieselben Schulen und studieren nun letztendlich miteinander zusammen an derselben Universität.',
                T0001: 'Jason hat schon immer etwas für Alice empfunden. Diese Beziehung ist jedoch nur einseitig.',
                T0002: 'Thomas und Jason sind ebenfalls seit ihrer Kindheit befreundet. Ebenso wie Alice, ging er in denselben Kindergarten, dieselben Schulen und bestreitet nun ebenfalls das Studium. Ähnlich wie Jason, empfindet Alice etwas für Thomas, weswegen eine Art freundliche Rivalität zwischen den beiden herrscht.',
                T0003: 'Nach einem langen und spaßigen Tag zusammen, gehen die Freunde wieder getrennte Wege und legen sich alle ins Bett.',
            },
            jason: {
                T0000: 'Hm, irgendwo hier müssten sie sein.',
                T0001: 'Ah, da vorne ist glaube ich Alice!',
                T0002: 'Hey Alice, alles klar? Du siehst so blendend aus wie immer. Wo ist Thomas?',
                T0003: 'Verstehe, dann setzt ich mich mal einfach zu dir und warte mit.',
                T0004: 'Da ist ja auch schon der Mann der Stunde. Na, alles klar Thomas?',
                T0005: 'Was hast du mir denn mitgebracht?',
                T0006: '*Eigentlich hatte ich das nur geholt, um es zu probieren. Geschmeckt hat es mir definitiv nicht.*',
                T0007: 'Nur für die Zukunft – Nuss-Nougat ist verdammt ekelhaft. Ich wollte es letztes Mal nur probieren.',
                T0008: 'Dankeschön! Zitrone, bitte.',
                T0009: 'Tut mir leid, aber das Nuss-Nougat Eis war absolut ekelhaft.',
                T0010: 'Dankeschön.',
                T0011: 'Zitrone, bitte!',
                T0012: 'Ich wünschte mir, ihr beiden könntet einfach mal kurz ruhig sein!',
                T0013: 'Ich.. ach, es tut mir leid. Ich weiß nicht, was das gerade war. Ich habe heute etwas schlecht geschlafen, vielleicht liegt es daran.',
                T0014: '*Genau den gleichen Gedanken hatte ich heute auch*',
            },
            alice: {
                T0000: 'Ach Jason, du Kleiner Casanova. Thomas ist gerade Eis für uns kaufen.',
                T0001: 'Uh, ich freue mich schon auf mein Waldmeister Eis.',
                T0002: 'JASON! Das ist mein Eis!',
                T0003: 'Ja, Jason. Was ist los? Erzähl schon.',
            },
            thomas: {
                T0000: 'Auf was wartest du denn? Schönes Wetter?',
                T0001: 'Bei mir doch immer, Jason. Aber weniger Reden und mehr Eis essen.',
                T0002: 'Und ich mich erst auf mein Kirsch Eis.',
                T0003: 'Letztes Mal hast du das Nuss-Nougat Eis genommen, deswegen habe ich dir einfach das gleiche geholt.',
                T0004: 'Kein sonderliches Kavaliersdelikt, Jason.',
                T0005: 'Jason? Ich weiß nicht, ob du mich falsch verstanden hast, aber das ist mein Eis.',
                T0006: 'Oh, das wusste ich nicht. Ich hol dir einfach ein neues Eis. Welchen Geschmack hättest du gerne?',
                T0007: 'Ich hol dir einfach ein neues Eis. Welchen Geschmack hättest du denn gerne?',
                T0008: 'Auf dem Weg, der Herr.',
                T0009: 'Huh, na gut, an sich ist es irgendwo meine Schuld, da ich dich auch einfach hätte fragen können.',
                T0010: 'Woah, Jason. Kein Grund gleich so wütend zu werden. Ist alles in Ordnung bei dir?',
                T0011: 'Dann geh heute etwas früher schlafen. Und hör auf mit den ganzen Energy Drinks vorm Schlafen!',
            },
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0002);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0003);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0001);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0001);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0002);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0005);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0003);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0006);
        let firstDialogueElementOptions = {
            iChooseWaldmeister: 'Waldmeister Eis nehmen.',
            iChooseKirsche: 'Kirsch Eis nehmen.',
            iChooseNussNougat: 'Nuss-Nougat Eis nehmen.',
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iChooseWaldmeister:
                Template.dataForSave.reprehensibility += 5;
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0002);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0004);
                break;
            case firstDialogueElementOptions.iChooseKirsche:
                Template.dataForSave.reprehensibility += 5;
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0005);
                break;
            case firstDialogueElementOptions.iChooseNussNougat:
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0007);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0006);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0007);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0008);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0007);
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
                return '003';
        }
        let secondDialogueElementOptions = {
            iChooseSorry: '"Tut mir leid, aber das Nuss-Nougat Eis war absolut ekelhaft"',
            iChooseRude: '"Ich wünschte mir, ihr beiden könntet einfach mal kurz ruhig sein"',
        };
        let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, 'player-choice');
        switch (secondDialogueElement) {
            case secondDialogueElementOptions.iChooseSorry:
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0009);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0009);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0010);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0007);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0011);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0008);
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
                break;
            case secondDialogueElementOptions.iChooseRude:
                Template.dataForSave.reprehensibility += 5;
                Template.dataForSave.firstSpellSpoken = true;
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0012);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0010);
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0003);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0013);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0011);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0014);
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
                break;
        }
    }
    Template.MeetingYourFriends = MeetingYourFriends;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function AWish() {
        console.log('Scene 003_AWish starting');
        let text = {
            narrator: {
                T0000: 'Jason steht aus dem Bett auf.',
                T0001: 'Jason liest die Nachrichten im Gruppenchat. Dort berichten seine Freunde Alice und Thomas, dass sie auf einmal ihre Fähigkeit zu Sprechen verloren haben.',
                T0002: 'Jasons Handy fängt an zu vibrieren.',
                T0003: 'Jason ließt die neuen Nachrichten, in denen steht, dass beide seine Freunde wieder sprechen können.',
                T0004: 'Jason kommt im Skatepark an.',
                T0005: 'Die Jungs fangen an zu skaten, während Alice begeistert zuschaut. Nach einer Weile, stürzt Jason von seinem Brett.',
                T0006: 'Nach einem langen und, zumindest für Alice, spaßigen Tag zusammen, gehen die Freunde wieder getrennte Wege und legen sich alle ins Bett.',
            },
            jason: {
                T0000: '*Aufsteh Geräusche*',
                T0001: 'Ahh, wesentlich besser geschlafen, als gestern.',
                T0002: '*Nimmt Handy zur Hand*',
                T0003: 'Huch, einhundert neue Nachrichten im Gruppenchat?!? Was ist denn da passiert.',
                T0004: 'Wie kann das denn sein? Hat das vielleicht irgendetwas mit dem Eis zu tun? Nein, das kann nicht sein. Immerhin hatte ich auch eins und meiner Stimme geht es prächtig.',
                T0005: 'Moment! Kann es sein…?',
                T0006: 'Ich wünschte mir, ihr beiden könntet einfach mal kurz ruhig sein!',
                T0007: 'Das soll der Zauberspruch sein? „Ich wünschte mir“? Was ein langweiliger Zauberspruch!',
                T0008: 'Und vor allem soll das daran liegen? Aber warum denn erst heute? Warum ist das nicht schon gestern passiert?',
                T0009: 'Nein, das kann nicht sein. Das ist alles nur ein blöder Zufall.',
                T0010: 'Neue Nachrichten im Gruppenchat?',
                T0011: '…',
                T0012: 'Nur ein blöder Zufall. Das ist alles nur ein blöder Zufall.',
                T0013: 'Ich muss irgendwie auf andere Gedanken kommen. Ich frag mal, ob die anderen sich heute wieder treffen wollen, jetzt wo es ihnen besser geht.',
                T0014: 'Nichts. Absolut keine Benachrichtigungen.',
                T0015: 'Naja, einer muss wohl anfangen. Ich frag mal nach, ob wir heute wieder was unternehmen.',
                T0016: '*Schreibt Nachricht im Gruppenchat*',
                T0017: 'Also eigentlich nicht, nein.',
                T0018: 'Hey, Leute! Entschuldige die Verspätung, die Bahn war randvoll. Alles klar?',
                T0019: 'Super, super. ',
                T0020: 'Skatepark, also.',
                T0021: 'Du weißt, dass keiner von uns wirklich skaten kann und Alice eh nur zuschauen wird?',
                T0022: 'Du weißt, dass mindestens eine Person heute auf die Fresse fliegen wird?',
                T0023: 'Du weißt, dass wahrscheinlich du diese Person sein wirst?',
                T0024: 'Ach, ja.. Äh.. Ich weiß nicht wovon du redest.',
                T0025: 'Aua, mein Arsch tut weh.',
                T0026: 'Ich wünschte mir, dass ihr das einfach vergessen würdet“.',
                T0027: 'Sehr witzig, Thomas.',
                T0028: 'Oh? Gerade machst du dich noch über mich lustig und jetzt beneidest du mich? Geschieht dir recht würde ich sagen.',
            },
            alice: {
                T0000: 'Ja, gerne. Aber was genau wollen wir machen?',
                T0001: 'Dann steht das jetzt fest! Bis in einer Stunde!',
                T0002: 'Hey, Jason. Mach dir kein Kopf. Wir sind auch noch nicht lange da.',
                T0003: 'Wollt ihr heute noch skaten, oder euch nur weiterhin fertig machen?',
                T0004: 'Lass dich mal anschauen, Jason.',
                T0005: 'Wisst ihr was, vergisst es. Thomas, ich überlasse dir die ehrenvolle Aufgabe Jasons Arsch anzuschauen.',
            },
            thomas: {
                T0000: 'Dasselbe gilt für mich. Wie wäre es, wenn wir uns in einer Stunde im Skatepark treffen würden?',
                T0001: 'Kein Grund gleich gemein zu werden. Hast du etwa bessere Ideen?',
                T0002: 'Verstehe.',
                T0003: 'Hi, Jason.',
                T0004: 'Richtig.',
                T0005: 'Rich- Hey, moment Mal. Wer hat sich denn letztes Mal den Knöchel verstaucht?',
                T0006: 'Wie war das noch gleich? Ich werde heute auf die Fresse fliegen?',
                T0007: 'Wie wäre es, wenn du nächstes Mal einfach nicht auf die Fresse fliegst?',
                T0008: 'Warte, du willst dir seinen Arsch anschauen? Vielleicht hätte ich ja lieber auf Fresse fliegen sollen..',
            },
            thomasAndJason: {
                T0000: 'Entschuldigung.',
                T0001: '*Warum muss ich auch meine große Klappe aufmachen?*',
            }
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0001);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0002);
        if (Template.dataForSave.firstSpellSpoken == true) {
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0003);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0004);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0005);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0006);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0007);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0008);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0009);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0010);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0011);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0012);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0013);
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0014);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0015);
        }
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0016);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0000);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0000);
        let firstDialogueElementOptions = {
            iChooseGreat: '"Klingt super."',
            iChooseRude: '"Sonst noch andere langweilige Ideen?"',
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iChooseGreat:
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0001);
                break;
            case firstDialogueElementOptions.iChooseRude:
                Template.dataForSave.reprehensibility += 5;
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0001);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0017);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0002);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0018);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0003);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0002);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0019);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0020);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0004);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0021);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0004);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0022);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0004);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0023);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0005);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0024);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0003);
        await Template.ƒS.Speech.tell('Thomas und Jason', text.thomasAndJason.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0006);
        let secondDialogueElementOptions = {
            iChooseOuch: '"Aua, mein Arsch tut weh."',
            iChooseWish: '"Ich wünschte mir, dass ihr das einfach vergessen würdet."',
        };
        let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, 'player-choice');
        switch (secondDialogueElement) {
            case secondDialogueElementOptions.iChooseOuch:
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0025);
                break;
            case secondDialogueElementOptions.iChooseWish:
                Template.dataForSave.secondSpellSpoken = true;
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0026);
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0007);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0027);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0004);
        await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0008);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0028);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0005);
        await Template.ƒS.Speech.tell('Thomas und Jason', text.thomasAndJason.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
    }
    Template.AWish = AWish;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function ANewAwakening() {
        console.log('Scene 004_ANewAwakening starting');
        let text = {
            narrator: {
                T0000: 'Ohne zu Wissen, wie er seine magische Begabung benutzt, wandert Jason planlos durch sein Leben. Er studiert fertig, fängt mit dem Arbeiten an, heiratet, gründet eine Familie und stirbt eines Tages einen natürlichen Tod.',
                T0001: 'Jason wacht aus seinem Traum auf.',
                T0002: 'Jason macht sich auf den Weg zur Uni. Dort angekommen, trifft er auf seine Freunde.',
                T0003: 'Die Glocke der Universität fängt an zu läuten.',
                T0004: 'Jason und die anderen begeben sich in den entsprechenden Raum, um dort ihren Test zu schreiben. Jason ist der letzte, der fertig ist. Die Dozentin kommt auch ihn zu, um den Test aufzusammeln.',
                T0005: 'Jason verbringt den Rest des Tages damit zu lernen.',
                T0006: 'Jason verbringt den Rest des Tages damit Videospiele zu spielen.',
            },
            jason: {
                T0000: '*Aufsteh Geräusche*',
                T0001: 'Heute habe ich nicht so gut geschlafen. Aber ich hatte auch keinen Traum. Oder doch?',
                T0002: 'Ich kann mich wirklich nicht mehr daran erinnern..',
                T0003: 'Naja, ich habe auch keine Zeit darüber nachzudenken. Es ist Montag und ich habe gleich einen Kurs. Ab zur Uni!',
                T0004: 'Hey Leute! Alles klar?',
                T0005: '...',
                T0006: 'Hallo? Will mich niemand nach meinem Arsch fragen?',
                T0007: '*Oh, richtig. Ich hatte mir gestern gewünscht, dass sie es vergessen würden.*',
                T0008: '*Ich kann immer noch nicht ganz glauben, dass diese magischen Fähigkeiten real sind, aber die Situation spricht für sich.*',
                T0009: 'Nevermind, vergesst das bitte einfach.',
                T0010: 'Prächtig, danke der Nachfrage!',
                T0011: 'Mal zu was anderem. Habt ihr für den Test heute gelernt?',
                T0012: 'Nein, nein. Ich stimme dem guten Mann da vollkommen zu.',
                T0013: 'Entschuldige, aber ich war das Wochenende schwer beschäftigt mit zwei anderen Sachen, die äußerst anstrengend sein können.',
                T0014: 'Oh, wird wohl Zeit für den Test und somit unseren Untergang. Viel Erfolg euch.',
                T0015: 'Ja, gerade fertig geworden.',
                T0016: 'Natürlich.',
                T0017: 'Absolut nicht.',
                T0018: 'Ich wünschte mir, dass sie meinen Test mit der besten Note bewerten.',
                T0019: '*Kann man diese Frau überhaupt irgendwie glücklich stellen?*',
                T0020: '*Ich bin der letzte der mit dem Test fertig wurde. Das heißt alle anderen sind schon weg. Zeit nachhause zu gehen.*',
                T0021: 'Äh, ja, entschuldigen Sie.',
                T0022: '*Scheiß, scheiße, scheiße, habe ich das gerade wirklich getan? Habe ich gerade wirklich meine Dozentin manipuliert, nur, damit ich eine gute Note bekomme?*',
                T0023: '*Ganz ruhig bleiben Jason. Vielleicht hättest du auch so die beste Note bekommen.*',
                T0024: '*Nein, definitiv nicht. Die ganze vierte Aufgabe habe ich tierisch vergeigt.*',
                T0025: '*Verdammt. Naja, was getan ist, ist getan. Mir den Kopf darüber zu zerbrechen hilft mir jetzt auch nicht*',
                T0026: '*Ich bin der letzte der mit dem Test fertig wurde. Das heißt alle anderen sind schon weg. Zeit nachhause zu gehen.*',
                T0027: 'Endlich wieder Zuhause.',
                T0028: 'Viel vom Tag habe ich nicht mehr. Ich denke ich sollte noch etwas lernen, da der nächste Test bald ansteht.',
                T0029: 'Ich kann mich nicht nur auf meine magischen Kräfte verlassen. Ich sollte definitiv lernen.',
                T0030: 'Wieso lernen, wenn ich mich durch meine Probleme zaubern kann?',
            },
            alice: {
                T0000: 'Hey Jason.',
                T0001: 'Thomas..',
                T0002: 'Jason!',
                T0003: 'Meint er uns, Thomas?',
                T0004: 'Ja, gerade fertig geworden.',
            },
            thomas: {
                T0000: 'Hey hey.',
                T0001: 'Nenn mir bitte einen Grund, einen einzigen Grund, warum mich dein Arsch jemals interessieren sollte.',
                T0002: 'Ich gebe mein bestes.',
                T0003: 'Na, wie geht es deinem Wunderarsch?',
                T0004: 'Wieso lernen, wenn man auch nicht lernen kann?',
                T0005: 'Er meint uns, Alice.',
            },
            jasonsThoughts: {
                T0000: 'Wie ich sehe, hast du es nicht geschafft deine magische Begabung zu benutzen.',
                T0001: 'Schade, wirklich schade. Findest du das nicht etwas traurig?',
                T0002: 'Naja, ich will nun nicht noch mehr Zeit mit dir vergeuden, als nötig.',
                T0003: 'Bis dann!',
                T0004: 'Wie ich sehe hast du es geschafft die Macht in dir zu benutzen.',
                T0005: 'Wie wirst du mit dieser Kraft umgehen?',
                T0006: 'Wirst du sie für das Gute benutzen und Leuten helfen?',
                T0007: 'Oder wirst du sie eigennützig benutzen und dir all deine Wünsche erfüllen?',
                T0008: 'Oh? Ich habe keine Antwort erwartet, aber interessante Meinung. Schauen wir mal, ob das wirklich der Fall sein wird.',
            },
            dozentin: {
                T0000: 'Sind sie fertig?',
                T0001: 'Zufrieden mit Ihren Antworten?',
                T0002: 'Hochmut kommt vor dem Fall, Herr Jay.',
                T0003: 'Dann lernen sie vielleicht das nächste Mal, Herr Jay.',
                T0004: 'Träumen sollten sie im Bett behalten, Herr Jay.',
            }
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        if (Template.dataForSave.firstSpellSpoken == false && Template.dataForSave.secondSpellSpoken == false) {
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0000);
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0001);
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0002);
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0003);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
            return '000';
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0004);
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0005);
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0006);
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0007);
            let firstDialogueElementOptions = {
                iChooseGood: '"Ich werde sie natürlich für das Gute benutzen."',
                iChooseBad: '"Ist es so verkehrt, wenn ich sie für meine eigenen Zwecke benutze?"',
            };
            let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
            switch (firstDialogueElement) {
                case firstDialogueElementOptions.iChooseGood:
                    await Template.ƒS.Speech.tell(Template.characters.jason, '"Ich werde sie natürlich für das Gute benutzen."');
                    break;
                case firstDialogueElementOptions.iChooseBad:
                    Template.dataForSave.reprehensibility += 10;
                    await Template.ƒS.Speech.tell(Template.characters.jason, '"Ist es so verkehrt, wenn ich sie für meine eigenen Zwecke benutze?"');
                    break;
            }
            await Template.ƒS.Speech.tell(Template.characters.jasonsThoughts, text.jasonsThoughts.T0008);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0000);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0001);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0002);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0003);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0004);
            await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0000);
            await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0000);
            if (Template.dataForSave.secondSpellSpoken == true) {
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0005);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0006);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0001);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0007);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0008);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0009);
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0002);
            }
            else {
                await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0003);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0010);
            }
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0011);
            await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0004);
            await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0001);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0012);
            await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0002);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0013);
            await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0003);
            await Template.ƒS.Speech.tell(Template.characters.thomas, text.thomas.T0005);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0014);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
            await Template.ƒS.Speech.tell('Dozentin', text.dozentin.T0000);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0015);
            await Template.ƒS.Speech.tell('Dozentin', text.dozentin.T0001);
            let secondDialogueElementOptions = {
                iChooseSure: '"Natürlich."',
                iChooseNo: '"Absolut nicht."',
                iChooseWish: '"Ich wünschte mir, dass sie meinen Test mit der besten Note bewerten."',
            };
            let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementOptions, 'player-choice');
            switch (secondDialogueElement) {
                case secondDialogueElementOptions.iChooseSure:
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0016);
                    await Template.ƒS.Speech.tell('Dozentin', text.dozentin.T0002);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0019);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0020);
                    break;
                case secondDialogueElementOptions.iChooseNo:
                    Template.dataForSave.reprehensibility += 10;
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0017);
                    await Template.ƒS.Speech.tell('Dozentin', text.dozentin.T0003);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0019);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0020);
                    break;
                case secondDialogueElementOptions.iChooseWish:
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0018);
                    await Template.ƒS.Speech.tell('Dozentin', text.dozentin.T0004);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0021);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0022);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0023);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0024);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0025);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0026);
                    break;
            }
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0027);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0028);
            let thirdDialogueElementOptions = {
                iChooseLearn: 'Rest des Tages lernen.',
                iChooseMagic: 'Nicht lernen, da ich mich durch meine Probleme zaubern kann.',
            };
            let thirdDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementOptions, 'player-choice');
            switch (thirdDialogueElement) {
                case thirdDialogueElementOptions.iChooseLearn:
                    Template.dataForSave.reprehensibility -= 5;
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0029);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
                    break;
                case thirdDialogueElementOptions.iChooseMagic:
                    Template.dataForSave.reprehensibility += 5;
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0030);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
                    break;
            }
        }
    }
    Template.ANewAwakening = ANewAwakening;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Together() {
        console.log('Scene 005_Together starting');
        let text = {
            narrator: {
                T0000: 'Der Rest der Woche vergeht recht unspektakulär. Uni, Lernen, Schlafen, um es genauer zu beschreiben.',
                T0001: 'Jason steht aus seinem Bett auf.',
                T0002: 'Jason macht sich bereit für das Treffen und kommt dann in der Bowlinghalle an.',
                T0003: 'Jason und Alice verbringen die nächsten Stunden voller Spaß auf der Bowlingbahn.',
                T0004: 'Jason macht einen Salto und fällt dabei um.',
                T0005: 'Nach einem langem Gelächter, verabschieden sich die beiden und begeben sich zu Bett.',
            },
            jason: {
                T0000: '*Aufsteh Geräusche*',
                T0001: 'Schon wieder Samstag, huh? Wie schnell die Zeit doch vergeht.',
                T0002: 'Für heute ist Bowling mit Alice und Thomas geplant. Ich mache mich lieber mal bereit.',
                T0003: 'Hey, Alice! Thomas noch nicht da?',
                T0004: 'Nur.. wir.. zwei..',
                T0005: 'Oh, äh, ja, entschuldige. Also, was sagst du, fangen wir an?',
                T0006: 'Ah, sehr knapp, Alice. Fast hätte ich dich geschlagen.',
                T0007: 'Haha, ja, das stimmt wohl.',
                T0008: 'Hm, ich glaube nicht, warum?',
                T0009: '*Thomas, Thomas, Thomas. Immer geht es nur um Thomas..*',
                T0010: 'Kann Thomas das hier?',
                T0011: 'Ich wünschte mir, du würdest Thomas vergessen.',
                T0012: 'Ja, da hast du wohl recht, haha.',
                T0013: 'Ich wünschte mir, du würdest Tho--',
                T0014: '*Warte mal, was zur Hölle mache ich da gerade?*',
                T0015: '*Bin ich gerade wirklich dabei meine beste Freundin vergessen zu lassen, dass Thomas existiert? Nur, weil ich ein wenig eifersüchtig bin?*',
                T0016: '*Gott, was ist denn nur falsch mit mir?*',
                T0017: 'Oh, garnichts, garnichts.',
                T0018: 'Ich wollte dir was zeigen!',
                T0019: 'Ja.. Ja, da hast du wohl Recht.',
                T0020: 'Tut mir leid, Alice.',
                T0021: '*Ich denke dafür ist es zu spät..*',
            },
            alice: {
                T0000: 'Ah, hallo Jason.',
                T0001: 'Thomas liegt leider krank im Bett. Er wird es heute nicht schaffen. Es sind also nur wir zwei.',
                T0002: 'Ja, genau das habe ich gerade gesagt.',
                T0003: 'Jason?',
                T0004: 'Liebend gerne.',
                T0005: 'Du hattest wohl sehr viel Glück heute, nicht wahr? Thomas hätte uns aber beide zusammen platt gemacht.',
                T0006: 'Gibt es ein Spiel, in dem Thomas uns eigentlich nicht überlegen ist?',
                T0007: 'Nur so, nur so. Thomas ist schon bewundernswert.',
                T0008: 'Also Thomas hätte den Salto wahrscheinlich gemacht, ohne umzufallen, haha',
                T0009: 'Entschuldige, ich hab dich nicht ganz verstanden. Was wünscht du dir?',
                T0010: 'Da bin ich aber gespannt.',
                T0011: 'Jason, du weißt, dass du deine eigenen Fähigkeiten hast, in denen du Thomas und auch mir bei weitem überlegen bist.',
                T0012: 'Mach dir kein Kopf, Jason.',
            }
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0001);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0002);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0003);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0001);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0004);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0002);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0004);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0003);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0005);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0004);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0006);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0005);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0007);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0006);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0008);
        await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0007);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0009);
        let firstDialogueElementOptions = {
            iChooseImpress: '"Kann Thomas das hier?"',
            iChooseWish: '"Ich wünschte mir, du würdest Thomas vergessen"',
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iChooseImpress:
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0010);
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
                await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0008);
                await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0012);
                await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
                break;
            case firstDialogueElementOptions.iChooseWish:
                if (Template.dataForSave.reprehensibility <= 15) {
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0013);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0014);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0015);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0016);
                    await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0009);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0017);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0018);
                    await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0010);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0010);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
                    await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0008);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0012);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
                    break;
                }
                else {
                    Template.dataForSave.thirdSpellSpoken = true;
                    Template.dataForSave.reprehensibility += 5;
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0011);
                    await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0011);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0019);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0020);
                    await Template.ƒS.Speech.tell(Template.characters.alice, text.alice.T0012);
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0021);
                    break;
                }
        }
    }
    Template.Together = Together;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function PrematureEnding() {
        console.log('Scene 006_PrematureEnding starting');
        let text = {
            narrator: {
                T0000: 'Jason steht aus seinem Bett auf.',
                T0001: 'Jasons Handy fängt an zu vibrieren.',
                T0002: 'Jason ließt sich die Nachrichten im Gruppenchat durch.',
                T0003: 'Jason und seine Freunde leben ihr Leben vorerst normal weiter.. doch was wird Jason mit seiner Kraft in der Zukunft tun? Mehr dazu wann anders.',
                T0004: 'Jason ließt sich die Nachrichten im Gruppenchat durch.',
                T0005: 'Mit diesen Worten endet die Story vorerst.',
                T0006: 'Wird sich Alice an Thomas erinnern? Oder gibt es gewisse Konditionen, die für das Zaubern der Zauber erfüllt sein müssen? Mehr dazu wann anders.',
                T0007: 'Mit diesen Worten endet die Story vorerst.',
                T0008: 'Wird Thomas seine Erinnerungen an Alice vergessen? Oder gibt es gewisse Konditionen, die für das Zaubern der Zauber erfüllt sein müssen? Mehr dazu, wann anders.',
            },
            jason: {
                T0000: '*Aufsteh Geräusche*',
                T0001: 'Sonntag also.',
                T0002: 'Huch, was ist denn da los?',
                T0003: 'Ah, Thomas und Alice legen schon mal was, was wir heute unternehmen.',
                T0004: 'Verdammt, ich erinnere mich. Ich habe Alice manipuliert, damit sie alle Erinnerungen an Thomas vergisst.',
                T0005: 'Oh Gott, Alice hat wirklich alles über Thomas vergessen. Selbst Thomas hat mich angeschrieben und gefragt, was da los ist.',
                T0006: 'Was habe ich mir eigentlich gedacht. Nur weil ich in Alice verknallt bin, habe ich so etwas dummes getan?',
                T0007: 'Es gibt nur einen Weg das wieder in Ordnung zu bringen..',
                T0008: 'Ich wünschte mir, dass Alice sich wieder an Thomas erinnert.',
                T0009: 'Ich wünschte mir, dass Thomas alles über Alic-',
                T0010: '..nein. Nein, das geht zu weit.',
                T0011: 'Das ist absolut abgefuckt, was ich hier gerade vor habe!',
                T0012: 'Pack deine persönlichen Gefühle bei Seite, Jason und regel das mit deinem Gehirn!',
                T0013: 'Ich wünschte mir, dass Thomas alles über Alice vergisst.',
            },
        };
        //Musik
        Template.ƒS.Sound.fade(Template.audio.backgroundTheme, 0.02, 2, true);
        //In welcher Zeit wie viele Buchstaben angezeigt werden
        Template.ƒS.Speech.setTickerDelays(20, 2);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0000);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0001);
        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0001);
        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0002);
        if (Template.dataForSave.thirdSpellSpoken == false) {
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0002);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0003);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0003);
        }
        else {
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0004);
            await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0004);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0005);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0006);
            await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0007);
            let firstDialogueElementOptions = {
                iChooseGoodWish: '"Ich wünschte mir, dass Alice sich wieder an Thomas erinnert"',
                iChooseBadWish: '"Ich wünschte mir, dass Thomas alles über Alice vergisst"',
            };
            let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, 'player-choice');
            switch (firstDialogueElement) {
                case firstDialogueElementOptions.iChooseGoodWish:
                    await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0008);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
                    await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
                    break;
                case firstDialogueElementOptions.iChooseBadWish:
                    if (Template.dataForSave.reprehensibility <= 25) {
                        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0009);
                        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0010);
                        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0011);
                        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0012);
                        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0008);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0005);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0006);
                        break;
                    }
                    else {
                        await Template.ƒS.Speech.tell(Template.characters.jason, text.jason.T0013);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0007);
                        await Template.ƒS.Speech.tell(Template.characters.narrator, text.narrator.T0008);
                        break;
                    }
            }
        }
    }
    Template.PrematureEnding = PrematureEnding;
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