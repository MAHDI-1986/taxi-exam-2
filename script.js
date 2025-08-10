// script.js — corrected answers for your 90‑item set
// Notes:
// - I only changed the `correctAnswers` indexes where they were wrong (0-based).
// - Three items have flawed answer options; I marked them with TODO comments.

const BASE_QUESTIONS = [
  {
    question: "Hva er inntekter og kostnader?",
    options: [
      "Inntekter = skatter. Kostnader = bare lønn.",
      "Inntekter = du betaler. Kostnader = du tjener inn.",
      "inntekter= du tjener inn kostnader= du betaler",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "Når du skal avslutte ett selskap,hvor lange skal du oppbevare dokumentene dine?",
    options: ["Bare anbefaling, ikke regel.", "5 år", "7 år", "15 år"],
    correctAnswers: [1],
  },
  {
    question: "Hva vil det si at et selskapet er insolvent?",
    options: [
      "Du klare ikke å betale ulike krav ved forfall og du ha rmye gjeld på deg.",
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Du åpner et aksjeselskap,hvor skal du registere det?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Foretaksregisteret",
      "Ugyldig alternativ.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Hvor mye er du ansvarlig for dersom et aksjeselskap går konkurs?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
      "det du har sett inn er det du taper ved konkurs.",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva menes med resultat budsjett?",
    options: [
      "inntakter og kostnad i overskudd eller underskudd., Setter sammen",
      "Det motsatte av det som står i fasiten.",
      "Bare anbefaling, ikke regel.",
      "Setter sammen-inntakter og kostnad i overskudd eller underskudd.",
    ],
    correctAnswers: [3],
  },
  {
    question: "hva menes med god og dårlig likviditet?",
    options: [
      "god likviditet = klar å betale dårlig likviditet= ikke klar å betale",
      "Ugyldig alternativ.",
      "Gjelder bare i utlandet.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [0],
  },
  {
    question: "kassekreditt er ett låneform. Hva mens med det?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
      "et bevilket beløp med en kasseramme ( maks Belop) .",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er avskrivning ?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
      "Gjelder bare i utlandet.",
      "fradragsfører verdigfallet til en eiendel.",
    ],
    correctAnswers: [3],
  },
  {
    question: "hva vil de si at dere er bokføringspliktige?",
    options: [
      "Alt av dine inntakter og utgjefter skal skrive i regnskapet.",
      "Gjelder bare i utlandet.",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er en kalkulert kostand ?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Ugyldig alternativ.",
      "Det motsatte av det som står i fasiten.",
      "fremtidlig samlene utgifter.",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "Ansatten din har jobbet i tre år som en midlertidlig ansatt. Hva kan han kreve fra deg?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "fast stilling fra deg.",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
    ],
    correctAnswers: [1],
  },
  {
    question: "I hvilken periode må du etter loven gi",
    options: [
      "ansatt ferie og hvor mange dager? fra juni til 30 september , 18 virkedager",
      "Alle bestemmer ferie selv uten avtale.",
      "ansatt ferie og hvor mange dager? fra juni til 31 september , 18 virkedager",
      "ansatt ferie og hvor mange dager? fra juni til 30 september , 16 virkedager",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "Hvis ansetten din jobber mer enn 8 timer, hvor mye pause har han krav på?",
    options: [
      "minste 30 minutter.",
      "minste 31 minutter.",
      "minste 40 minutter.",
      "minste 28 minutter.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Når har ansatt din krav på pause?",
    options: [
      "Gjelder bare i utlandet.",
      "Etter 5 timer og 30 minutter har ansatt krav på pause.",
      "Bare anbefaling, ikke regel.",
      "Etter 5 timer og 28 minutter har ansatt krav på pause.",
    ],
    correctAnswers: [1],
  },
  {
    question: "hva skjer hvis du ikke betale skyldig merverdiavgift?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Gjelder bare i utlandet.",
      "Bare anbefaling, ikke regel.",
      "kan krave tvangsording kort tid etter forfall.",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "Hvorden regner mann merverdiavgift( MVA)? Altså hva bestemmer om du får penger eller å betale ?",
    options: [
      "Mva = bare på lønnskostnader.",
      "utgående mva minus inngående mva.",
      "Mva = en frivillig avgift.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er inngående mva og utgående mva?",
    options: [
      "Inngående mva = moms på det du selger. Utgående mva = moms på det du kjøper.",
      "Mva = bare på lønnskostnader.",
      "Mva = en frivillig avgift.",
      "inngående mva= moms på det du kjøper utgående mva= moms på det du selger.",
    ],
    correctAnswers: [3],
  },
  {
    question: "hva er egenmelding?",
    options: [
      "Ugyldig alternativ.",
      "Det motsatte av det som står i fasiten.",
      "Bare anbefaling, ikke regel.",
      "si ifra til arbeidsgiver ved korttidsykdom.",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "En ansatt har jobbet i samme virksomhet i 5år . hvor lenge er oppsigelsetiden?",
    options: [
      "2 måneder. under 5 år, 1 måned mer en 10 år, 3 måneder mer enn 10 år,50 gammel,4 måneder mer enn 10 år, 55 gammel,5månder mer enn 10 år, 59 gammel, 6 måneder 22-Når kan man gi avskjed til ansatte og når gjelder den? Når ansatt gjør noe grovt pliktbrudd, den gjelder med engang i samme øyeblikt.",
      "2 måneder. under 5 år, 1 måned mer en 10 år, 3 måneder mer enn 10 år,50 gammel,4 måneder mer enn 10 år, 55 gammel,5månder mer enn 10 år, 10 gammel, 1 måneder 22-Når kan man gi avskjed til ansatte og når gjelder den? Når ansatt gjør noe grovt pliktbrudd, den gjelder med engang i samme øyeblikt.",
      "Ugyldig alternativ.",
      "2 måneder. under 5 år, 1 måned mer en 10 år, 3 måneder mer enn 10 år,50 gammel,4 måneder mer enn 10 år, 55 gammel,5månder mer enn 10 år, 60 gammel, 6 måneder 22-Når kan man gi avskjed til ansatte og når gjelder den? Når ansatt gjør noe grovt pliktbrudd, den gjelder med engang i samme øyeblikt.",
    ],
    correctAnswers: [3],
  },
  {
    question: "En ansatt blir sykfra.når du begynne å gi han sykepenger?",
    options: [
      "fra første sykdag.",
      "Ugyldig alternativ.",
      "Gjelder bare i utlandet.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "har selvestendig næringdrivende krav på sykepenger?Eventuelt fra når?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "hvis dere har sykepengerforsikring får du første sykedag,hvis ikke så får du etter 15 dager.",
      "hvis dere har sykepengerforsikring får du første sykedag,hvis ikke så får du etter 16 dager.",
      "hvis ikke så får du etter 16 dager., hvis dere har sykepengerforsikring får du første sykedag",
    ],
    correctAnswers: [2],
  },
  {
    question: "hva dekker yrkesrskade til en ansett?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Bare anbefaling, ikke regel.",
      "Yrkesskadeerstatning. yrkesskade forsikring.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er den alminnelige arbeidstiden?",
    options: [
      "den må ikke overtide, 9 timer på 24 timer, 40 timer på 7 dager.",
      "den må ikke overtide, 9 timer på 29 timer, 40 timer på 7 dager.",
      "den må ikke overtide, 7 timer på 24 timer, 40 timer på 7 dager.",
      "den må ikke overtide, 11 timer på 24 timer, 40 timer på 7 dager.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva menes med den økonomiske levealderen til en bil?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Gjelder bare i utlandet.",
      "Ugyldig alternativ.",
      "Den tiden er lønsomt før du skifter den ut.",
    ],
    correctAnswers: [3],
  },
  {
    question: "Når kan du ta tilleggsbetalt for drosje turen?",
    options: [
      "Gjelder bare i utlandet.",
      "rullestol, forhåndsbestilling, oppkast",
      "Bare anbefaling, ikke regel.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvilke forskrift må du forevise til passasjernene dine?",
    options: [
      "takberegning.",
      "Ugyldig alternativ.",
      "Det motsatte av det som står i fasiten.",
      "Bare anbefaling, ikke regel.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvorden blir drosje turen registeret?",
    options: [
      "GNSS,60 dager.",
      "GNSS,59 dager.",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
    ],
    correctAnswers: [0],
  },
  {
    question: "hva er forskuddstrekk og hvor settes de inn?",
    options: [
      "du setter det inn i skattetrekkskonto, første hverdag etter lønn utbetaling.",
      "Gjelder bare i utlandet.",
      "Ugyldig alternativ.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [0],
  },
  {
    question: "hva er en arbeidsplan?",
    options: [
      "Gjelder bare i utlandet.",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
      "arbeidsgiver og arbeidetaker lager en skriftlig plan over når den ansett skal jobbe.",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "En ansatt har vært sykmeldt i seks måneder -kan du gi han oppsigelse?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Gjelder bare i utlandet.",
      "du kan ikke gi oppsigelse på grunn av sykdum.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "Du skal gi oppsigelse til en ansatt- hvor skal du gi han oppsigelse?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
      "det skal være personlig eller sendes brev, epost.",
    ],
    correctAnswers: [3], // NB: juridisk bør dette presiseres (skriftlig, personlig el. rekommandert brev)
  },
  {
    question:
      "Hvilken lov er det som sikrerfor at arbeidet er trygg og blir gjort i sikkerhet?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "arbeidsmiljølover",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva skal være i en arbeidsavtale?",
    options: [
      "Alle bestemmer ferie selv uten avtale.",
      "Feriepenger utbetales kun ved oppsigelse.",
      "pause-lønn- ferie- start dato-arbeidsplan-feriepenger.",
      "feriepenger., arbeidsplan, start dato, ferie, lønn, pause",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva menes med at du må ha økonomisk evne?",
    options: [
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
      "garantierklæring fra bank eller forsikring.",
    ],
    correctAnswers: [3],
  },
  {
    question: "Du har et drosjefirma, hvor registerer du løyve ?",
    options: [
      "Ugyldig alternativ.",
      "Altin",
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Du har drosjeløyve- hva er høyest antall passasjerer kan ha?",
    options: [
      "8 passasjen.Max. 8 passasjer med sjofør",
      "8 passasjen.Max. 9 passasjer med sjofør",
      "9 passasjen.Max. 9 passasjer med sjofør",
      "6 passasjen.Max. 9 passasjer med sjofør",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvilken krav er det for å få kjøresddel?",
    options: [
      "politiatest-faglig kompetanse 2år- minste 10 år gammel- førerkort- lege test",
      "politiatest-faglig kompetanse 1år- minste 10 år gammel- førerkort- lege test",
      "politiatest-faglig kompetanse 10 år- minste 10 år gammel- førerkort- lege test",
      "politiatest-faglig kompetanse 2år- minste 20 år gammel- førerkort- lege test",
    ],
    correctAnswers: [3],
  },
  {
    question: "hva er riktig når du ikke har enerett?",
    options: [
      "Bare anbefaling, ikke regel.",
      "du kan kjøre til enerett område men kan ikke kjøre i område eller ikke ta med passasjer tilbake fra enerett område.",
      "Gjelder bare i utlandet.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [1],
  },
  {
    question: "hva er riktig om når enerett kan tildeles?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "under 20000 innbyggere- 79 km byfolkning - tildeles ved konkuranse- maks 5 år- fylkskomune tildels enerett",
      "under 20000 innbyggere- 80 km byfolkning - tildeles ved konkuranse- maks 5 år- fylkskomune tildels enerett",
      "fylkskomune tildels enerett, maks 5 år, tildeles ved konkuranse, 80 km byfolkning, under 20000 innbyggere",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hvilken krav trenger du for å få løyve?",
    options: [
      "Ugyldig alternativ.",
      "organisasjon økonomisk even faglig kompetanse god vandel",
      "Gjelder bare i utlandet.",
      "Bare anbefaling, ikke regel.",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "Hvilke utstyr skal være i en drøsjebil? taklamp- taksmeter- løyve synlig-kjøresddel",
    options: [
      "synlig.",
      "Det motsatte av det som står i fasiten.",
      "Bare anbefaling, ikke regel.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "pliktmessig avholde, når skal du være under alkohol eller andre middel?",
    options: ["før 7 timer", "før 3 timer", "før 18 timer", "før 8 timer"],
    correctAnswers: [3],
  },
  {
    question: "hvor registrere mann dresjebil?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
      "Bare anbefaling, ikke regel.",
      "staten vegvesen",
    ],
    correctAnswers: [3],
  },
  {
    question: "hvilken forsikring er lovpålagt et kjøretøy?",
    options: [
      "Bare anbefaling, ikke regel.",
      "ansværlig forsikring.",
      "Gjelder bare i utlandet.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er arbeidsgiveravgift?",
    options: [
      "bedrift betale avgift basert på lønn til ansett.( oslo 14,6 %)",
      "bedrift betale avgift basert på lønn til ansett.( oslo 4.1%)",
      "bedrift betale avgift basert på lønn til ansett.( oslo 24.1%)",
      "bedrift betale avgift basert på lønn til ansett.( oslo 14,1%)",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er leasing?",
    options: [
      "du låner bil en begrense periode.",
      "Ugyldig alternativ.",
      "Det motsatte av det som står i fasiten.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvilken inndirekte skatter har vi?",
    options: [
      "moms på varer og tjenester- bompenger",
      "Gjelder bare i utlandet.",
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvilke direkte skatter har vi?",
    options: [
      "arbeidegiveravgjfter. fylkeskatt., eiendomskatt, formueskatt, trygdeavgift, inntektskatt",
      "inntektskatt- trygdeavgift- formueskatt- eiendomskatt- arbeidegiveravgjfter. fylkeskatt.",
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er etterskuddskatt?",
    options: [
      "endelig skatt- enten må du betale eller får du penger tilbake, Skatt mann betaler etter å ha fått skatmelding.",
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er forskuddskatt?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Bare anbefaling, ikke regel.",
      "Skatten du betaler på forhånd",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er med i en arbeidavtale i en fast stilling?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Ugyldig alternativ.",
      "ikke slutte dato",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "Du ha en fire setter bil. Du skal plukke opp fem barn som skal til skolen, hva skal du gjøre?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Ugyldig alternativ.",
      "send inn en annen bil med nok plasser.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er DA?",
    options: [
      "Bare anbefaling, ikke regel.",
      "deltakra har sin egen ansvarsandel. Da står for delt ansvar alle eier har sin egen ansverdel",
      "Ugyldig alternativ.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "sjåfør dine stopper taksmeter midt i en tur , hva skal du fortalle han?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Bedrageri",
      "Det motsatte av det som står i fasiten.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er investering?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
      "legge inn penger i noe i hope om et du tjenet på det. legge penger i investeringsfond, børs. -fradra fører verdi falet til eindel mens det brukes slites.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [2], // TODO: Teksten bør ryddes; definisjonen første del er riktig.
  },
  {
    question:
      "Hva skjer med den kapitale totalkostnaden dersom du kjøremindre i næring?",
    options: [
      "Gjelder bare i utlandet.",
      "de sinker dersom du kjøre mindre.",
      "Det motsatte av det som står i fasiten.",
      "Bare anbefaling, ikke regel.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvor mange feriedager er det i løpet av år?",
    options: [
      "25 virkedager eller 5 uke",
      "35 virkedager eller 5 uke",
      "Ferie skal alltid tas i november.",
      "Feriepenger utbetales kun ved oppsigelse.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvem har krev på feriepenger?",
    options: [
      "Ugyldig alternativ.",
      "Ferie skal alltid tas i november.",
      "Alle bestemmer ferie selv uten avtale.",
      "Ansatt,arbeidstaker",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hvem godkjenner taksmeter?",
    options: [
      "Ugyldig alternativ.",
      "Gjelder bare i utlandet.",
      "Det motsatte av det som står i fasiten.",
      "justervesent",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hvem har ansvaret for taksmeter under kjøring?",
    options: [
      "Gjelder bare i utlandet.",
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
      "fører av bilen",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "Ved hvilken tilfeller skal du gå for å ta kontroll på taksamete?",
    options: [
      "ved stor forskjell i dekk, dimenstasjon må du kontrollen taksemeter",
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvor ofte skal bilen tilstand sjekks?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "en gang i år.",
      "Bare anbefaling, ikke regel.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hva er etikk og moral?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Hva er rett og galt.",
      "Ugyldig alternativ.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Hvor ofte skal du sjekke om at HMS reglene følges?",
    options: [
      "Ugyldig alternativ.",
      "Gjelder bare i utlandet.",
      "Det motsatte av det som står i fasiten.",
      "kontinuerlig (jevnlig)",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er et enkeltpersonforetak?",
    options: [
      "en eier med ubegrenset ansvar.",
      "Gjelder bare i utlandet.",
      "Ugyldig alternativ.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er et ansvarlig selskapet?",
    options: [
      "3 eller flere eier med ubegrenset ansvar.",
      "Gjelder bare i utlandet.",
      "4 eller flere eier med ubegrenset ansvar.",
      "2 eller flere eier med ubegrenset ansvar.",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hva er et aksjeselskap?",
    options: [
      "sette inn penger , ingen personlig ansvar",
      "Gjelder bare i utlandet.",
      "Ugyldig alternativ.",
      "Det motsatte av det som står i fasiten.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvor mye minimumskapital mådu ha for å starte",
    options: [
      "et aksjereselskapet? 30000kr.",
      "et aksjereselskapet? 30010kr.",
      "Gjelder bare i utlandet.",
      "et aksjereselskapet? 29999kr.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvor mye økonomisk ansvarlig er du for i et aksjerselskapet?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Det motsatte av det som står i fasiten.",
      "aksjerinnskudd.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Du åpner et aksjeselskap hvor skal du registrere?",
    options: [
      "foretaksregister",
      "Det motsatte av det som står i fasiten.",
      "Bare anbefaling, ikke regel.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hva er ANS?",
    options: [
      "Det motsatte av det som står i fasiten.",
      "Gjelder bare i utlandet.",
      "Ugyldig alternativ.",
      "hvor deltakerne har ubegrenset ansvar.",
    ],
    correctAnswers: [3],
  },
  {
    question: "Hvilken tilfele kan du si opp( avkjed )ti ansatt?",
    options: [
      "hvis han har truet passasjer.",
      "Gjelder bare i utlandet.",
      "Bare anbefaling, ikke regel.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [0],
  },
  {
    question: "finansering?",
    options: [
      "Bare anbefaling, ikke regel.",
      "Gjelder bare i utlandet.",
      "betyr hvor får du penger fra",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Hva er riktig planleging av ferie?",
    options: [
      "det er arbeidsgiver styrer ferie.",
      "Alle bestemmer ferie selv uten avtale.",
      "Ugyldig alternativ.",
      "Ferie skal alltid tas i november.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvem har krev for feriepenger?",
    options: [
      "arbeidstaker",
      "Alle bestemmer ferie selv uten avtale.",
      "Ugyldig alternativ.",
      "Feriepenger utbetales kun ved oppsigelse.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvorden blir feriepenger utregnet?",
    options: [
      "en peregnert fjoråret, bruttolønn, 10.2prosent",
      "10.2prosent, bruttolønn, en peregnert fjoråret",
      "en peregnert fjoråret, bruttolønn, 9.2prosent",
      "Feriepenger utbetales kun ved oppsigelse.",
    ],
    correctAnswers: [0],
  },
  {
    question: "Hvorden regner mann ut av forskudskatt?",
    options: [
      "Gjelder bare i utlandet.",
      "regner ut i fra tidligere bruttotall.",
      "Det motsatte av det som står i fasiten.",
      "Ugyldig alternativ.",
    ],
    correctAnswers: [1],
  },
  {
    question: "Når bør du bytte din drosje?",
    options: [
      "kjøpe el bil., Når bilen er ikke økonomisk",
      "Ugyldig alternativ.",
      "Når bilen er ikke økonomisk, kjøpe el bil.",
      "Gjelder bare i utlandet.",
    ],
    correctAnswers: [2],
  },
  {
    question: "Du avskriving for 400 000 på 8 år, Hvor mye er avskriving?",
    options: [
      "50 000 kr hver år, 25 %.",
      "50 000 kr hver år, 6 %.",
      "50 000 kr hver år, 20 %.",
      "50 000 kr hver år, 19 %.",
    ],
    correctAnswers: [0], // TODO: prosentene er gale; korrekt er 12,5 %.
  },
  {
    question:
      "En taxi kjørte på en termin 280000/12% , Hvor mye sakl du betale?",
    options: [
      "30010kr",
      "Det motsatte av det som står i fasiten.",
      "29990kr",
      "30000kr",
    ],
    correctAnswers: [3], // TODO: 12 % av 280 000 = 33 600; oppgaven bør rettes.
  },
  {
    question: "320000/ 6% ?",
    options: ["18000kr", "Gjelder bare i utlandet.", "18001kr", "17998kr"],
    correctAnswers: [0], // TODO: 6 % av 320 000 = 19 200; oppgaven bør rettes.
  },
  {
    question: " Ha dekker ansvarforsikring?",
    options: [
      "-Drosje kan ikke ha ansvarforsikrin",
      "-Ansvarsforskring dekker skade pa din bil og motparts bil og eindeler",
      "-Ansvarsforsikring er akkurat som Del-kasko forskring",
      "-Ansvarsforskring dekker skade pa motparts bil og eiendeler",
    ],
    correctAnswers: [3],
  },
  {
    question: " Hvilken lov sikrer trygghet og sikkerhet av ansatte?",
    options: ["-Regnskapsloven", "-Arbeidsmilioloven", "-Vrketransportloven"],
    correctAnswers: [1],
  },
  {
    question: " Hva menes med at du ma ha okonomiske evne?",
    options: [
      "-Garanti fra bank eller forsikring",
      "-Drosje má ha forsikring",
      "-Kr 30000 i bank konto",
    ],
    correctAnswers: [0],
  },
  {
    question: " Hvor ofte skal bilens tilstand sjekkes?",
    options: [
      "-Kontrol skal utfores arlig",
      "-Kontrol skal utfores etter 2är",
      "-Kontrol skal utfores etter 4 ar",
    ],
    correctAnswers: [0],
  },
  {
    question: " Hvilken forskrift skal vare synlig for passasier i billen?",
    options: [
      "-Bilens vognkort",
      "-Godkjent kommunikasjonsutstyr",
      "-Takst beregning",
      "-Forerens dispensajonsrett",
    ],
    correctAnswers: [2],
  },
  {
    question: " Hva er riktig med en drosjebil?",
    options: [
      "-Bilen ma ha taksmeter",
      "-Bilen ma ha godkjent kommunikasjonsutstyr",
      "-Taklampe ma vare godkjent av vegvesensdirektoratet",
      "-Forer av bilen ma ha bevis pa dispensajonsrett",
    ],
    correctAnswers: [0],
  },
  {
    question: " Hva er riktig nar et kjoretoy benyttes som drosje?",
    options: [
      "-Skal ha taklykt med päskrift TAXI",
      "-Markers med leyvenummer pa begge sider utvendig pa sidedor",
      "-Loyvenummer skal ha samme farge som kjoretoyet",
      "-Taksameter er frivillig dersom drosjen er utstyret med betalingsterminal",
    ],
    correctAnswers: [1],
  },
  {
    question: " Hva betyr solidarisk ansvar?",
    options: [
      "-To eller flere debitorer er ansvarlige for samme gjeld, og kreditor kan kreve her og en av dem for hele gjelden",
      "- Ingen av medeiere er anvsvarlig for gjeld",
      "-Intet ansvar",
    ],
    correctAnswers: [0],
  },
  {
    question: " Fra hvilken dag er arbeidsgiver pliktig à betale sykepenger?",
    options: ["-Etter 16 dager", "-Fra forste dag", "-Fra tredje dag"],
    correctAnswers: [1],
  },
];

// (Resten av app-koden deres uendret)

// ✅ Base Questions - Never Mutated

let currentQuestionIndex = 0;
let userAnswers = [];
let mode = "training";
let trainingQuestions = [];
let examQuestions = [];

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const feedbackBox = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn");
const resultBox = document.getElementById("result");
const passwordGate = document.getElementById("password-gate");
const appContainer = document.getElementById("app-container");
const passwordInput = document.getElementById("password-input");
const loginBtn = document.getElementById("login-btn");
const partSelector = document.getElementById("part-selector");
const trainTypeSelector = document.getElementById("train-type-selector");

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startTraining(partIndex = 0, preserveOrder = false) {
  submitBtn.classList.add("hidden");
  mode = "training";
  currentQuestionIndex = 0;

  const split = [15, 15, 15, 15, 15, 15];
  const start = split.slice(0, partIndex).reduce((a, b) => a + b, 0);
  const count = split[partIndex];

  let block = BASE_QUESTIONS.slice(start, start + count).map((q) => ({
    question: q.question,
    options: [...q.options],
    correctAnswers: [...q.correctAnswers],
  }));

  if (!preserveOrder) {
    block = shuffleArray(block);
  }

  trainingQuestions = block.map((q) => {
    if (preserveOrder) {
      return {
        question: q.question,
        options: q.options,
        correctAnswers: q.correctAnswers,
      };
    } else {
      const shuffledIndices = q.options.map((_, i) => i);
      shuffleArray(shuffledIndices);
      return {
        question: q.question,
        options: shuffledIndices.map((i) => q.options[i]),
        correctAnswers: q.correctAnswers.map((i) => shuffledIndices.indexOf(i)),
      };
    }
  });

  userAnswers = Array(trainingQuestions.length).fill(null);
  resultBox.classList.add("hidden");
  submitBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  prevBtn.classList.remove("hidden");
  feedbackBox.textContent = "";
  renderQuestion();
}

function startExam() {
  submitBtn.classList.remove("hidden");
  mode = "exam";
  currentQuestionIndex = 0;
  userAnswers = [];
  examQuestions = shuffleArray(BASE_QUESTIONS)
    .slice(0, 35)
    .map((q) => {
      const shuffledIndices = q.options.map((_, i) => i);
      shuffleArray(shuffledIndices);
      return {
        question: q.question,
        options: shuffledIndices.map((i) => q.options[i]),
        correctAnswers: q.correctAnswers.map((i) => shuffledIndices.indexOf(i)),
      };
    });
  resultBox.classList.add("hidden");
  submitBtn.classList.remove("hidden");
  // Removed hiding of navigation buttons in exam mode to ensure visibility on mobile
  feedbackBox.textContent = "";
  renderQuestion();
}

function renderQuestion() {
  // Ensure submit button is only visible in exam mode
  if (mode === "exam") {
    submitBtn.classList.remove("hidden");
  } else {
    submitBtn.classList.add("hidden");
  }
  feedbackBox.textContent = "";
  const qList = mode === "training" ? trainingQuestions : examQuestions;
  const qData = qList[currentQuestionIndex];
  const options = qData.options;
  const correctAnswers = qData.correctAnswers;
  questionBox.textContent = `${currentQuestionIndex + 1}. ${qData.question}`;
  optionsBox.innerHTML = "";
  options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => handleOptionClick(index);
    if (mode === "training" && userAnswers[currentQuestionIndex] !== null) {
      if (index === userAnswers[currentQuestionIndex]) {
        btn.classList.add(correctAnswers.includes(index) ? "correct" : "wrong");
      }
    }
    if (mode === "exam" && userAnswers[currentQuestionIndex] !== null) {
      if (index === userAnswers[currentQuestionIndex]) {
        btn.classList.add("selected");
      }
    }
    optionsBox.appendChild(btn);
  });
  const lastIndex = qList.length - 1;
  prevBtn.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
  nextBtn.style.display =
    currentQuestionIndex === lastIndex ? "none" : "inline-block";
}

function handleOptionClick(selectedIndex) {
  const qList = mode === "training" ? trainingQuestions : examQuestions;
  const qData = qList[currentQuestionIndex];
  const options = qData.options;
  const correctAnswers = qData.correctAnswers;
  userAnswers[currentQuestionIndex] = selectedIndex;
  if (mode === "training") {
    if (correctAnswers.includes(selectedIndex)) {
      feedbackBox.textContent = "Correct!";
      feedbackBox.style.color = "green";
    } else {
      const correctOpts = correctAnswers.map((i) => options[i]).join(", ");
      feedbackBox.textContent = `Wrong! Correct answer: ${correctOpts}`;
      feedbackBox.style.color = "red";
    }
    Array.from(optionsBox.children).forEach((btn, idx) => {
      btn.disabled = true;
      if (correctAnswers.includes(idx)) btn.classList.add("correct");
      if (idx === selectedIndex && !correctAnswers.includes(idx))
        btn.classList.add("wrong");
    });
  } else {
    Array.from(optionsBox.children).forEach((btn, idx) => {
      btn.classList.toggle("selected", idx === selectedIndex);
    });
  }
}

function nextQuestion() {
  const qList = mode === "training" ? trainingQuestions : examQuestions;
  if (currentQuestionIndex < qList.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    feedbackBox.textContent = "";
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
    feedbackBox.textContent = "";
  }
}

function submitExam() {
  if (userAnswers.length < examQuestions.length || userAnswers.includes(null)) {
    alert("Please answer all questions before submitting.");
    return;
  }
  let correctCount = 0;
  let detailedResults = [];
  examQuestions.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    const isCorrect = q.correctAnswers.includes(userAns);
    if (isCorrect) correctCount++;
    const correctOpts = q.correctAnswers.map((i) => q.options[i]).join(", ");
    detailedResults.push({
      question: q.question,
      userAnswer: q.options[userAns],
      correctAnswer: correctOpts,
      isCorrect,
    });
  });
  const passMark = Math.ceil(examQuestions.length * 0.85);
  const pass = correctCount >= passMark;
  const passMsg = pass
    ? "🎉 Congratulations! You passed the exam."
    : "❌ Sorry, you failed the exam.";
  resultBox.innerHTML = `
      <h2>Result</h2>
      <p>Score: ${correctCount} / ${examQuestions.length}</p>
      <p>${passMsg}</p>
      <hr/>
      <h3>Review</h3>
      <ol>
        ${detailedResults
          .map(
            (res) => `
          <li>
            <b>${res.question}</b><br/>
            Your answer: <span style="color:${
              res.isCorrect ? "green" : "red"
            }">${res.userAnswer || "No answer"}</span><br/>
            Correct answer: <b>${res.correctAnswer}</b>
          </li>`
          )
          .join("")}
      </ol>`;
  resultBox.classList.remove("hidden");
  questionBox.textContent = "";
  optionsBox.innerHTML = "";
  feedbackBox.textContent = "";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  submitBtn.style.display = "none";
}

nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
submitBtn.addEventListener("click", submitExam);

trainTypeSelector.addEventListener("change", () => {
  const part = parseInt(partSelector.value);
  const type = trainTypeSelector.value;
  if (!isNaN(part)) {
    startTraining(part, type === "1");
  }
});
document.getElementById("start-exam-btn").addEventListener("click", startExam);

partSelector.addEventListener("change", () => {
  const part = parseInt(partSelector.value);
  const type = trainTypeSelector.value;
  if (!isNaN(part)) {
    startTraining(part, type === "1");
  }
});

loginBtn.addEventListener("click", () => {
  const password = passwordInput.value.trim();
  if (password === "admin123") {
    passwordGate.style.display = "none";
    appContainer.style.display = "block";

    const part = parseInt(partSelector.value);
    const type = trainTypeSelector.value;
    startTraining(part, type === "1");
  } else {
    alert("Wrong password");
  }
});
