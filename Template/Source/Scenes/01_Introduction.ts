namespace Template {
  export async function Introduction(): ƒS.SceneReturn {
    console.log('FudgeStory Introduction Scene starting');

    let testVar = 'HAAY'

    let text = {
      narrator: {
        T0000: '',
        T0001: '',
      },
      john: {
        T0000: `Hi ${testVar} bra`,
        T0001: 'Bye John',
      },
      mario: {
        T0000: 'Hi Mario',
        T0001: 'Bye Mario',
      },
    };

    //Musik
    ƒS.Sound.fade(audio.backgroundTheme, 0.02, 2, true)

    //In welcher Zeit wie viele Buchstaben angezeigt werden
    ƒS.Speech.setTickerDelays(20, 2); 

    //Delay
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(5)])

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
    await ƒS.Speech.tell(characters.narrator, 'Namen eingeben ');
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    await ƒS.Speech.tell(characters.john, text.john.T0000);
    await ƒS.Character.animate(characters.john, characters.john.pose.happy, fromRightToLeft());
    await signalDelay();
    await ƒS.Speech.tell(characters.john, 'hey, manuellerr text');
    await ƒS.Character.hide(characters.john);

    await ƒS.Inventory.add(items.crowbar);
    await ƒS.Inventory.open();


    console.log(dataForSave.nameProtagonist);

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

    await ƒS.Speech.tell(characters.john, text.john.T0000);
  }
}
