namespace Template {
    export async function Credits(): ƒS.SceneReturn {
      console.log('Scene 007_Credits starting');
  
      let text = {
        jason: {
          T0000: 'Danke für das Spielen meiner Visual Novel.',
          T0001: 'Insgesamt gibt es drei Endings. Hast du sie alle gefunden?',
          T0002: 'Hier ein paar Tipps zu den verschiedenen Endings.',
          T0003: 'Ending 1 findest du, wenn du nach dem Skatepark keinen einzigen Zauber gesprochen hast.',
          T0004: 'Ending 2 findest du, wenn dir deine Freunde wichtiger sind, als deine Persönlichen Gefühle.',
          T0005: 'Ending 3 findest du, wenn du dich und deine Bedürfnisse immer über alles andere stellst.',
          T0006: 'Viel Spaß dabei die restlichen Endings zu finden!',
        }
      };
  
  
      await ƒS.Location.show(locations.dream);
      await ƒS.Character.show(
        characters.jason,  
        characters.jason.pose.neutral2,
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
    }
  }
  