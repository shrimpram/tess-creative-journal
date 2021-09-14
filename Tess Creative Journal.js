var storyContent = ﻿{"inkVersion":19,"root":[["^The drowsiness of your sleep fought against the clobber of horseshoes getting louder by the second. Two voices talked for a few seconds before the door swung open. ",{"->":"Sleeping"},"\n",["done",{"#f":5,"#n":"g-0"}],null],"done",{"Sleeping":[["ev","str","^Wake up","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Snooze","/str",{"VAR?":"snooze"},3,"<","/ev",{"*":".^.c-1","flg":5},{"c-0":["^ ",{"->":"Wake"},"\n",{"#f":5}],"c-1":["^ ","ev",{"VAR?":"snooze"},2,"<","/ev",[{"->":".^.b","c":true},{"b":["^ Your eyelids drooped down as you fall into a slumber again.",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^The door slammed shut, awakening you from your sleep.",{"->":".^.^.^.8"},null]}],"nop","\n","ev",{"VAR?":"snooze"},1,"+",{"VAR=":"snooze","re":true},"/ev",{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"Wake":["ev",{"VAR?":"snooze"},3,"<","/ev",[{"->":".^.b","c":true},{"b":["^ You woke up.",{"->":"Wake.7"},null]}],[{"->":".^.b"},{"b":["^You begrudgingly got up.",{"->":"Wake.7"},null]}],"nop","^ ",{"->":"Enter_Angel"},"\n",{"#f":1}],"Enter_Angel":[["^You peered over to the door as a figure you immediately recognized walked in. Mr. Angel Clare, your would be suitor, had it not been for the extenuating circumstances you were in.","\n","^Awaking at once, having not expected his arrival, you exclaimed,","\n",["ev",{"^->":"Enter_Angel.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.^.c-0","flg":22},{"s":["^\"O Mr Clare!",{"->":"$r","var":true},null]}],["ev",{"^->":"Enter_Angel.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.^.c-1","flg":22},{"s":["^\"O Angel!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Enter_Angel.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^ How you frightened me-I-\" (Ch. XXVII)","\n","ev","str","^Mr Clare","/str","/ev",{"VAR=":"calledAngel","re":true},{"->":"Dear_Darling"},{"#f":5}],"c-1":["ev",{"^->":"Enter_Angel.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"^ How you frightened me-I-\" (Ch. XXVII)","\n","ev","str","^Angel","/str","/ev",{"VAR=":"calledAngel","re":true},{"->":"Dear_Darling"},{"#f":5}]}],{"#f":1}],"Dear_Darling":["^\"Dear, darling Tessy!\" ","ev",{"VAR?":"calledAngel"},"out","/ev","^ whispered. ","ev",{"VAR?":"calledAngel"},"str","^Mr Clare","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ \"Don't, for Heaven's sake, Mister me any more. I have hastened back so soon because of you!\" (Ch. XXVII)",{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{"b":["^\"I have hastened back so soon because of you!\" (Ch. XXVII)",{"->":".^.^.^.15"},null]}],"nop","\n","ev",{"VAR?":"calledAngel"},"out","/ev","^ rummaged around in the drawers before turning around at once. His eyes looked through you as if he were a wizard who could read your every thought.","\n","^\"I may as well say it now as later, dearest,\" ","ev",{"VAR?":"calledAngel"},"out","/ev","^ resumed gently. \"I shall soon want to marry, and, being a farmer, you see I shall require for my wife a woman who knows all about the management of farms. Will you be that woman, Tessy?\" (Ch. XXVII) ",{"->":"Marriage_Question"},"\n",{"#f":1}],"Marriage_Question":[[["ev",{"^->":"Marriage_Question.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.^.c-0","flg":6},{"s":["^\"Yes",{"->":"$r","var":true},null]}],"ev","str","^\"No\"","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"Marriage_Question.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^ I will marry you.\"","\n",{"->":"Waiting.Agreed_to_Wedding"},{"#f":5}],"c-1":["^ ",{"->":"Marriage_Refused"},"\n",{"#f":5}]}],{"#f":1}],"Marriage_Refused":[["^\"No, no! ","ev",{"VAR?":"calledAngel"},"out","/ev","^ I cannot be your wife!\"","\n","^\"But, Tess!\" he exclaimed, \"Surely you love me?\"","\n",["ev",{"^->":"Marriage_Refused.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^\"I do!\"",{"->":"$r","var":true},null]}],"ev","str","^\"I don't!\"","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"Marriage_Refused.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","^\"But why then? Have I asked you too suddenly?\"","\n",[["ev",{"^->":"Marriage_Refused.0.c-0.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Yes-I did not expect it.\" (Ch. XXVII)",{"->":"$r","var":true},null]}],"ev","str","^\"I take that back, I don't love you.\"","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["ev",{"^->":"Marriage_Refused.0.c-0.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^\"Very well then, Tessy, I will give you time.\" ","ev",{"VAR?":"calledAngel"},"out","/ev","^ said. ",{"->":"Waiting"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Breakup"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["^ ",{"->":"Breakup"},"\n","end",{"#f":5}]}],{"#f":1}],"Waiting":["^And surely enough, just as he said, ","ev",{"VAR?":"calledAngel"},"out","/ev","^ left.","\n",{"->":".^.Marriage_Question_2"},{"Marriage_Question_2":[["^After many more visits from him you finally ended up together again while running some simple errands. ","ev",{"VAR?":"calledAngel"},"out","/ev","^ was relentless and brought up that question again","\n","^\"Well, dear—about that question of mine—that long-standing question?\" (Ch. XXX)","\n","^You were stuck, no matter what answer you gave him there was no escaping. All the norms and cultural expectations that you had been raised to follow reared their fangs against the love you cherished so dearly. Who would win?","\n","ev","str","^Divert (talk about your d'Urberville history)","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Tell ","ev",{"VAR?":"calledAngel"},"out","/ev","^ the truth","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Break up with ","ev",{"VAR?":"calledAngel"},"out","/ev","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","<>","^ \"I fear my history may upset you. To tell you the truth, I-I—am not a Durbeyfield, but a d’Urberville—a descendant of the same family as those that owned the old house we passed. And—we are all gone to nothing!\" (modified from Ch. XXX)","\n","^\"A d'Urberville? Now then Tessy that's no trouble, surely you didn't think your family history would cause me to love you any less.\"","\n","^\"No... I-\" ","ev",{"VAR?":"calledAngel"},"out","/ev","^ cut you off before you could finish.","\n","^\"Not at all. Now then, if that's all then I shall set the date for our wedding as soon as possible!\"","\n",{"->":"Waiting.Agreed_to_Wedding"},{"#f":5}],"c-1":["\n",{"#f":5}],"c-2":["^ ",{"->":"Breakup"},"\n",{"#f":5}]}],{"#f":1}],"Agreed_to_Wedding":["^Shocked at the consequences of what had just happened, all your mind permitted you to do was stare and nod along as he finalized your future.","\n",{"->":"Pre_Wedding"},{"#f":1}],"Truth":["^[You] bent forward, at which each diamond on [your] neck gave a sinister wink like a toad’s; and pressing [your] forehead against his temple [you] entered on [your] story of [your] acquaintance with Alec d’Urberville and its results, murmuring the words without flinching, and with [your] eyelids drooping down.\" (Ch. XXXIV)","\n","^After finishing your story the silence stuck in the air, as if it had stolen both of your voices. Though, even if you could speak neither would dare be the first to acknowledge what had just been said. ","ev",{"VAR?":"calledAngel"},"out","/ev","^ finally cracked, pleading, \"Am I to believe this? From your manner I am to take it as true. O you cannot be out of your mind! You ought to be! Yet you are not... My wife, my Tess—nothing in you warrants such a supposition as that?\" (Ch. XXXV)","\n","^Just as he had finished saying that, ","ev",{"VAR?":"calledAngel"},"out","/ev","^ let out a laugh, followed by another, and another, and erupted in a shrill cacophony of laughter, each laugh sending chills down your spine.","\n","^\"Angel, Angel! what do you mean by that laugh?” you cried out. “Do you know what this is to me?\" (Ch. XXXV)","\n","^\"Tessy\" he started, before correcting himself. \"No. I shouldn't call you that, my Tessy was a different woman. You are some other woman who has taken her place.\"","\n","^You looked at him in shock, failing to comprehend what he had just said.","\n","^\"I repeat, the woman I have been loving is not you.\"","\n","^\"But who?\"","\n","^\"Another woman in your shape.\" (Ch. XXXV)","\n","^The realization of what ","ev",{"VAR?":"calledAngel"},"out","/ev","^ meant crept up on you, and the fangs of society seemed to have won. All you could do now was to let ","ev",{"VAR?":"calledAngel"},"out","/ev","^ do what he wanted, which it seemed he knew as well, grabbing his coat and slamming the door behind you, its reverberations echoing off the stone cold walls.","\n","^Fin. ","end","\n",{"#f":1}],"#f":1}],"Pre_Wedding":[["^The next couple of days blurred together as you sat in your home preparing for the wedding that was to come. You came to the conclusion that you realistically had three choices:","\n","ev","str","^Write a letter to ","ev",{"VAR?":"calledAngel"},"out","/ev","^ confessing your past","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Confess to ","ev",{"VAR?":"calledAngel"},"out","/ev","^ at the wedding","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Run away","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ",{"->":"Letter"},"\n",{"#f":5}],"c-1":["\n","ev",1,"/ev",{"VAR=":"confessAtWedding","re":true},{"->":"Wedding"},{"#f":5}],"c-2":["^ ",{"->":".^.^.^.Run_Away"},"\n",{"#f":5}]}],{"Run_Away":["^You packed your things in a hurry and opened the door, calling for a carriage to take you far from here and leaving a little extra money that would seal the driver's lips. As the houses turned into huts which eventually turned into forest you felt oddly free, as though the shackles of a love destined to fail had just been released.","\n","^Fin. ","end","\n",{"#f":1}],"#f":1}],"Letter":[["^Though going back to that day at The Chase brought you pain, you started penning your confession to ","ev",{"VAR?":"calledAngel"},"out","/ev","^. The scratching of the quill on paper etched what you had once relegated to the deepest darkest crevices of your mind onto a medium for all to see. Finishing the last line and signing your name you folded up the confession and tucked it into your pocket.","\n","ev","str","^Slip the confession under ","ev",{"VAR?":"calledAngel"},"out","/ev","^'s door","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Hold on to it until your wedding","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"Letter.Door"},"\n",{"#f":5}],"c-1":["^ You held on to the confession, and the days flew by until it was the day of your wedding ",{"->":"Wedding"},"\n",{"#f":5}]}],{"Door":["^You crept out of your desk and went over to ","ev",{"VAR?":"calledAngel"},"out","/ev","^'s room. He was out for the day so you would have to wait until nightfall to see his reaction. Sliding the note under the door you went back to your room and crawled under the sheets falling into a slumber of nervousness.","\n","^Once you awoke in the evening, you didn't feel any more refreshed than you had in the afternoon. Walking over to ","ev",{"VAR?":"calledAngel"},"out","/ev","^'s door you saw no light coming from underneath it, which was odd as he was usually back by now.","\n",{"->":".^.^.Door_Options"},{"#f":1}],"Door_Options":[["ev","str","^Knock","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Break it down","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You knocked on the door, no response.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^You kicked the wood off its hinges. The door fell over and the hollow *clack* of the wood on the stone floor reveled an empty room.","\n","^No letter, no ","ev",{"VAR?":"calledAngel"},"out","/ev","^, and all of his belongings missing, having vanished as fleetingly as the love that once existed between you.","\n","^Fin. ","end","\n",{"#f":5}]}],{"#f":1}],"#f":1}],"Wedding":["^The day of the wedding was upon you, can donning your wedding gown like a suit of armor you hopped in the carriage ","ev",{"VAR?":"calledAngel"},"out","/ev","^ sent for you, prepared to slay the fanged beast.","\n","^You walked into the wedding hall, chock full of not only your family but","\n","end",{"#f":1}],"Breakup":[["^\"","ev",{"VAR?":"calledAngel"},"out","/ev","^ I- I do hate to have to let down you so harshly. I fear though that a divide has come between us. The way I see you now, simply isn't the same as how I used to.\"","\n","ev",{"VAR?":"calledAngel"},"out","/ev","^ stood there, you could see him going through the various of grief trying to comprehend what you had just said. The words that had just ended what love you had shared hung in the air, like a swarm of bees that he dared not touch, as if ignoring what you just said would reverse it.","\n","^\"Tessy dear, come now, this is hardly the time for jokes.\" ","ev",{"VAR?":"calledAngel"},"out","/ev","^ tried to reason, his voice showed the slightest hints of pleading.","\n",["ev",{"^->":"Breakup.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.^.c-0","flg":6},{"s":["^\"Yes it was a joke.",{"->":"$r","var":true},null]}],["ev",{"^->":"Breakup.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.\"","/str","/ev",{"*":".^.^.c-1","flg":6},{"s":["^\"I wasn't joking",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Breakup.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],"^ I never really meant that, though it was probably in poor taste, my apologies. Now then, as far as your actual question...\" ",{"->":"Marriage_Question"},"\n",{"#f":5}],"c-1":["ev",{"^->":"Breakup.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"^ ","ev",{"VAR?":"calledAngel"},"out","/ev","^, why do you think I would joke about something like that. Now then, it's probably time you packed your things and left.\"","\n","^I ushered ","ev",{"VAR?":"calledAngel"},"out","/ev","^ out the door, closing it and locking it behind him. With the latch of the deadbolt I felt a relief, but a looming feeling that I had made some sort of mistake.","\n","^Fin. ","end","\n",{"#f":5}]}],{"#f":1}],"global decl":["ev",0,{"VAR=":"snooze"},"str","^","/str",{"VAR=":"calledAngel"},0,{"VAR=":"confessAtWedding"},"/ev","end",null],"#f":1}],"listDefs":{}};