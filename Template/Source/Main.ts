namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transitions
  export let transition = {
    clock: {
      duration: 1,
      alpha: "./Images/Transitions/puzzle.png",
      edge: 1,
    },
    longerClock: {
      duration: 2,
      alpha: "./Images/Transitions/puzzle.png",
      edge: 1,
    }
  };

  //define audio
  export let audio = {
    backgroundTheme: "./Audio/BGM/TEST.mp3",
  };

  //define backgrounds
  export let locations = {
    bedroom: {
      name: "Bedroom",
      background: "./Images/Backgrounds/test.jpg"
    }
  };

  //define characters
  export let characters = {
    narrator: {
      name: "",
    },
    john: {
      name: "John",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "./Images/Characters/test/1.jpg",
        happy: "",
        upset: ""
      }
    },
    mario: {
      name: "Mario",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "",
        upset: ""
      }
    },
    chris: {
      name: "Chris",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "",
        happy: "",
        upset: ""
      }
    }
  };

  export let dataForSave = {
    
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [

      { scene: Introduction, name: "Introduction" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}