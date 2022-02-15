namespace Template {
  export async function Introduction(): ƒS.SceneReturn {
    console.log('FudgeStory Introduction Scene starting');

    let text = {
      narrator: {
        T0000: '',
        T0001: '',
      },
      jason: {
        T0000: `Hi ${dataForSave.nameProtagonist} bra`,
        T0001: 'Bye jason',
      },
      alice: {
        T0000: 'Hi Alice',
        T0001: 'Bye Alice',
      },
    };

    //Musik
    ƒS.Sound.fade(audio.backgroundTheme, 0.02, 2, true)

    //In welcher Zeit wie viele Buchstaben angezeigt werden
    ƒS.Speech.setTickerDelays(20, 2); 

    //Delay
    let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)])

    await ƒS.Location.show(locations.bedroom);
    await ƒS.update(
      transition.clock.duration,
      transition.clock.alpha,
      transition.clock.edge
    );
    await ƒS.Character.show(
      characters.jason,  
      characters.jason.pose.happy,
      ƒS.positionPercent(30, 100)
    );

    //console.log(items);
    //ƒS.Inventory.add(items.Blowbar);
    //ƒS.Inventory.open();

    await ƒS.update(1);
    await ƒS.Speech.tell(characters.narrator, 'Namen eingeben ');
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    await ƒS.Speech.tell(characters.jason, `Hi ${dataForSave.nameProtagonist} bra`);
    await ƒS.Character.animate(characters.jason, characters.jason.pose.happy, fromRightToLeft());
    await signalDelay();
    await ƒS.Speech.tell(characters.jason, 'hey, manueller text');
    await ƒS.Character.hide(characters.jason);

    

    let firstDialogueElementOptions = {
      iSayOk: 'Okay.',
      iSayYes: 'Ja.',
      iSayNo: 'Nein.',
    };

    let firstDialogueElement = await ƒS.Menu.getInput(
      firstDialogueElementOptions,
      'player-choice'
    );

    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iSayOk:
        await ƒS.Speech.tell(characters.jason, 'hey, manueller text');
        break;
      case firstDialogueElementOptions.iSayYes:
        await ƒS.Character.show(
          characters.alice,
          characters.alice.pose.angry,
          ƒS.positionPercent(30, 100)
        );
        break;
      case firstDialogueElementOptions.iSayNo:
        await ƒS.Speech.tell(characters.alice, text.alice.T0000);
    }

    await ƒS.Speech.tell(characters.jason, text.jason.T0001);
  }
}
