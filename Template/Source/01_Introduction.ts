namespace Template {
  export async function Introduction(): ƒS.SceneReturn {
    console.log('FudgeStory Introduction Scene starting');

    let text = {
      narrator: {
        T0000: '',
        T0001: '',
      },
      john: {
        T0000: 'Hi John',
        T0001: 'Bye John',
      },
      mario: {
        T0000: 'Hi Mario',
        T0001: 'Bye Mario',
      },
    };

    await ƒS.Location.show(locations.bedroom);
    await ƒS.update(
      transition.clock.duration,
      transition.clock.alpha,
      transition.clock.edge
    );
    await ƒS.Character.show(
      characters.john,
      characters.john.pose.happy,
      ƒS.positionPercent(30, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.john, text.john.T0000);
    await ƒS.Speech.tell(characters.john, 'hey, manueller text');

    let firstDialogueElementOptions = {
      iSayOk: 'Okay.',
      iSayYes: 'Ja.',
      iSayNo: 'Nein.',
    };

    let firstDialogueElement = await ƒS.Menu.getInput(
      firstDialogueElementOptions,
      'individualCSSClass'
    );

    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayOk:
        await ƒS.Speech.tell(characters.john, 'hey, manueller text');
        break;
      case firstDialogueElementOptions.iSayYes:
        await ƒS.Character.show(
          characters.mario,
          characters.mario.pose.angry,
          ƒS.positionPercent(30, 100)
        );
        break;
      case firstDialogueElementOptions.iSayNo:
        await ƒS.Speech.tell(characters.mario, text.mario.T0000);
    }
  }
}
