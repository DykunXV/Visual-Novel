namespace Template {
    export async function Together(): ƒS.SceneReturn {
      console.log('Scene 005_Together starting');
  
      let text = {
        narrator: {
          T0000: 'Der Rest der Woche vergeht recht unspektakulär. Uni, Lernen, Schlafen, um es genauer zu beschreiben.',
          T0001: 'Jason steht aus seinem Bett auf.',
          T0002: 'Jason macht sich bereit für das Treffen und kommt dann in der Bowlinghalle an.',
          T0003: 'Jason und Alice verbringen die nächsten Stunden voller Spaß auf der Bowlingbahn.',
          T0004: 'Jason macht einen Salto und fällt dabei um.',
          T0005: 'Nach einem langem Gelächter, verabschieden sich die beiden und begeben sich zu Bett.',
        },
        jason: {
            T0000: '*Aufsteh Geräusche*',
            T0001: 'Schon wieder Samstag, huh? Wie schnell die Zeit doch vergeht.',
            T0002: 'Für heute ist Bowling mit Alice und Thomas geplant. Ich mache mich lieber mal bereit.',
            T0003: 'Hey, Alice! Thomas noch nicht da?',
            T0004: 'Nur.. wir.. zwei..',
            T0005: 'Oh, äh, ja, entschuldige. Also, was sagst du, fangen wir an?',
            T0006: 'Ah, sehr knapp, Alice. Fast hätte ich dich geschlagen.',
            T0007: 'Haha, ja, das stimmt wohl.',
            T0008: 'Hm, ich glaube nicht, warum?',
            T0009: '*Thomas, Thomas, Thomas. Immer geht es nur um Thomas..*',
            T0010: 'Kann Thomas das hier?',
            T0011: 'Ich wünschte mir, du würdest Thomas vergessen.',
            T0012: 'Ja, da hast du wohl recht, haha.',
            T0013: 'Ich wünschte mir, du würdest Tho--',
            T0014: '*Warte mal, was zur Hölle mache ich da gerade?*',
            T0015: '*Bin ich gerade wirklich dabei meine beste Freundin vergessen zu lassen, dass Thomas existiert? Nur, weil ich ein wenig eifersüchtig bin?*',
            T0016: '*Gott, was ist denn nur falsch mit mir?*',
            T0017: 'Oh, garnichts, garnichts.',
            T0018: 'Ich wollte dir was zeigen!',
            T0019: 'Ja.. Ja, da hast du wohl Recht.',
            T0020: 'Tut mir leid, Alice.',
            T0021: '*Ich denke dafür ist es zu spät..*',
        },
        alice: {
            T0000: 'Ah, hallo Jason.',
            T0001: 'Thomas liegt leider krank im Bett. Er wird es heute nicht schaffen. Es sind also nur wir zwei.',
            T0002: 'Ja, genau das habe ich gerade gesagt.',
            T0003: 'Jason?',
            T0004: 'Liebend gerne.',
            T0005: 'Du hattest wohl sehr viel Glück heute, nicht wahr? Thomas hätte uns aber beide zusammen platt gemacht.',
            T0006: 'Gibt es ein Spiel, in dem Thomas uns eigentlich nicht überlegen ist?',
            T0007: 'Nur so, nur so. Thomas ist schon bewundernswert.',
            T0008: 'Also Thomas hätte den Salto wahrscheinlich gemacht, ohne umzufallen, haha',
            T0009: 'Entschuldige, ich hab dich nicht ganz verstanden. Was wünscht du dir?',
            T0010: 'Da bin ich aber gespannt.',
            T0011: 'Jason, du weißt, dass du deine eigenen Fähigkeiten hast, in denen du Thomas und auch mir bei weitem überlegen bist.',
            T0012: 'Mach dir kein Kopf, Jason.',
        }
      };
  
      //Musik
      ƒS.Sound.fade(audio.backgroundTheme, 0.02, 2, true)
  
      //In welcher Zeit wie viele Buchstaben angezeigt werden
      ƒS.Speech.setTickerDelays(20, 2); 

      await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
      await ƒS.Speech.tell(characters.jason, text.jason.T0000);
      await ƒS.Speech.tell(characters.jason, text.jason.T0001);
      await ƒS.Speech.tell(characters.jason, text.jason.T0002);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
      await ƒS.Speech.tell(characters.alice, text.alice.T0000);
      await ƒS.Speech.tell(characters.jason, text.jason.T0003);
      await ƒS.Speech.tell(characters.alice, text.alice.T0001);
      await ƒS.Speech.tell(characters.jason, text.jason.T0004);
      await ƒS.Speech.tell(characters.alice, text.alice.T0002);
      await ƒS.Speech.tell(characters.jason, text.jason.T0004);
      await ƒS.Speech.tell(characters.alice, text.alice.T0003);
      await ƒS.Speech.tell(characters.jason, text.jason.T0005);
      await ƒS.Speech.tell(characters.alice, text.alice.T0004);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
      await ƒS.Speech.tell(characters.jason, text.jason.T0006);
      await ƒS.Speech.tell(characters.alice, text.alice.T0005);
      await ƒS.Speech.tell(characters.jason, text.jason.T0007);
      await ƒS.Speech.tell(characters.alice, text.alice.T0006);
      await ƒS.Speech.tell(characters.jason, text.jason.T0008);
      await ƒS.Speech.tell(characters.alice, text.alice.T0007);
      await ƒS.Speech.tell(characters.jason, text.jason.T0009);

      let firstDialogueElementOptions = {
        iChooseImpress: '"Kann Thomas das hier?"',
        iChooseWish: '"Ich wünschte mir, du würdest Thomas vergessen"',
      };
  
      let firstDialogueElement = await ƒS.Menu.getInput(
        firstDialogueElementOptions,
        'player-choice'
      );
      
      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iChooseImpress:
            await ƒS.Speech.tell(characters.jason, text.jason.T0010);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
            await ƒS.Speech.tell(characters.alice, text.alice.T0008);
            await ƒS.Speech.tell(characters.jason, text.jason.T0012);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
          break;
        case firstDialogueElementOptions.iChooseWish:
          if (dataForSave.reprehensibility <= 15) {
            await ƒS.Speech.tell(characters.jason, text.jason.T0013);
            await ƒS.Speech.tell(characters.jason, text.jason.T0014);
            await ƒS.Speech.tell(characters.jason, text.jason.T0015);
            await ƒS.Speech.tell(characters.jason, text.jason.T0016);
            await ƒS.Speech.tell(characters.alice, text.alice.T0009);
            await ƒS.Speech.tell(characters.jason, text.jason.T0017);
            await ƒS.Speech.tell(characters.jason, text.jason.T0018);
            await ƒS.Speech.tell(characters.alice, text.alice.T0010);
            await ƒS.Speech.tell(characters.jason, text.jason.T0010);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
            await ƒS.Speech.tell(characters.alice, text.alice.T0008);
            await ƒS.Speech.tell(characters.jason, text.jason.T0012);
            await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
            break;
          } else {
            dataForSave.thirdSpellSpoken = true;
            dataForSave.reprehensibility += 5;
            await ƒS.Speech.tell(characters.jason, text.jason.T0011);
            await ƒS.Speech.tell(characters.alice, text.alice.T0011);
            await ƒS.Speech.tell(characters.jason, text.jason.T0019);
            await ƒS.Speech.tell(characters.jason, text.jason.T0020);
            await ƒS.Speech.tell(characters.alice, text.alice.T0012);
            await ƒS.Speech.tell(characters.jason, text.jason.T0021);
            break;
          }
      }
    }
  }
  