namespace Template {
    export async function MyIntroduction(): ƒS.SceneReturn {
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
            T0000: `${dataForSave.nameProtagonist} wacht aus seinem Traum auf.`,
            T0001: `${dataForSave.nameProtagonist} schläft wieder ein.`,
            T0002: `${dataForSave.nameProtagonist} wacht wieder aus seinem Traum auf.`,
        },
      };
  

      ƒS.Sound.play(audio.bedroomTheme, 1, true);
      await ƒS.Location.show(locations.bedroom);
      await ƒS.update(
        transition.waves.duration,
        transition.waves.alpha,
        transition.waves.edge
      );
      
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);

      await ƒS.Character.show(
        characters.jason,  
        characters.jason.pose.neutral,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update();
      await ƒS.Speech.tell(characters.jason, text.jason.T0000);

      await ƒS.Speech.tell(characters.jason, text.jason.T0001);
      await ƒS.Speech.tell(characters.jason, text.jason.T0002);
      await ƒS.Speech.tell(characters.jason, text.jason.T0003);
      await ƒS.Speech.tell(characters.jason, text.jason.T0004);
      await ƒS.Speech.tell(characters.jason, text.jason.T0005);
      await ƒS.Speech.tell(characters.jason, text.jason.T0006);

      await ƒS.Character.hide(characters.jason);
      await ƒS.Character.show(
        characters.jason,  
        characters.jason.pose.disappointed,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update();
      await ƒS.Speech.tell(characters.jason, text.jason.T0007);
      await ƒS.Speech.tell(characters.jason, text.jason.T0008);
      await ƒS.Speech.tell(characters.jason, text.jason.T0009);
      await ƒS.Speech.tell(characters.jason, text.jason.T0010);

      await ƒS.Character.hide(characters.jason);
      await ƒS.Character.show(
        characters.jason,  
        characters.jason.pose.thinking,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update();
      await ƒS.Speech.tell(characters.jason, text.jason.T0011);

      
      let firstDialogueElementOptions = {
        iChooseFriends: 'Mit Freunden treffen.',
        iChooseSleep: 'Weiter schlafen.',
      };
  
      let firstDialogueElement = await ƒS.Menu.getInput(
        firstDialogueElementOptions,
        'player-choice'
      );

      await ƒS.Character.hide(characters.jason);
      await ƒS.Character.show(
        characters.jason,  
        characters.jason.pose.neutral2,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update();
  
      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iChooseFriends:
          await ƒS.Speech.tell(characters.jason, text.jason.T0012);
          break;
        case firstDialogueElementOptions.iChooseSleep:
          await ƒS.Speech.tell(characters.jason, text.jason.T0013);
          await ƒS.Speech.tell(characters.jason, text.jason.T0014);

          ƒS.Sound.fade(audio.bedroomTheme, 0, 1, true);
          ƒS.Sound.play(audio.dreamTheme, 1, true);
          await ƒS.Location.show(locations.dream);
          await ƒS.Character.hide(characters.jason);
          await ƒS.update(
            transition.waves.duration,
            transition.waves.alpha,
            transition.waves.edge
          );
          await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
          await ƒS.Character.show(
            characters.jasonsThoughts,  
            characters.jasonsThoughts.pose.disappointed,
            ƒS.positionPercent(50, 100)
          );
          await ƒS.update(1);
          await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0000);

          await ƒS.Character.animate(characters.jasonsThoughts, characters.jasonsThoughts.pose.disappointed, fromMidToRight());
          await ƒS.Character.show(
            characters.jason,  
            characters.jason.pose.neutral,
            ƒS.positionPercent(25, 100)
          );
          await ƒS.update();
          await ƒS.Speech.tell(characters.jason, text.jason.T0015);

          await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0001);
          await ƒS.Speech.tell(characters.jason, text.jason.T0016);
          await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0002);
          await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0003);

          await ƒS.Character.hide(characters.jason);
          await ƒS.Character.show(
            characters.jason,  
            characters.jason.pose.thinking,
            ƒS.positionPercent(25, 100)
          );
          await ƒS.update();
          await ƒS.Speech.tell(characters.jason, text.jason.T0017);

          await ƒS.Character.hide(characters.jason);
          await ƒS.Character.show(
            characters.jason,  
            characters.jason.pose.neutral2,
            ƒS.positionPercent(25, 100)
          );
          await ƒS.update();

          await ƒS.Speech.tell(characters.jason, text.jason.T0018);
          await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0004);
          await ƒS.Speech.tell(characters.jason, text.jason.T0019);
          await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0005);

          ƒS.Sound.fade(audio.dreamTheme, 0, 1, true);
          ƒS.Sound.play(audio.bedroomTheme, 1, true);

          await ƒS.Character.hide(characters.jasonsThoughts);
          await ƒS.Character.hide(characters.jason);
          await ƒS.Location.show(locations.bedroom);
          await ƒS.update(
            transition.waves.duration,
            transition.waves.alpha,
            transition.waves.edge
          );
          await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);

          await ƒS.Character.show(
            characters.jason,  
            characters.jason.pose.neutral,
            ƒS.positionPercent(50, 100)
          );
          await ƒS.update()

          await ƒS.Speech.tell(characters.jason, text.jason.T0020);
          await ƒS.Speech.tell(characters.jason, text.jason.T0021);
          await ƒS.Speech.tell(characters.jason, text.jason.T0022);
          break;
      }

      await ƒS.Character.hide(characters.jason);
      await ƒS.update();
      ƒS.Sound.fade(audio.bedroomTheme, 0, 1, true);
    }
  }
  