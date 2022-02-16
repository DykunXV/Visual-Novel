namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log('FudgeStory template starting');

  //define transitions
  export let transition = {
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
  export let audio = {
    dreamTheme: './Audio/BGM/incompetech/Impact Prelude.mp3',
    bedroomTheme: './Audio/BGM/incompetech/Late Night Radio.mp3',
    busStopTheme: './Audio/BGM/incompetech/Vivacity.mp3',
    skateparkTheme: './Audio/BGM/incompetech/Late Night Radio.mp3',
    schoolTheme: './Audio/BGM/incompetech/Late Night Radio.mp3',
    bowlingTheme: './Audio/BGM/incompetech/Late Night Radio.mp3',
  };

  //define items
  export let items = {
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
  export let locations = {
    dream: {
      name: 'Dream',
      background: './Images/Backgrounds/dream.jpg',
    },
    bedroom: {
      name: 'Bedroom',
      background: './Images/Backgrounds/bedroom.jpg',
    },
    bedroomNight: {
      name: 'Bedroom Night',
      background: './Images/Backgrounds/bedroomNight.jpg',
    },
    busStop: {
      name: 'Bus stop',
      background: './Images/Backgrounds/busStop.jpg',
    },
  };

  //define characters
  export let characters = {
    narrator: {
      name: 'Erzähler',
    },
    jason: {
      name: 'Jason',
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: './Images/Characters/Jason/Jason_Neutral.png',
        neutral2: './Images/Characters/Jason/Jason_Neutral2.png',
        thinking: './Images/Characters/Jason/Jason_Thinking.png',
        disappointed: './Images/Characters/Jason/Jason_Disappointed.png',
      },
    },
    alice: {
      name: 'Alice',
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: './Images/Characters/Alice/Alice_Neutral.png',
        neutral2: './Images/Characters/Alice/Alice_Neutral2.png',
        happy: './Images/Characters/Alice/Alice_Happy.png',
        sad: './Images/Characters/Alice/Alice_Sad.png',
      },
    },
    thomas: {
      name: 'Thomas',
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: './Images/Characters/Thomas/Thomas_Neutral.png',
        neutral2: './Images/Characters/Thomas/Thomas_Neutral2.png',
        thinking: './Images/Characters/Thomas/Thomas_Thinking.png',
        questioning: './Images/Characters/Thomas/Thomas_Questioning.png',
      },
    },
    jasonsThoughts: {
      name: "Jasons Gedanken",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: './Images/Characters/JasonsThoughts/JasonsThoughts_Neutral.png',
        neutral2: './Images/Characters/JasonsThoughts/JasonsThoughts_Neutral2.png',
        thinking: './Images/Characters/JasonsThoughts/JasonsThoughts_Thinking.png',
        disappointed: './Images/Characters/JasonsThoughts/JasonsThoughts_Disappointed.png',
      }
    }
  };

  //define animations
  export function fromRightToOutOfCanvas(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(30, 100) },
      end: { translation: ƒS.positionPercent(120, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function fromRightToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomright },
      end: { translation: ƒS.positions.bottomleft },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function fromMidToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 100) },
      end: { translation: ƒS.positionPercent(75, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function fromMidToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 100) },
      end: { translation: ƒS.positionPercent(25, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  //define data that will be saved
  export let dataForSave = {
    nameProtagonist: 'TEST123',
    reprehensibility: 0,
    firstSpellSpoken: false,
    secondSpellSpoken: false,
    thirdSpellSpoken: false,
  };


  //add custom class
  export function showCredits(): void {
    ƒS.Text.addClass("credits");
    ƒS.Text.print("Hier könnten jetzt Credits stehen.");

    // showCredits();
  }

  //define in game Menu
  let inGameMenu = {
    save: 'Save',
    load: 'Load',
    close: 'Close',
  };

  //define animations for game Menu
  let gameMenu: ƒS.Menu;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenu.save:
        await ƒS.Progress.save();
        break;
      case inGameMenu.load:
        await ƒS.Progress.load();
        break;
      case inGameMenu.close:
        gameMenu.close();
        document.getElementById('scene').style.display = 'inline-block';
        document.getElementById('menu-background').style.display = 'none';
        menu = false;
        break;
    }
  }

  let menu: boolean = true;

  //Define menu Shortcuts
  document.addEventListener('keydown', hndKeyPress);
  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log('Saved');
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log('Loaded');
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.F10:
        console.log(dataForSave.reprehensibility)
        if (menu) {
          console.log('Closing Menu');
          gameMenu.close();
          document.getElementById('scene').style.display = 'inline-block'; //needed to activate background menu when 'F10' is pressed
          document.getElementById('menu-background').style.display = 'none';
          menu = false;
        } else {
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
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, 'gameMenu');
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      //{ id: '000', scene: ADream, name: 'Ein Traum', next: '001' },
      //{ id: '001', scene: MyIntroduction, name: 'Einführung', next: '002' },
      { id: '002', scene: MeetingYourFriends, name: 'Treffen mit Freunden', next: '003' },
      { id: '003', scene: AWish, name: 'Ein Wunsch', next: '004' },
      { id: '004', scene: ANewAwakening, name: 'Ein erneutes Erwachen', next: '005' },
      { id: '005', scene: Together, name: 'Zweisamkeit', next: '006' },
      { id: '006', scene: PrematureEnding, name: 'Vorzeitiges Ende'},
    ];

    let uiElement: HTMLElement = document.querySelector('[type=interface]');
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
