namespace Template {
    export async function ANewAwakening(): ƒS.SceneReturn {
      console.log('Scene 004_ANewAwakening starting');
  
      let text = {
        
        narrator: {
            T0000: 'Ohne zu Wissen, wie er seine magische Begabung benutzt, wandert Jason planlos durch sein Leben. Er studiert fertig, fängt mit dem Arbeiten an, heiratet, gründet eine Familie und stirbt eines Tages einen natürlichen Tod.',
            T0001: 'Jason wacht aus seinem Traum auf.',
            T0002: 'Jason macht sich auf den Weg zur Uni. Dort angekommen, trifft er auf seine Freunde.',
            T0003: 'Die Glocke der Universität fängt an zu läuten.',
            T0004: 'Jason und die anderen begeben sich in den entsprechenden Raum, um dort ihren Test zu schreiben. Jason ist der letzte, der fertig ist. Die Dozentin kommt auf ihn zu, um den Test einzusammeln.',
            T0005: 'Jason verbringt den Rest des Tages damit zu lernen.',
            T0006: 'Jason verbringt den Rest des Tages damit Videospiele zu spielen.',
        },
        jason: {
          T0000: '*Aufsteh Geräusche*',
          T0001: 'Heute habe ich nicht so gut geschlafen. Aber ich hatte auch keinen Traum. Oder doch?',
          T0002: 'Ich kann mich wirklich nicht mehr daran erinnern..',
          T0003: 'Naja, ich habe auch keine Zeit darüber nachzudenken. Es ist Montag und ich habe gleich einen Kurs. Ab zur Uni!',
          T0004: 'Hey Leute! Alles klar?',
          T0005: '...',
          T0006: 'Hallo? Will mich niemand nach meinem Arsch fragen?',
          T0007: '*Oh, richtig. Ich hatte mir gestern gewünscht, dass sie es vergessen würden.*',
          T0008: '*Ich kann immer noch nicht ganz glauben, dass diese magischen Fähigkeiten real sind, aber die Situation spricht für sich.*',
          T0009: 'Nevermind, vergesst das bitte einfach.',
          T0010: 'Prächtig, danke der Nachfrage!',
          T0011: 'Mal zu was anderem. Habt ihr für den Test heute gelernt?',
          T0012: 'Nein, nein. Ich stimme dem guten Mann da vollkommen zu.',
          T0013: 'Entschuldige, aber ich war das Wochenende schwer beschäftigt mit zwei anderen Sachen, die äußerst anstrengend sein können.',
          T0014: 'Oh, wird wohl Zeit für den Test und somit unseren Untergang. Viel Erfolg euch.',
          T0015: 'Ja, gerade fertig geworden.',
          T0016: 'Natürlich.',
          T0017: 'Absolut nicht.',
          T0018: 'Ich wünschte mir, dass sie meinen Test mit der besten Note bewerten.',
          T0019: '*Kann man diese Frau überhaupt irgendwie glücklich stellen?*',
          T0020: '*Ich bin der letzte der mit dem Test fertig wurde. Das heißt alle anderen sind schon weg. Zeit nachhause zu gehen.*',
          T0021: 'Äh, ja, entschuldigen Sie.',
          T0022: '*Scheiß, scheiße, scheiße, habe ich das gerade wirklich getan? Habe ich gerade wirklich meine Dozentin manipuliert, nur, damit ich eine gute Note bekomme?*',
          T0023: '*Ganz ruhig bleiben Jason. Vielleicht hättest du auch so die beste Note bekommen.*',
          T0024: '*Nein, definitiv nicht. Die ganze vierte Aufgabe habe ich tierisch vergeigt.*',
          T0025: '*Verdammt. Naja, was getan ist, ist getan. Mir den Kopf darüber zu zerbrechen hilft mir jetzt auch nicht*',
          T0026: '*Ich bin der letzte der mit dem Test fertig wurde. Das heißt alle anderen sind schon weg. Zeit nachhause zu gehen.*',
          T0027: 'Endlich wieder Zuhause.',
          T0028: 'Viel vom Tag habe ich nicht mehr. Ich denke ich sollte noch etwas lernen, da der nächste Test bald ansteht.',
          T0029: 'Ich kann mich nicht nur auf meine magischen Kräfte verlassen. Ich sollte definitiv lernen.',
          T0030: 'Wieso lernen, wenn ich mich durch meine Probleme zaubern kann?',
        },
        alice: {
          T0000: 'Hey Jason.',
          T0001: 'Thomas..',
          T0002: 'Jason!',
          T0003: 'Meint er uns, Thomas?',
          T0004: 'Ja, gerade fertig geworden.',
        },
        thomas: {
          T0000: 'Hey hey.',
          T0001: 'Nenn mir bitte einen Grund, einen einzigen Grund, warum mich dein Arsch jemals interessieren sollte.',
          T0002: 'Ich gebe mein bestes.',
          T0003: 'Na, wie geht es deinem Wunderarsch?',
          T0004: 'Wieso lernen, wenn man auch nicht lernen kann?',
          T0005: 'Er meint uns, Alice.',
        },
        jasonsThoughts: {
          T0000: 'Wie ich sehe, hast du es nicht geschafft deine magische Begabung zu benutzen.',
          T0001: 'Schade, wirklich schade. Findest du das nicht etwas traurig?',
          T0002: 'Naja, ich will nun nicht noch mehr Zeit mit dir vergeuden, als nötig.',
          T0003: 'Bis dann!',
          T0004: 'Wie ich sehe hast du es geschafft die Macht in dir zu benutzen.',
          T0005: 'Wie wirst du mit dieser Kraft umgehen?',
          T0006: 'Wirst du sie für das Gute benutzen und Leuten helfen?',
          T0007: 'Oder wirst du sie eigennützig benutzen und dir all deine Wünsche erfüllen?',
          T0008: 'Oh? Ich habe keine Antwort erwartet, aber interessante Meinung. Schauen wir mal, ob das wirklich der Fall sein wird.',
        },
        dozentin: {
            T0000: 'Sind sie fertig?',
            T0001: 'Zufrieden mit Ihren Antworten?',
            T0002: 'Hochmut kommt vor dem Fall.',
            T0003: 'Dann lernen sie vielleicht besser das nächste Mal.',
            T0004: 'Träumen sollten sie im Bett behalten.',
        }
      };

      //Delay
      let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

      ƒS.Sound.fade(audio.bedroomTheme, 0, 1, true);
      ƒS.Sound.play(audio.dreamTheme, 1, true);
      await ƒS.Location.show(locations.dream);
      await ƒS.update(
        transition.waves.duration,
        transition.waves.alpha,
        transition.waves.edge
      );
  
      if (dataForSave.firstSpellSpoken == false && dataForSave.secondSpellSpoken == false) {
        await ƒS.Character.show(
          characters.jasonsThoughts,  
          characters.jasonsThoughts.pose.disappointed,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0000);

        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0001);
        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0002);
        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0003);
        await ƒS.Character.hide(characters.jasonsThoughts);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0000);
        return '007';
      } else {
        await ƒS.Character.show(
          characters.jasonsThoughts,  
          characters.jasonsThoughts.pose.neutral,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0004);

        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0005);
        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0006);
        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0007);

        let firstDialogueElementOptions = {
            iChooseGood: '"Ich werde sie natürlich für das Gute benutzen."',
            iChooseBad: '"Ist es so verkehrt, wenn ich sie für meine eigenen Zwecke benutze?"',
          };
      
        let firstDialogueElement = await ƒS.Menu.getInput(
          firstDialogueElementOptions,
          'player-choice'
        );
          
        switch (firstDialogueElement) {
          case firstDialogueElementOptions.iChooseGood:
            await ƒS.Speech.tell(characters.jason, '"Ich werde sie natürlich für das Gute benutzen."');
            break;
          case firstDialogueElementOptions.iChooseBad:
            dataForSave.reprehensibility += 10;
            await ƒS.Speech.tell(characters.jason, '"Ist es so verkehrt, wenn ich sie für meine eigenen Zwecke benutze?"');
            break;
        }

        await ƒS.Character.hide(characters.jasonsThoughts);
        await ƒS.Character.show(
          characters.jasonsThoughts,  
          characters.jasonsThoughts.pose.neutral2,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jasonsThoughts, text.jasonsThoughts.T0008);

        await ƒS.Character.hide(characters.jasonsThoughts);
        ƒS.Sound.fade(audio.dreamTheme, 0, 1, true);
        ƒS.Sound.play(audio.bedroomTheme, 1, true);
        await ƒS.Location.show(locations.bedroom);
        await ƒS.update(
          transition.waves.duration,
          transition.waves.alpha,
          transition.waves.edge
        );
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0001);

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

        await ƒS.Character.hide(characters.jason);
  
        await ƒS.Location.show(locations.school);
        await ƒS.update(transition.circlewipeClockwise.duration,
          transition.circlewipeClockwise.alpha,
          transition.circlewipeClockwise.edge);
        ƒS.Sound.fade(audio.bedroomTheme, 0, 1, true);
        ƒS.Sound.play(audio.schoolTheme, 1, true);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0002);

        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral,
          ƒS.positionPercent(25, 100)
        );
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.neutral,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.Character.show(
          characters.alice,  
          characters.alice.pose.neutral,
          ƒS.positionPercent(75, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0004);

        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.show(
          characters.alice,  
          characters.alice.pose.happy,
          ƒS.positionPercent(75, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.alice, text.alice.T0000);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.neutral2,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0000);

        if (dataForSave.secondSpellSpoken == true) {
            await ƒS.Speech.tell(characters.jason, text.jason.T0005);

            await ƒS.Character.hide(characters.jason);
            await ƒS.Character.show(
              characters.jason,  
              characters.jason.pose.neutral2,
              ƒS.positionPercent(25, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.jason, text.jason.T0006);
            
            await ƒS.Character.hide(characters.thomas);
            await ƒS.Character.show(
              characters.thomas,  
              characters.thomas.pose.questioning,
              ƒS.positionPercent(50, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.thomas, text.thomas.T0001);

            await ƒS.Character.hide(characters.jason);
            await ƒS.Character.show(
              characters.jason,  
              characters.jason.pose.thinking,
              ƒS.positionPercent(25, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.jason, text.jason.T0007);

            await ƒS.Speech.tell(characters.jason, text.jason.T0008);

            await ƒS.Character.hide(characters.jason);
            await ƒS.Character.show(
              characters.jason,  
              characters.jason.pose.neutral2,
              ƒS.positionPercent(25, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.jason, text.jason.T0009);

            await ƒS.Character.hide(characters.thomas);
            await ƒS.Character.show(
              characters.thomas,  
              characters.thomas.pose.neutral2,
              ƒS.positionPercent(50, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.thomas, text.thomas.T0002);
        } else {
            await ƒS.Character.hide(characters.thomas);
            await ƒS.Character.show(
              characters.thomas,  
              characters.thomas.pose.neutral2,
              ƒS.positionPercent(50, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.thomas, text.thomas.T0003);

            await ƒS.Character.hide(characters.jason);
            await ƒS.Character.show(
              characters.jason,  
              characters.jason.pose.neutral2,
              ƒS.positionPercent(25, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.jason, text.jason.T0010);
        }

        await ƒS.Speech.tell(characters.jason, text.jason.T0011);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.neutral,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0004);

        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.show(
          characters.alice,  
          characters.alice.pose.neutral2,
          ƒS.positionPercent(75, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.alice, text.alice.T0001);

        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral,
          ƒS.positionPercent(25, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0012);

        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.show(
          characters.alice,  
          characters.alice.pose.neutral,
          ƒS.positionPercent(75, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.alice, text.alice.T0002);

        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.disappointed,
          ƒS.positionPercent(25, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0013);

        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.show(
          characters.alice,  
          characters.alice.pose.sad,
          ƒS.positionPercent(75, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.alice, text.alice.T0003);

        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.show(
          characters.thomas,  
          characters.thomas.pose.thinking,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.thomas, text.thomas.T0005);

        ƒS.Sound.play(soundEffects.schoolBell, 1, false);
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0003);
        await signalDelay();

        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.thinking,
          ƒS.positionPercent(25, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0014);
        await ƒS.Character.hide(characters.thomas);
        await ƒS.Character.hide(characters.alice);
        await ƒS.Character.hide(characters.jason);
        await ƒS.update();
        await ƒS.Speech.tell(characters.narrator, text.narrator.T0004);
        await ƒS.update();
        await ƒS.Speech.tell('Dozentin', text.dozentin.T0000);

        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral2,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0015);

        await ƒS.Speech.tell('Dozentin', text.dozentin.T0001);

        let secondDialogueElementOptions = {
            iChooseSure: '"Natürlich."',
            iChooseNo: '"Absolut nicht."',
            iChooseWish: '"Ich wünschte mir, dass sie meinen Test mit der besten Note bewerten."',
          };
      
        let secondDialogueElement = await ƒS.Menu.getInput(
            secondDialogueElementOptions,
          'player-choice'
        );

        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
          
        switch (secondDialogueElement) {
          case secondDialogueElementOptions.iChooseSure:
            await ƒS.Speech.tell(characters.jason, text.jason.T0016);
            await ƒS.Speech.tell('Dozentin', text.dozentin.T0002);

            await ƒS.Character.hide(characters.jason);
            await ƒS.Character.show(
              characters.jason,  
              characters.jason.pose.disappointed,
              ƒS.positionPercent(50, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.jason, text.jason.T0019);
            await ƒS.Speech.tell(characters.jason, text.jason.T0020);
            break;
          case secondDialogueElementOptions.iChooseNo:
            dataForSave.reprehensibility += 10;
            await ƒS.Speech.tell(characters.jason, text.jason.T0017);
            await ƒS.Speech.tell('Dozentin', text.dozentin.T0003);

            await ƒS.Character.hide(characters.jason);
            await ƒS.Character.show(
              characters.jason,  
              characters.jason.pose.disappointed,
              ƒS.positionPercent(50, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.jason, text.jason.T0019);
            await ƒS.Speech.tell(characters.jason, text.jason.T0020);
            break;
          case secondDialogueElementOptions.iChooseWish:
            await ƒS.Speech.tell(characters.jason, text.jason.T0018);
            await ƒS.Speech.tell('Dozentin', text.dozentin.T0004);
            await ƒS.Speech.tell(characters.jason, text.jason.T0021);

            await ƒS.Character.hide(characters.jason);
            await ƒS.Character.show(
              characters.jason,  
              characters.jason.pose.disappointed,
              ƒS.positionPercent(50, 100)
            );
            await ƒS.update();
            await ƒS.Speech.tell(characters.jason, text.jason.T0022);
            await ƒS.Speech.tell(characters.jason, text.jason.T0023);
            await ƒS.Speech.tell(characters.jason, text.jason.T0024);
            await ƒS.Speech.tell(characters.jason, text.jason.T0025);
            await ƒS.Speech.tell(characters.jason, text.jason.T0026);
            break;
        }

        ƒS.Sound.fade(audio.schoolTheme, 0, 1, true);
        ƒS.Sound.play(audio.bedroomTheme, 1, true);
        await ƒS.Location.show(locations.bedroomNight);
        await ƒS.Character.hide(characters.jason);
        await ƒS.update(transition.circlewipeClockwise.duration,
          transition.circlewipeClockwise.alpha,
          transition.circlewipeClockwise.edge);

        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0027);

        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.thinking,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
        await ƒS.Speech.tell(characters.jason, text.jason.T0028);

        let thirdDialogueElementOptions = {
            iChooseLearn: 'Rest des Tages lernen.',
            iChooseMagic: 'Nicht lernen, da ich mich durch meine Probleme zaubern kann.',
        };
      
        let thirdDialogueElement = await ƒS.Menu.getInput(
            thirdDialogueElementOptions,
          'player-choice'
        );

        await ƒS.Character.hide(characters.jason);
        await ƒS.Character.show(
          characters.jason,  
          characters.jason.pose.neutral2,
          ƒS.positionPercent(50, 100)
        );
        await ƒS.update();
          
        switch (thirdDialogueElement) {
          case thirdDialogueElementOptions.iChooseLearn:
            dataForSave.reprehensibility -= 5;
            await ƒS.Speech.tell(characters.jason, text.jason.T0029);
            await ƒS.Character.hide(characters.jason);
            await ƒS.update();
            await ƒS.Speech.tell(characters.narrator, text.narrator.T0005);
            break;
          case thirdDialogueElementOptions.iChooseMagic:
            dataForSave.reprehensibility += 5;
            await ƒS.Speech.tell(characters.jason, text.jason.T0030);
            await ƒS.Character.hide(characters.jason);
            await ƒS.update();
            await ƒS.Speech.tell(characters.narrator, text.narrator.T0006);
            break;
        }
      }
    }
  }
  