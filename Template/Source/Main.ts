namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log('FudgeStory template starting');

  //define transitions
  export let transition = {
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
  export let audio = {
    backgroundTheme: './Audio/BGM/TEST.mp3',
  };

  //define items
  export let items = {
    crowbar: {
      name: 'Crowbar',
      description: 'Krasses Teil',
      image: './Images/Items/crowbar.png',
    },
  };

  //define backgrounds
  export let locations = {
    bedroom: {
      name: 'Bedroom',
      background: './Images/Backgrounds/test.jpg',
    },
  };

  //define characters
  export let characters = {
    narrator: {
      name: '',
    },
    john: {
      name: 'John',
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: './Images/Characters/test/1.jpg',
        happy: './Images/Characters/test/1.jpg',
        upset: './Images/Characters/test/1.jpg',
      },
      smol: './Images/Characters/test/1.jpg',
    },
    mario: {
      name: 'Mario',
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: '',
        happy: '',
        upset: '',
      },
    },
    chris: {
      name: 'Chris',
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: '',
        happy: '',
        upset: '',
      },
    },
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

  //define data that will be saved
  export let dataForSave = {
    nameProtagonist: '',
    points: 0,
  };

  //define in game Menu
  let inGameMenu = {
    save: 'Save',
    load: 'Load',
    close: 'Close',
  };

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
        menu = false;
        break;
    }
  }

  let menu: boolean = true;

  //Shortcuts für's Menü
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
      case ƒ.KEYBOARD_CODE.M:
        if (menu) {
          console.log('Closing Menu');
          gameMenu.close();
          menu = false;
        } else {
          console.log('Opening Menu');
          gameMenu.open();
          menu = true;
        }
    }
  }

  window.addEventListener('load', start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, 'gameMenu');
    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [
      { id: 'Einführung', scene: Introduction, name: 'Introduction' },
      { id: 'Test', scene: Test, name: 'Test', next: 'Einführung' },
    ];

    let uiElement: HTMLElement = document.querySelector('[type=interface]');
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
