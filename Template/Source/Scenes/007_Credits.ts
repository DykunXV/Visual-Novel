namespace Template {
    export async function Credits(): ƒS.SceneReturn {
      console.log('Scene 007_Credits starting');
  
      let text = {
        jason: {
          T0000: 'Danke für das Spielen meiner Visual Novel.',
          T0001: 'Insgesamt gibt es drei Endings. Hast du sie alle gefunden?',
          T0002: 'Hier ein paar Tipps zu den verschiedenen Endings.',
          T0003: 'Ending 1 findest du, wenn du nach dem Skatepark keinen einzigen Zauber gesprochen hast.',
          T0004: 'Ending 2 findest du, wenn dir deine Freunde wichtiger sind, als deine persönlichen Gefühle.',
          T0005: 'Ending 3 findest du, wenn du dich und deine Bedürfnisse immer über alles andere stellst.',
          T0006: 'Viel Spaß dabei die restlichen Endings zu finden!',
          T0007: 'Die Credits werden jetzt eingeblendet! Alles was nicht genannt wurde, benötigt entweder keine Nennung, oder wurde von mir erstellt.',
          T0008: 'Lade jetzt die Seite neu, um von vorne zu beginnen!'
        }
      };
  
  
      ƒS.Sound.fade(audio.bedroomTheme, 0, 1, true);
      ƒS.Sound.play(audio.dreamTheme, 1, true);
      await ƒS.Location.show(locations.dream);
      await ƒS.Character.show(
        characters.jason,  
        characters.jason.pose.neutral2,
        ƒS.positionPercent(50, 100)
      );
      await ƒS.update(
        transition.waves.duration,
        transition.waves.alpha,
        transition.waves.edge
      );

      await ƒS.Speech.tell(characters.jason, text.jason.T0000);
      await ƒS.Speech.tell(characters.jason, text.jason.T0001);
      await ƒS.Speech.tell(characters.jason, text.jason.T0002);
      await ƒS.Speech.tell(characters.jason, text.jason.T0003);
      await ƒS.Speech.tell(characters.jason, text.jason.T0004);
      await ƒS.Speech.tell(characters.jason, text.jason.T0005);
      await ƒS.Speech.tell(characters.jason, text.jason.T0006);
      await ƒS.Speech.tell(characters.jason, text.jason.T0007);
      showCredits();

    }
  }
  