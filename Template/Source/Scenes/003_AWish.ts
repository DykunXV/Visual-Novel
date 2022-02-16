namespace Template {
    export async function AWish(): ƒS.SceneReturn {
      console.log('Scene 003_AWish starting');
  
      let text = {
        
        narrator: {
            T0000: 'Jason steht aus dem Bett auf.',
            T0001: 'Jason liest die Nachrichten im Gruppenchat. Dort berichten seine Freunde Alice und Thomas, dass sie auf einmal ihre Fähigkeit zu Sprechen verloren haben.',
            T0002: 'Jasons Handy fängt an zu vibrieren.',
            T0003: 'Jason ließt die neuen Nachrichten, in denen steht, dass beide seine Freunde wieder sprechen können.',
            T0004: 'Jason kommt im Skatepark an.',
            T0005: 'Die Jungs fangen an zu skaten, während Alice begeistert zuschaut. Nach einer Weile, stürzt Jason von seinem Brett.',
            T0006: 'Nach einem langen und, zumindest für Alice, spaßigen Tag zusammen, gehen die Freunde wieder getrennte Wege und legen sich alle ins Bett.',
        },
        jason: {
            T0000: '*Aufsteh Geräusche*',
            T0001: 'Ahh, wesentlich besser geschlafen, als gestern.',
            T0002: '*Nimmt Handy zur Hand*',
            T0003: 'Huch, einhundert neue Nachrichten im Gruppenchat?!? Was ist denn da passiert.',
            T0004: 'Wie kann das denn sein? Hat das vielleicht irgendetwas mit dem Eis zu tun? Nein, das kann nicht sein. Immerhin hatte ich auch eins und meiner Stimme geht es prächtig.',
            T0005: 'Moment! Kann es sein…?',
            T0006: 'Ich wünschte mir, ihr beiden könntet einfach mal kurz ruhig sein!',
            T0007: 'Das soll der Zauberspruch sein? „Ich wünschte mir“? Was ein langweiliger Zauberspruch!',
            T0008: 'Und vor allem soll das daran liegen? Aber warum denn erst heute? Warum ist das nicht schon gestern passiert?',
            T0009: 'Nein, das kann nicht sein. Das ist alles nur ein blöder Zufall.',
            T0010: 'Neue Nachrichten im Gruppenchat?',
            T0011: '…',
            T0012: 'Nur ein blöder Zufall. Das ist alles nur ein blöder Zufall.',
            T0013: 'Ich muss irgendwie auf andere Gedanken kommen. Ich frag mal, ob die anderen sich heute wieder treffen wollen, jetzt wo es ihnen besser geht.',
            T0014: 'Nichts. Absolut keine Benachrichtigungen.',
            T0015: 'Naja, einer muss wohl anfangen. Ich frag mal nach, ob wir heute wieder was unternehmen.',
            T0016: '*Schreibt Nachricht im Gruppenchat*',
            T0017: 'Also eigentlich nicht, nein.',
            T0018: 'Hey, Leute! Entschuldige die Verspätung, die Bahn war randvoll. Alles klar?',
            T0019: 'Super, super. ',
            T0020: 'Skatepark, also.',
            T0021: 'Du weißt, dass keiner von uns wirklich skaten kann und Alice eh nur zuschauen wird?',
            T0022: 'Du weißt, dass mindestens eine Person heute auf die Fresse fliegen wird?',
            T0023: 'Du weißt, dass wahrscheinlich du diese Person sein wirst?',
            T0024: 'Ach, ja.. Äh.. Ich weiß nicht wovon du redest.',
            T0025: 'Aua, mein Arsch tut weh.',
            T0026: 'Ich wünschte mir, dass ihr das einfach vergessen würdet“.',
            T0027: 'Sehr witzig, Thomas.',
            T0028: 'Oh? Gerade machst du dich noch über mich lustig und jetzt beneidest du mich? Geschieht dir recht würde ich sagen.',
        },
        alice: {
            T0000: 'Ja, gerne. Aber was genau wollen wir machen?',
            T0001: 'Dann steht das jetzt fest! Bis in einer Stunde!',
            T0002: 'Hey, Jason. Mach dir kein Kopf. Wir sind auch noch nicht lange da.',
            T0003: 'Wollt ihr heute noch skaten, oder euch nur weiterhin fertig machen?',
            T0004: 'Lass dich mal anschauen, Jason.',
            T0005: 'Wisst ihr was, vergisst es. Thomas, ich überlasse dir die ehrenvolle Aufgabe Jasons Arsch anzuschauen.',
        },
        thomas: {
            T0000: 'Dasselbe gilt für mich. Wie wäre es, wenn wir uns in einer Stunde im Skatepark treffen würden?',
            T0001: 'Kein Grund gleich gemein zu werden. Hast du etwa bessere Ideen?',
            T0002: 'Verstehe.',
            T0003: 'Hi, Jason.',
            T0004: 'Richtig.',
            T0005: 'Rich- Hey, moment Mal. Wer hat sich denn letztes Mal den Knöchel verstaucht?',
            T0006: 'Wie war das noch gleich? Ich werde heute auf die Fresse fliegen?',
            T0007: 'Wie wäre es, wenn du nächstes Mal einfach nicht auf die Fresse fliegst?',
            T0008: 'Warte, du willst dir seinen Arsch anschauen? Vielleicht hätte ich ja lieber auf Fresse fliegen sollen..',
        },
        thomasAndJason: {
            T0000: 'Entschuldigung.',
            T0001: '*Warum muss ich auch meine große Klappe aufmachen?*',
        }
      };
  
      //Musik
      ƒS.Sound.fade(audio.bedroomTheme, 0.02, 2, true)
  
      //In welcher Zeit wie viele Buchstaben angezeigt werden
      ƒS.Speech.setTickerDelays(20, 2); 
  
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
      await ƒS.Speech.tell(characters.jason, text.jason.T0000);
      await ƒS.Speech.tell(characters.jason, text.jason.T0001);
      await ƒS.Speech.tell(characters.jason, text.jason.T0002);

      if (dataForSave.firstSpellSpoken == true) {
        await ƒS.Speech.tell(characters.jason, text.jason.T0003);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);
        await ƒS.Speech.tell(characters.jason, text.jason.T0004);
        await ƒS.Speech.tell(characters.jason, text.jason.T0005);
        await ƒS.Speech.tell(characters.jason, text.jason.T0006);
        await ƒS.Speech.tell(characters.jason, text.jason.T0007);
        await ƒS.Speech.tell(characters.jason, text.jason.T0008);
        await ƒS.Speech.tell(characters.jason, text.jason.T0009);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);
        await ƒS.Speech.tell(characters.jason, text.jason.T0010);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        await ƒS.Speech.tell(characters.jason, text.jason.T0011);
        await ƒS.Speech.tell(characters.jason, text.jason.T0012);
        await ƒS.Speech.tell(characters.jason, text.jason.T0013);
      } else {
        await ƒS.Speech.tell(characters.jason, text.jason.T0014);
        await ƒS.Speech.tell(characters.jason, text.jason.T0015);
      }

      await ƒS.Speech.tell(characters.jason, text.jason.T0016);
      await ƒS.Speech.tell(characters.alice, text.alice.T0000);
      await ƒS.Speech.tell(characters.thomas, text.thomas.T0000);

      let firstDialogueElementOptions = {
        iChooseGreat: '"Klingt super."',
        iChooseRude: '"Sonst noch andere langweilige Ideen?"',
      };
  
      let firstDialogueElement = await ƒS.Menu.getInput(
        firstDialogueElementOptions,
        'player-choice'
      );
      
      switch (firstDialogueElement) {
        case firstDialogueElementOptions.iChooseGreat:
          await ƒS.Speech.tell(characters.alice, text.alice.T0001);
          break;
        case firstDialogueElementOptions.iChooseRude:
          dataForSave.reprehensibility += 5;
          await ƒS.Speech.tell(characters.thomas, text.thomas.T0001);
          await ƒS.Speech.tell(characters.jason, text.jason.T0017);
          await ƒS.Speech.tell(characters.thomas, text.thomas.T0002);
          break;
      }

      await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
      await ƒS.Speech.tell(characters.jason, text.jason.T0018);
      await ƒS.Speech.tell(characters.thomas, text.thomas.T0003);
      await ƒS.Speech.tell(characters.alice, text.alice.T0002);
      await ƒS.Speech.tell(characters.jason, text.jason.T0019);
      await ƒS.Speech.tell(characters.jason, text.jason.T0020);
      await ƒS.Speech.tell(characters.thomas, text.thomas.T0004);
      await ƒS.Speech.tell(characters.jason, text.jason.T0021);
      await ƒS.Speech.tell(characters.thomas, text.thomas.T0004);
      await ƒS.Speech.tell(characters.jason, text.jason.T0022);
      await ƒS.Speech.tell(characters.thomas, text.thomas.T0004);
      await ƒS.Speech.tell(characters.jason, text.jason.T0023);
      await ƒS.Speech.tell(characters.thomas, text.thomas.T0005);
      await ƒS.Speech.tell(characters.jason, text.jason.T0024);
      await ƒS.Speech.tell(characters.alice, text.alice.T0003);
      await ƒS.Speech.tell('Thomas und Jason', text.thomasAndJason.T0000);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
      await ƒS.Speech.tell(characters.thomas, text.thomas.T0006);

      let secondDialogueElementOptions = {
        iChooseOuch: '"Aua, mein Arsch tut weh."',
        iChooseWish: '"Ich wünschte mir, dass ihr das einfach vergessen würdet."',
      };
  
      let secondDialogueElement = await ƒS.Menu.getInput(
        secondDialogueElementOptions,
        'player-choice'
      );
      
      switch (secondDialogueElement) {
        case secondDialogueElementOptions.iChooseOuch:
            await ƒS.Speech.tell(characters.jason, text.jason.T0025);
          break;
        case secondDialogueElementOptions.iChooseWish:
          dataForSave.secondSpellSpoken = true;
          await ƒS.Speech.tell(characters.jason, text.jason.T0026);
          break;
      }

      await ƒS.Speech.tell(characters.thomas, text.thomas.T0007);
      await ƒS.Speech.tell(characters.jason, text.jason.T0027);
      await ƒS.Speech.tell(characters.alice, text.alice.T0004);
      await ƒS.Speech.tell(characters.thomas, text.thomas.T0008);
      await ƒS.Speech.tell(characters.jason, text.jason.T0028);
      await ƒS.Speech.tell(characters.alice, text.alice.T0005);
      await ƒS.Speech.tell('Thomas und Jason', text.thomasAndJason.T0001);
      await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
    }
  }
  