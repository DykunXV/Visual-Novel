namespace Template {
    export async function ADream(): ƒS.SceneReturn {
      console.log('Scene 001_Introduction starting');
  
      let text = {
        placeholder: {
          T0000: '',
          T0001: '',
          T0002: '',
          T0003: '',
          T0004: '',
          T0005: '',
          T0006: '',
          T0007: '',
          T0008: '',
          T0009: '',
          T0010: '',
          T0011: '',
          T0012: '',
          T0013: '',
          T0014: '',
          T0015: '',
          T0016: '',
          T0017: '',
          T0018: '',
          T0019: '',
          T0020: '',
          T0021: '',
          T0022: '',
          T0023: '',
          T0024: '',
          T0025: '',
          T0026: '',
          T0027: '',
          T0028: '',
          T0029: '',
          T0030: '',
          T0031: '',
          T0032: '',
          T0033: '',
          T0034: '',
          T0035: '',
          T0036: '',
          T0037: '',
          T0038: '',
        },
        jasonsThoughts: {
          T0000: 'Die Welt, in der wir leben, ist ein schöner Ort.',
          T0001: 'Man könnte fast schon behaupten, dass eine gewisse Magie hinter allem steckt.',
          T0002: 'Alles in unserem Universum soll mal nicht existiert haben? Der Urknall soll für alles verantwortlich sein?',
          T0003: 'Woher kam denn der Urknall?',
          T0004: 'Plausible Erläuterungen gibt es nicht. Warum also glauben wir nicht an ein wenig Magie in unserem Leben?',
          T0005: 'In Anbetracht all dieser Fakten - warum glaubst du denn, nicht an ein bisschen Magie in dir?',
          T0006: 'Glaube zum Beispiel daran, dass du jetzt deinen Namen ändern kannst.',
          T0007: 'Jeder wird vergessen, wie dein vorheriger Name war.',
          T0008: 'Wenn das der für dich möglich wäre, wie würdest du heißen wollen?',
          T0009: 'Ein interessanter Name. Am besten vergisst du ihn nicht, denn es ist nun deiner.',
          T0010: 'Nun schreite voran und wache aus diesem Traum auf. Entdecke deine wahren Kräfte.',
        }
      };
  
      //Musik
      ƒS.Sound.fade(audio.backgroundTheme, 0.02, 2, true)
  
      //In welcher Zeit wie viele Buchstaben angezeigt werden
      ƒS.Speech.setTickerDelays(20, 2); 

      //Delay
      let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)])

  
      await ƒS.Location.show(locations.dream);
      await ƒS.update(
        transition.circlewipeTop.duration,
        transition.circlewipeTop.alpha,
        transition.circlewipeTop.edge
      );
      await ƒS.Character.show(
        characters.jasonsThoughts,  
        characters.jasonsThoughts.pose.neutral,
        ƒS.positionPercent(50, 100)
      );
  
      await ƒS.update(1);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0000);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0001);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0002);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0003);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0004);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0005);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0006);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0007);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0008);
      dataForSave.nameProtagonist = await ƒS.Speech.getInput();
      characters.jason.name = dataForSave.nameProtagonist;
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0009);
      await ƒS.Speech.tell('Unbekannt', text.jasonsThoughts.T0010);
      await ƒS.Character.hide(characters.jasonsThoughts);
      await ƒS.update(1);
    }
  }
  