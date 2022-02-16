namespace Template {
  export async function MeetingYourFriends(): ƒS.SceneReturn {
    console.log('Scene 002_MeetingYourFriends starting');

    let text = {
      narrator: {
        T0000:
          'Alice und Jason sind schon seit ihrer Kindheit miteinander befreundet. Sie gingen in denselben Kindergarten, dieselben Schulen und studieren nun letztendlich miteinander zusammen an derselben Universität.',
        T0001:
          'Jason hat schon immer etwas für Alice empfunden. Diese Beziehung ist jedoch nur einseitig.',
        T0002:
          'Thomas und Jason sind ebenfalls seit ihrer Kindheit befreundet. Ebenso wie Alice, ging er in denselben Kindergarten, dieselben Schulen und bestreitet nun ebenfalls das Studium. Ähnlich wie Jason, empfindet Alice etwas für Thomas, weswegen eine Art freundliche Rivalität zwischen den beiden herrscht.',
        T0003:
          'Nach einem langen und spaßigen Tag zusammen, gehen die Freunde wieder getrennte Wege und legen sich alle ins Bett.',
      },
      jason: {
        T0000: 'Hm, irgendwo hier müssten sie sein.',
        T0001: 'Ah, da vorne ist glaube ich Alice!',
        T0002:
          'Hey Alice, alles klar? Du siehst so blendend aus wie immer. Wo ist Thomas?',
        T0003:
          'Verstehe, dann setzt ich mich mal einfach zu dir und warte mit.',
        T0004:
          'Da ist ja auch schon der Mann der Stunde. Na, alles klar Thomas?',
        T0005: 'Was hast du mir denn mitgebracht?',
        T0006:
          '*Eigentlich hatte ich das nur geholt, um es zu probieren. Geschmeckt hat es mir definitiv nicht.*',
        T0007:
          'Nur für die Zukunft – Nuss-Nougat ist verdammt ekelhaft. Ich wollte es letztes Mal nur probieren.',
        T0008: 'Dankeschön! Zitrone, bitte.',
        T0009: 'Tut mir leid, aber das Nuss-Nougat Eis war absolut ekelhaft.',
        T0010: 'Dankeschön.',
        T0011: 'Zitrone, bitte!',
        T0012:
          'Ich wünschte mir, ihr beiden könntet einfach mal kurz ruhig sein!',
        T0013:
          'Ich.. ach, es tut mir leid. Ich weiß nicht, was das gerade war. Ich habe heute etwas schlecht geschlafen, vielleicht liegt es daran.',
        T0014: '*Genau den gleichen Gedanken hatte ich heute auch*',
      },
      alice: {
        T0000:
          'Ach Jason, du Kleiner Casanova. Thomas ist gerade Eis für uns kaufen.',
        T0001: 'Uh, ich freue mich schon auf mein Waldmeister Eis.',
        T0002: 'JASON! Das ist mein Eis!',
        T0003: 'Ja, Jason. Was ist los? Erzähl schon.',
      },
      thomas: {
        T0000: 'Auf was wartest du denn? Schönes Wetter?',
        T0001:
          'Bei mir doch immer, Jason. Aber weniger Reden und mehr Eis essen.',
        T0002: 'Und ich mich erst auf mein Kirsch Eis.',
        T0003:
          'Letztes Mal hast du das Nuss-Nougat Eis genommen, deswegen habe ich dir einfach das gleiche geholt.',
        T0004: 'Kein sonderliches Kavaliersdelikt, Jason.',
        T0005:
          'Jason? Ich weiß nicht, ob du mich falsch verstanden hast, aber das ist mein Eis.',
        T0006:
          'Oh, das wusste ich nicht. Ich hol dir einfach ein neues Eis. Welchen Geschmack hättest du gerne?',
        T0007:
          'Ich hol dir einfach ein neues Eis. Welchen Geschmack hättest du denn gerne?',
        T0008: 'Auf dem Weg, der Herr.',
        T0009:
          'Huh, na gut, an sich ist es irgendwo meine Schuld, da ich dich auch einfach hätte fragen können.',
        T0010:
          'Woah, Jason. Kein Grund gleich so wütend zu werden. Ist alles in Ordnung bei dir?',
        T0011:
          'Dann geh heute etwas früher schlafen. Und hör auf mit den ganzen Energy Drinks vorm Schlafen!',
      },
    };

    ƒS.Sound.play(audio.busStopTheme, 1, true);
    await ƒS.Location.show(locations.busStop);
    await ƒS.Character.show(
      characters.jason,  
      characters.jason.pose.neutral,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update(
      transition.circlewipeClockwise.duration,
      transition.circlewipeClockwise.alpha,
      transition.circlewipeClockwise.edge
    );

    await ƒS.Speech.tell(characters.jason, text.jason.T0000);
    await ƒS.Speech.tell(characters.jason, text.jason.T0001);

    await ƒS.Character.animate(characters.jason, characters.jason.pose.neutral, fromMidToLeft());
    await ƒS.Character.show(
      characters.alice,  
      characters.alice.pose.neutral,
      ƒS.positionPercent(75, 100)
    );

    await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);

    await ƒS.Character.hide(characters.jason);
    await ƒS.Character.show(
      characters.jason,  
      characters.jason.pose.neutral2,
      ƒS.positionPercent(25, 100)
    );
    await ƒS.update();

    await ƒS.Speech.tell(characters.jason, text.jason.T0002);

    await ƒS.Character.hide(characters.alice);
    await ƒS.Character.show(
      characters.alice,  
      characters.alice.pose.neutral2,
      ƒS.positionPercent(75, 100)
    );
    await ƒS.update();
    await ƒS.Speech.tell(characters.alice, text.alice.T0000);

    await ƒS.Speech.tell(characters.jason, text.jason.T0003);

    await ƒS.Character.show(
      characters.thomas,  
      characters.thomas.pose.neutral,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update();
    await ƒS.Speech.tell(characters.thomas, text.thomas.T0000);

    await ƒS.Speech.tell(characters.jason, text.jason.T0004);
    await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
    await ƒS.Speech.tell(characters.thomas, text.thomas.T0001);

    await ƒS.Character.hide(characters.alice);
    await ƒS.Character.show(
      characters.alice,  
      characters.alice.pose.happy,
      ƒS.positionPercent(75, 100)
    );
    await ƒS.update();
    await ƒS.Speech.tell(characters.alice, text.alice.T0001);

    await ƒS.Character.hide(characters.thomas);
    await ƒS.Character.show(
      characters.thomas,  
      characters.thomas.pose.neutral2,
      ƒS.positionPercent(50, 100)
    );
    await ƒS.update();
    await ƒS.Speech.tell(characters.thomas, text.thomas.T0002);
  
    await ƒS.Character.hide(characters.jason);
    await ƒS.Character.show(
      characters.jason,  
      characters.jason.pose.thinking,
      ƒS.positionPercent(25, 100)
    );
    await ƒS.update();
    await ƒS.Speech.tell(characters.jason, text.jason.T0005);

    await ƒS.Speech.tell(characters.thomas, text.thomas.T0003);

    await ƒS.Character.hide(characters.jason);
    await ƒS.Character.show(
      characters.jason,  
      characters.jason.pose.disappointed,
      ƒS.positionPercent(25, 100)
    );
    await ƒS.update();
    await ƒS.Speech.tell(characters.jason, text.jason.T0006);

    let firstDialogueElementOptions = {
      iChooseWaldmeister: 'Waldmeister Eis nehmen.',
      iChooseKirsche: 'Kirsch Eis nehmen.',
      iChooseNussNougat: 'Nuss-Nougat Eis nehmen.',
    };

    let firstDialogueElement = await ƒS.Menu.getInput(
      firstDialogueElementOptions,
      'player-choice'
    );

    switch (firstDialogueElement) {
      case firstDialogueElementOptions.iChooseWaldmeister:
        dataForSave.reprehensibility += 5;

        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.show(
          characters.alice,  
          characters.alice.pose.neutral2,
          ƒS.positionPercent(75, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.alice, text.alice.T0002);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.thinking,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0004);

        break;
      case firstDialogueElementOptions.iChooseKirsche:
        dataForSave.reprehensibility += 5;

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.thinking,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0005);

        break;
      case firstDialogueElementOptions.iChooseNussNougat:
        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral,
          ƒS.positionPercent(25, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0007);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.questioning,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0006);

        await ƒS.Speech.tell(characters.jason, text.jason.T0008);
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0008);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.hide(characters.jason);
        await ƒS.Location.show(locations.bedroomNight);
        await ƒS.update(transition.circlewipeClockwise.duration,
          transition.circlewipeClockwise.alpha,
          transition.circlewipeClockwise.edge);
        ƒS.Sound.fade(audio.busStopTheme, 0, 1, true);
        ƒS.Sound.play(audio.bedroomTheme, 1, true);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        return '003';
    }

    let secondDialogueElementOptions = {
      iChooseSorry:
        '"Tut mir leid, aber das Nuss-Nougat Eis war absolut ekelhaft"',
      iChooseRude:
        '"Ich wünschte mir, ihr beiden könntet einfach mal kurz ruhig sein"',
    };

    let secondDialogueElement = await ƒS.Menu.getInput(
      secondDialogueElementOptions,
      'player-choice'
    );

    switch (secondDialogueElement) {
      case secondDialogueElementOptions.iChooseSorry:
        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral,
          ƒS.positionPercent(25, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0009);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.questioning,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0009);

        await ƒS.Speech.tell(characters.jason, text.jason.T0010);
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0007);
        await ƒS.Speech.tell(characters.jason, text.jason.T0011);
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0008);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.hide(characters.jason);
        await ƒS.Location.show(locations.bedroomNight);
        await ƒS.update(transition.circlewipeClockwise.duration,
          transition.circlewipeClockwise.alpha,
          transition.circlewipeClockwise.edge);
        ƒS.Sound.fade(audio.busStopTheme, 0, 1, true);
        ƒS.Sound.play(audio.bedroomTheme, 1, true);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        break;
      case secondDialogueElementOptions.iChooseRude:
        dataForSave.reprehensibility += 5;
        dataForSave.firstSpellSpoken = true;

        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral,
          ƒS.positionPercent(25, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0012);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.questioning,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0010);

        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.show(
          characters.alice,  
          characters.alice.pose.sad,
          ƒS.positionPercent(75, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.alice, text.alice.T0003);

        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.thinking,
          ƒS.positionPercent(25, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0013);

        await ƒS.Speech.tell(characters.thomas, text.thomas.T0011);
        await ƒS.Speech.tell(characters.jason, text.jason.T0014);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.hide(characters.jason);
        await ƒS.Location.show(locations.bedroomNight);
        await ƒS.update(transition.circlewipeClockwise.duration,
          transition.circlewipeClockwise.alpha,
          transition.circlewipeClockwise.edge);
        ƒS.Sound.fade(audio.busStopTheme, 0, 1, true);
        ƒS.Sound.play(audio.bedroomTheme, 1, true);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        break;
    }
  }
}
