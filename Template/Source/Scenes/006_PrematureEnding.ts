namespace Template {
    export async function PrematureEnding(): ƒS.SceneReturn {
      console.log('Scene 006_PrematureEnding starting');
  
      let text = {
        narrator: {
            T0000: `${dataForSave.nameProtagonist} steht aus seinem Bett auf.`,
            T0001: `${dataForSave.nameProtagonist}s Handy fängt an zu vibrieren.`,
            T0002: `${dataForSave.nameProtagonist} ließt sich die Nachrichten im Gruppenchat durch.`,
            T0003: `${dataForSave.nameProtagonist} und seine Freunde leben ihr Leben vorerst normal weiter.. doch was wird ${dataForSave.nameProtagonist} mit seiner Kraft in der Zukunft tun? Mehr dazu wann anders.`,
            T0004: `${dataForSave.nameProtagonist} ließt sich die Nachrichten im Gruppenchat durch.`,
            T0005: 'Mit diesen Worten endet die Story vorerst.',
            T0006: 'Wird sich Alice an Thomas erinnern? Oder gibt es gewisse Konditionen, die für das Zaubern der Zauber erfüllt sein müssen? Mehr dazu wann anders.',
            T0007: 'Mit diesen Worten endet die Story vorerst.',
            T0008: 'Wird Thomas seine Erinnerungen an Alice vergessen? Oder gibt es gewisse Konditionen, die für das Zaubern der Zauber erfüllt sein müssen? Mehr dazu, wann anders.',
        },
        jason: {
          T0000: '*Aufsteh Geräusche*',
          T0001: 'Sonntag also.',
          T0002: 'Huch, was ist denn da los?',
          T0003: 'Ah, Thomas und Alice legen schon mal was, was wir heute unternehmen.',
          T0004: 'Verdammt, ich erinnere mich. Ich habe Alice manipuliert, damit sie alle Erinnerungen an Thomas vergisst.',
          T0005: 'Oh Gott, Alice hat wirklich alles über Thomas vergessen. Selbst Thomas hat mich angeschrieben und gefragt, was da los ist.',
          T0006: 'Was habe ich mir eigentlich gedacht. Nur weil ich in Alice verknallt bin, habe ich so etwas dummes getan?',
          T0007: 'Es gibt nur einen Weg das wieder in Ordnung zu bringen..',
          T0008: 'Ich wünschte mir, dass Alice sich wieder an Thomas erinnert.',
          T0009: 'Ich wünschte mir, dass Thomas alles über Alic-',
          T0010: '..nein. Nein, das geht zu weit.',
          T0011: 'Das ist absolut abgefuckt, was ich hier gerade vor habe!',
          T0012: `Pack deine persönlichen Gefühle bei Seite, ${dataForSave.nameProtagonist} und regel das mit deinem Gehirn!`,
          T0013: 'Ich wünschte mir, dass Thomas alles über Alice vergisst.',
        },
      };
  
      await ƒS.Location.show(locations.bedroom);
      await ƒS.update(
        transition.circlewipeClockwise.duration,
        transition.circlewipeClockwise.alpha,
        transition.circlewipeClockwise.edge
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
      ƒS.Sound.play(soundEffects.phoneVibration, 1, false);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
      await ƒS.Speech.tell(characters.jason, text.jason.T0002);
      if (dataForSave.thirdSpellSpoken == false) {
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.jason, text.jason.T0003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
      } else {
        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.disappointed,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0004);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
        await ƒS.Speech.tell(characters.jason, text.jason.T0005);
        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.thinking,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0006);
        await ƒS.Speech.tell(characters.jason, text.jason.T0007);

        let firstDialogueElementOptions = {
            iChooseGoodWish: '"Ich wünschte mir, dass Alice sich wieder an Thomas erinnert"',
            iChooseBadWish: '"Ich wünschte mir, dass Thomas alles über Alice vergisst"',
          };
      
          let firstDialogueElement = await ƒS.Menu.getInput(
            firstDialogueElementOptions,
            'player-choice'
          );
          
          switch (firstDialogueElement) {
            case firstDialogueElementOptions.iChooseGoodWish:
              await ƒS.Character.hide(characters.jason);
              await ƒS.Character.show(
                characters.jason,  
                characters.jason.pose.neutral2,
                ƒS.positionPercent(50, 100)
              );
              await ƒS.update();
              await ƒS.Speech.tell(characters.jason, text.jason.T0008);
              await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
              await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
              break;
            case firstDialogueElementOptions.iChooseBadWish:
              if (dataForSave.reprehensibility <= 20) {
                showInfo("Aktion fehlgeschlagen, da zu wenig Verwerflichkeit vorhanden ist (20 Verwerflichkeit benötigt).");
                await ƒS.Character.hide(characters.jason);
                await ƒS.Character.show(
                  characters.jason,  
                  characters.jason.pose.neutral2,
                  ƒS.positionPercent(50, 100)
                );
                await ƒS.update();
                await ƒS.Speech.tell(characters.jason, text.jason.T0009);
                await ƒS.Character.hide(characters.jason);
                await ƒS.Character.show(
                  characters.jason,  
                  characters.jason.pose.disappointed,
                  ƒS.positionPercent(50, 100)
                );
                await ƒS.update();
                await ƒS.Speech.tell(characters.jason, text.jason.T0010);
                await ƒS.Speech.tell(characters.jason, text.jason.T0011);
                await ƒS.Speech.tell(characters.jason, text.jason.T0012);
                await ƒS.Character.hide(characters.jason);
                await ƒS.Character.show(
                  characters.jason,  
                  characters.jason.pose.neutral,
                  ƒS.positionPercent(50, 100)
                );
                await ƒS.update();
                await ƒS.Speech.tell(characters.jason, text.jason.T0008);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);           
                break;
              } else {
                await ƒS.Character.hide(characters.jason);
                await ƒS.Character.show(
                  characters.jason,  
                  characters.jason.pose.neutral2,
                  ƒS.positionPercent(50, 100)
                );
                await ƒS.update();
                await ƒS.Speech.tell(characters.jason, text.jason.T0013);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0007);
                await ƒS.Speech.tell(characters.narrator, text.narrator.T0008); 
                break;
              }
          }

      }
      await ƒS.Character.hide(characters.jason);
    }
  }
  