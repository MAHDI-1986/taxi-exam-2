const BASE_QUESTIONS = [
  {
    question: "1 Hva er Formue skatt,Eiendom skatt . Inntertskatt ?",
    options: [
      "-Formuesskatt er skatt pa netto formue. Den skattlegger den totale verdien av. ulike formuesobjekter som fast eiendom, bankinnskudd, aksjer og naringskapital, etter at man har trukket fra det man har ay gjeld",
      "-Eiendomsskatt. er en kommunal skatt som kommuner kan vedta a innfore. Deter elendommens formuesverdi som legges til grunn ved formuesskattelegging av bolig- og fritidseiendommer.",
      "-Inntektsskatt er en form for Skatt hvor skatten fastsettes ut fra skattbar inntekt",
    ],
    correctAnswers: [0],
  },
  {
    question: "2 Fra hvilken dag er arbeidsgiver pliktig a betate sykepenger?",
    options: ["-Etter 16 dager", "-Fra forste dag", "-Fra tredje dag"],
    correctAnswers: [1],
  },
  {
    question: "3 Hva betyr solidarisk ansvar?",
    options: [
      "-To eller flere debitorer er ansvarlige for samme geld, og kreditor kan kreve hver og en av dem for hele gjelden",
      "-Ingen av medetere er anvsvarlig for gjeld",
      "-Intet ansvar",
    ],
    correctAnswers: [0],
  },
  {
    question: "3 Hva er riktig nar et kjoretoy benyttes som drosje.",
    options: [
      "-Skal ha taklykt med päskrift TAXI",
      "-Markers med lovenummer pa begge sider utvendig pa sidedor",
      "-Leyvenummer skal ha samme farge som kjoretoyet",
      "-Taksameter er frivillig dersom drosjen er utstyret med betalingsterminal",
    ],
    correctAnswers: [1],
  },
  {
    question: "4 Hva er riktig med en drosjebil?",
    options: [
      "-Bilen ma ha taksmeter",
      "﻿-Bilen ma ha godkjent kommunikasjonsutstyr",
      "-﻿Taklampe ma vare godkjent ay vegvesensdirektoratet",
      "-Forer av bilen má ha bevis pa dispensajonsrett",
    ],
    correctAnswers: [0],
  },
  {
    question: "5 Hvilken forskrift skal vare synlig for passas)er i billen?",
    options: [
      "-Bilens vognkort",
      "-Godkjent kommunikasjonsutstyr",
      "-Takst beregning",
      "-Forerens dispensajonsrett",
    ],
    correctAnswers: [2],
  },
  {
    question: "6 Hvor ofte skal bilens tilstand sjekkes?",
    options: [
      "-Kontrol skal utfores arlig",
      "-Kontrol skal utfores etter 2 ar",
      "-Kontrol skal utfores etter 4 ár",
    ],
    correctAnswers: [0],
  },
  {
    question: "7 Ava menes med at du ma ha okonomiske evne?",
    options: [
      "-Garanti fra bank eller forsikring",
      "-Drosie ma ha forsikring",
      "-Kr 30000 i bank konto",
    ],
    correctAnswers: [0],
  },
  {
    question: "8 Hvilken lov sikrer trygghet og sikkerhet av ansatte?",
    options: ["-Regnskapsloven", "-Arbeidsmiligloven", "-Yrketransportloven"],
    correctAnswers: [1],
  },
  {
    question: "9 Hva dekker ansvarforsikring?",
    options: [
      "-Drosje kan ikke ha ansvarforsikrin",
      "-Ansvarsforskring dekker skade pà din bil og motparts bil og eiendeler",
      "-Ansvarforsikring er akkurat som Del kasko forskring",
      "-Ansvarsforskring dekker skade pa motparts bil og etendeler",
    ],
    correctAnswers: [3],
  },
  {
    question: "10 Hivem har krav pa feriepenger?",
    options: ["-Arbeidsgiver", "-Tillitsvalgt", "-Arbeidtaker"],
    correctAnswers: [2],
  },
  {
    question: "11 Hvilken forsikring er lovpälagt for drosje?",
    options: [
      "-Bilglassforskring",
      "-Kaskoforskring",
      "-Del-kasko forskring",
      "-Ansvarsforskring / Trafikkforsikring",
    ],
    correctAnswers: [3],
  },
  {
    question: "12 Hvor kan du registrere enkeltperson foretak?",
    options: ["-Nav.no", "-Altinn.no", "-Vegvesen.no"],
    correctAnswers: [1],
  },
  {
    question: "13 Hvor kan du registrere enkeltperson foretak?",
    options: [
      "- Foretakregister, Brennoysund register, altinn",
      "-Statensvegyesen",
      "-NAV",
      "-Samferselsaetaten",
    ],
    correctAnswers: [1],
  },
  {
    question: "14 Hvem har ansvar for bruk av taksameter ?",
    options: [
      "-Eier",
      "-Justervesnet",
      "-Sjäforen, dersom leyvehaveren er en annen enn den som kjorer bilen",
      "- Sentral",
    ],
    correctAnswers: [2],
  },
  {
    question: "15 Nar skal du ta kontakt med justervesne ?",
    options: [
      "-Ved endring av dekkdimensjon som pa virker mäteresultatets i vesentlig grad",
      "-Nar du tar service pá bilen",
      "-Nar du fär problem med taksameter.",
    ],
    correctAnswers: [0],
  },
  {
    question: "16 Nar er det tillatt a ta i bruk et taksameter i kioretoyet?",
    options: [
      "-Nar tollvesenet har kontrollert og godkjent installasjonen, Samt aktuelle tilleggsinnretninger",
      "-Nar justervesent har kontrollert og godkjent installas jonen, Samt aktuelle",
      "tilleggsinnretninger.",
      "-När konkurransetilsynet har kontrollert o godkjent installasjonen, 0g nadvendige tilleggsinnretninger",
      "-När statens vegvesen har kontrollert og godkjent installasjonen, Og nodvendige tilleggsinnretninger.",
    ],
    correctAnswers: [2],
  },
  {
    question: "17 Hva er langsiktig gjeld?",
    options: [
      "-Tilbakebetale periode pá mindre enn ettàr",
      "-Tibakebetale periode pá over ettär",
      "-Tibakebetale periode fra 6 máneder til 1 máneder",
    ],
    correctAnswers: [1],
  },
  {
    question: "18 Hiva er riktig om loyvenummer pa en drosie?",
    options: [
      "-Nummeret skal vare i en kontrasterende farge",
      "-Du trenger ikke loyvenummer pá en drosje",
      "-Nummeret skal vare i samme farge som drosjen",
      "-Nummeret skal enten vare i svart eller hvit skrift",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "19 Hvilken forskrift skal oppbevares i drosjebilen og forvises pa oppfordring fra Passasjerene?",
    options: [
      "-Kunde kan kreve à sjekke forerkort",
      "-Kunde kan kreve a sjekke kompetanse dokumenter",
      "-Forskrift om takstberegning og maksimalpriser for loyvepliktig drosjetransport med motorvogn:",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "20 Hvilken forskrift skal oppbevares i drosjebilen og forvises pa oppfordring fra Passasjerene?",
    options: [
      "- Kunde kan kreve à sjekke forerkort",
      "-Kunde kan kreve à siekke kompetanise dokumenter",
      "-Forskrift om takstberegning og maksimalpriser for layvepliktig drosjetransport med motorvoon",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "21 Hvilken forskrift skal oppbevares i drosjebiten og forvises pa oppfordring fra Passasjerene?",
    options: [
      "-Kunde kan kreve a siekke forerkort",
      "-Kunde kan kreve à sjekke kompetanse dokumenter",
      "-Forskrift omn takstberegning og maksimalpriser for layvepliktig drosjetransport med motorvogn",
    ],
    correctAnswers: [2],
  },
  {
    question: "22 Hiva er regler for utbetaling av sykepenger. ansatte ?",
    options: [
      "-Arbeidsgiver er pliktig a betale full lenn de forste 3 dager i en sykeperiode",
      "-Arbeidsgiver er pliktig a betale full lonn fra forste dag tit og med 16 kalenderdager 1 en sykeperiode",
      "-Deter NAV som er sykepengeransvarlig | hele sykeperiode",
      "23Hva er inkludert i likviditetsbudjsert?",
      "-Det inngar intekter og kostnader",
      "-Planlagte innbetalinger og utbetalinger i en fremtidig periode, evnen tll à betale utaiftved forfall",
      "-Det viser eiendeler og gield",
      "24Hva er inkludert i likviditetsbudjsert?",
      "-Det inngar intekter og kostnader",
      "-Planlaeie innbetalinger og utetalinger i en fremtidig periode, eunen til à betale utgiftved forfall",
      "- Det viser eiendeler og gjeld",
    ],
    correctAnswers: [1, 6],
  },
  {
    question:
      "25 Hvilken forskrift skal oppbevares i drosjebiten og forvises pa oppfordring fra Passasjerene?",
    options: [
      "-Kunde kan kreve a sjekke forerkort",
      "-Kunde kan kreve à siekke kompetanse dokumenter",
      "-Forskrift om takstberegning og maksimalpriser for loyvepliktig drosjetransport med motorvogn",
    ],
    correctAnswers: [2],
  },
  {
    question: "26 Hva er et eksempel pa toveiskommunikasja?",
    options: [
      "-Nar to personer snakker med hverandre.",
      "-Nyhetene pá radioen",
      "- Nar du far en tekstmelding om at drosjen er pa vei",
      "-Nar du tekster noen men fär ikke svar",
      "-Nar du ster en ting, men mener noe helt annet",
    ],
    correctAnswers: [0],
  },
  {
    question: "26 •Hva er riktig om GPS?",
    options: [
      "-Den benyttes for à snakke med drosjesentralen",
      "-Den viser alltid den mest fornuftige ruten til en destinasjon",
      "-Den viser posisionen din 1 et digitalt kart i santid",
      "-Den regner ut hva prisen blir for en strekning",
    ],
    correctAnswers: [2],
  },
  {
    question: "27 Hiva er maks timer en ansatt kan jobbe pen dogn?",
    options: [
      "-Mä ikke overstige 14 timer inkludert overtid",
      "-En ansatt kan ikke jobbe mer en 8 timer",
      "-Ma ikke overstige 10 timer inkludert overtid",
      "-Má ikke overstige 17 timer inkludert overtid",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "28 Hiva er en av hovedhensiktene med kjøre og hviletidsbestemmelsene?",
    options: [
      "-Sorge for at transpoeten kommer raskere fram",
      "-Gi ulike konkurransevilkar som gir lavere transportkostnad",
      "-Forbedre trafikksikkerheten for alle trafikanter",
      "-Fordele transportoppdrag til land med mindre restriktivt lovverk",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "29 Du har fatt en plasstur med 5 personer men du har til 4 personer",
    options: [
      "- Hva skal du gjore?",
      "-﻿Jeg tar sjansen og kjorer dem -Jeg deler tur med en annen taxi og kjorer dem",
      "-Jeg bestiller en maxitaxi til kunde med nok plasser",
    ],
    correctAnswers: [2],
  },
  {
    question: "31 Hvor skal drosieturer loggfores?",
    options: [
      "-Dagen egenrapport",
      "-Satellite Kommunikasion GNSS",
      "-Passasjerns navn og adresse i egen rapport",
    ],
    correctAnswers: [1],
  },
  {
    question: "32 Hvor mange timer kan en ansatt jobbe I en",
    options: [
      "like?",
      "-37.5 timer i 5 dager",
      "-40 timer 17 dager",
      "-15 timer i3 dager",
    ],
    correctAnswers: [2],
  },
  {
    question: "33 Hva er godtgjorelse?",
    options: [
      "-Arbeldsgiver skal beregne skattetrekk av lonn og annet vederlag for uffart arbeid it bedriften",
      "-Godtgjorelse er avgifter, skatt eller andre forpliktelser som arbeidgiver betaler for sine ansatter",
      "-﻿Godtgjorelse er pengene du skal leve av när du ikke lenger mottar lenn.",
    ],
    correctAnswers: [0],
  },
  {
    question: "34 Hya skal en arbeidsgiver giore nar en ansat",
    options: [
      "skift?",
      "-Arbeidstaker skal ikke jobbe ulike tider pa dogn",
      "-Arbeidsgiver ma utarbeide arbeidsplan som skal vare tilgjengelig senest 2 uker fer den skal iverksettes.",
      "-Arbeidgiver er ikke pliktig a betale overtidstillegg om arbeidstaker overtiger 40 timer I uka ved skiftarbeid",
    ],
    correctAnswers: [2],
  },
  {
    question: "35 Hva er en arbeidsplan?",
    options: [
      "-Oversikt over total ansatte i en bedrift",
      "-Oversikt over nar arbeidet skal utfores",
      "-Oversikt over total drosiebiter 1 firma",
    ],
    correctAnswers: [1],
  },
  {
    question: "36 Hiva er akonomisk bilalder av en drosiebil?",
    options: [
      "-Garanti",
      "-Tilstand pá kjoretoy",
      "-Nar total forventet gjennomsnitlig kostnader pá ny bil er lavere enn gammet bit",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "37 Hivor lenge en drosiesiafor kan ta pause hals har en skift pa 8 timer?",
    options: [
      "-2 pause pa 10 minutter",
      "-20 minutter",
      "-﻿30 minutter -Trenger ikke pause fordi han har flere pauser mellom turer",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "38 Hiva er riktig om kravene til tilfredsstillends okono evne ved tildeling av drosjeloyve?",
    options: [
      "-Det skal innbetales en garantisum til layvemyndigheten",
      "-Det má opplyses om to private kausionister som garantister",
      "-Det ma fremlegges en garantierklering fra bank eller forsikringsselskap til leyvemyndigheten",
      "-Det skat framlegges dokumentasjon pa at kjoretoyet er betalt",
    ],
    correctAnswers: [2],
  },
  {
    question: "39 Oppsigelse ma blant annet innholde?",
    options: [
      "-Slutt dato og sted",
      "-Rett pà ferie og feriepenger",
      "-Lonn ferie og feriepenger",
    ],
    correctAnswers: [0],
  },
  {
    question: "40 Oppsigelse má blant annet innholde?",
    options: [
      "-Stutt dato og sted",
      "-Rett pa ferie og feriepenger",
      "-Lonn ferie og feriepenger",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "41 His du har en fast ansatt hva skal innholde arbeidskontrakten?",
    options: [
      "-Stutt dato",
      "-Tidspunktet for arbeidsforholdets begynnelse og slutt",
      "-De faglige krav som gjelder for stillingen.",
      "-Daglig og ukentlig arbeidstider",
    ],
    correctAnswers: [3],
  },
  {
    question: "42 Hvilke poster skal innga i beregning av ferispenger",
    options: [
      "-﻿Utbetalt kilometergodtgiorelse",
      "-﻿﻿Utbetalt vederlag som vikar i en begrenset tidsperiode",
      "-Utbetalt feriepenger",
      "-Utbetalt utlegg for bompenger.",
    ],
    correctAnswers: [1],
  },
  {
    question: "43 Hvordan kan en eier ta sykepengerved syks",
    options: [
      "-Eier har ikke krav pa sykepenger",
      "-Eler ma ha sykeforsikring gjennom NAV for à fä sykepenger",
      "-NAV kommer til a betale eter fra forste dagen han/hun blir sykemeldt",
    ],
    correctAnswers: [1],
  },
  {
    question: "44 Hva er riktig om sykepenger?",
    options: [
      "-Arbeidsgiver skal betale bare 16 dager og NAV skal betate utover dendle perioden -Arbeidsgiver er pliktig a betale utover arbeidsgiverperioden",
      "-NAV kommer til à betale ansatt fra forste dagen han/hun blir sykemeldt",
    ],
    correctAnswers: [0],
  },
  {
    question: "45 Hva er Kapitalkostnader?",
    options: ["-Finanskostnader", "-Variablekostnader", "-Fastekostnader"],
    correctAnswers: [0],
  },
  {
    question: "46 Hva er Kapitalkostnader?",
    options: [
      "-Finanskostnader /entekostnader",
      "-Variablekostnader",
      "-Fastekostnader",
    ],
    correctAnswers: [0],
  },
  {
    question: "47 Hva er Kapitalkostnader?",
    options: [
      "-Finanskostnader/entekostnader",
      "-Variablekostnader",
      "-Fastekostnader",
    ],
    correctAnswers: [0],
  },
  {
    question: "48 Hva er hoved ferieperiode?",
    options: [
      "-30 september til 31 desember",
      "-01 juni til 30 september",
      "-01 april til 31 mai",
    ],
    correctAnswers: [1],
  },
  {
    question: "49 Hiver mange virkedager kan en ansalt ta felle",
    options: ["-20", "-25", "-30", "-35"],
    correctAnswers: [1],
  },
  {
    question: "50 En vannlig drosje layve tildeles for?",
    options: ["-5 personer", "-9 personer", "-12 personer", "-20 personer"],
    correctAnswers: [1],
  },
  {
    question: "51 Hva er avskrivning?",
    options: ["-Renter og kostnader", "-Verdiforringelse", "-Lán pa bilen"],
    correctAnswers: [1],
  },
  {
    question:
      "52 Hvor mange sitteplasser kan du ha i bilen, forerkort klasse. B?",
    options: [
      "-8 passasjerplasser og én forerplass",
      "-7 passasierplasser og en forerplass",
      "-9 passasjerplasser og én forerplass",
      "-10 passasjerplasser og én forerplass",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "53 Hva skal vaere synlig fra passasjerplass? Oppgaver, kan he flere rette svar.",
    options: [
      "-Siäforens sertifikat",
      "-Lovenummer",
      "-GPS som viser bilens posisjon",
      "-Kjoreseddel",
      "-Vrkesjäfor bevis",
    ],
    correctAnswers: [1, 3],
  },
  {
    question: "54 Ten aksjeselskap er aksjonaer ansvarlig for?",
    options: [
      "-Ubegrenset",
      "-Aksiekapitalen_ / Aksjeinnskudd",
      "-60000",
      "-100000",
    ],
    correctAnswers: [1],
  },
  {
    question: "55 Hvor skal du sette forskuddstrekk?",
    options: [
      "- Forskuddtrekk er forskudd pa skatt som eier má betalei lopet av áret",
      "-Settes inn i skattetrekkskonto t banken senest forste virkedag etter lonhsutbetaling",
      "-Forkuddtrekk skal betales direkte til staten",
    ],
    correctAnswers: [1],
  },
  {
    question: "56 For hem gjelder bestemmelsen om plikumessig avhold?",
    options: [
      "-For buss- og taxisiaforer, men ike for lastebilsiäforer.",
      "-Alle som er vrkesiaforer og kierer personer eller gods",
      "-Kun for dem som befordrer personer.",
      "-Loven gielder for alle forere",
    ],
    correctAnswers: [1],
  },
  {
    question: "57 Hva er riktig om Moral ?",
    options: [
      "-Moral er de verdiene og holdingene som avgjor hva som er rett og galt eller godt og darlig",
      "-Moral har ingen betydning ivär samfunn",
      "-Moral betyr à spare penger",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "58 Din sjäfor har hatt en inntekt pa 280000 inkludert 12% merverdiavgift Hva blir merverdiavgif ?",
    options: ["-33600", "-18000", "-30000"],
    correctAnswers: [2],
  },
  {
    question:
      "59 Din siäfor har hatt en inntekt pa 318000 in 6% merverdiavgift. Hva blir merverdiavgift?",
    options: ["-19080", "-18000", "-17500"],
    correctAnswers: [1],
  },
  {
    question:
      "60 Du har en personlig aksjeselskap, hva skj@ med d aksjekapital hvis du har mindre inntekt?",
    options: [
      "-Aksiekapital kommer til a oke",
      "-Verdi pa aksjekapital kommer til á synke",
      "-Den har ingen effekt",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "61 Hva er riktig om arbeidsgivers rett til à siopp arbeidstakeren som vert sykmeldt i seks maneder?",
    options: [
      "-Arbeidstakere kan sies opp dersom fravzeret er pà grunn av uskkehater sykdom",
      "-Arbeidstakeren er pliktig a levere oppsigelse ved alvorlig sykdom",
      "-Arbeidstakeren kan stes opp. i perioden arbeidsgiveren betater sykepenger (de forst 16 dagene)",
      "-Arbeidstakere som er borte fra arbeidet pa grunn av ulykke eller sykdom kan ikke sie opp av denne grunn",
    ],
    correctAnswers: [3],
  },
  {
    question: "62 Hva betyr kassekreditt? Hvor kan det brukes",
    options: [
      "-Betale skatt og avgift",
      "-Betale langsiktig lan",
      "-Betale gjeld",
      "-Bedriften har ett bevilget belop innenfor en laneramme til finansiering av drifte",
    ],
    correctAnswers: [3],
  },
  {
    question: "63 Hva er en insolvent firma?",
    options: [
      "-Nar firma er i underskudd",
      "-Nar firma er i overskudd",
      "-Firma ikke er i stand til à giore opp sine okonomiske forpliktelser ved forfall, og at det heller ikke er efendeler i virksomheten til a dekke gjelden",
    ],
    correctAnswers: [2],
  },
  {
    question: "64 Fra hvilken dag er arbeidsgiver pliktig à betale sykepenger?",
    options: ["-Etter 16 dager", "-Fra forste dag", "-Fra tredie dag"],
    correctAnswers: [1],
  },
  {
    question: "65 Hva betyr solidarisk ansvar?",
    options: [
      "-To eller flere debitorer er ansvarlige for samme gjeld, og kreditor kan kreve her og en av dem for -hele gielden Ingen av medeiere er anvsvarlig for gjeld",
      "-Intet ansvar",
    ],
    correctAnswers: [0],
  },
  {
    question: "66  Hva er riktig nar et kjoretoy benttes som drosta?",
    options: [
      "-Skal ha taklykt med päskrift TAXI",
      "-Markers med loyvenummer pá begge sider utvendig pà sidedor",
      "-Lowenummer skal ha samme farge som kjoretoyet",
      "-Taksameter er frivillig dersom drosjen er utstyret med betalingsterminat",
    ],
    correctAnswers: [1],
  },
  {
    question: "67 Hva er riktig med en drosjebil?",
    options: [
      "-Bilen mä ha taksmeter -Bilen ma ha godkjent kommunikasjonsutstyr -Taklampe má vare godkjent av vegvesensdirektoratet",
      "-Forer av bilen má ha bevis pá dispensajonsrett",
    ],
    correctAnswers: [0],
  },
  {
    question: "68 Ava er riktig med en drosjebil?",
    options: [
      "-Bilen má ha taksmeter",
      "-Bilen má ha godkjent kommunikasionsutstyr",
      "-Taklampe ma vare godkjent av vegvesensdirektoratet",
    ],
    correctAnswers: [0],
  },
  {
    question: "69 Hvilken forskrift skal vare synlig for passas er i biler",
    options: [
      "-Bilens vognkort.",
      "-Godkient kommunikasjonsutstyr",
      "-Takst beregning",
      "-Forerens dispensajonsrett",
    ],
    correctAnswers: [2],
  },
  {
    question: "70 Hvilken forskrift skal vaere synlig for passasjer i bile",
    options: [
      "-Bilens vognkort",
      "-Godkjent kommunikasjonsutstyr",
      "-Takst beregning.",
      "-Forerens dispensajonsrett",
    ],
    correctAnswers: [2],
  },
  {
    question: "71 Hvor ofte skal bilens tilstand sjekkes?",
    options: [
      "-Kontrol skal utfores ärlig",
      "-Kontrol skal utfores etter 2 är",
      "-Kontrol skal utfores etter 4 är",
    ],
    correctAnswers: [0],
  },
  {
    question: "72 Hva menes med at du ma ha okonomiske eve?",
    options: [
      "-Garanti fra bank eller forsikring",
      "-Drosie má ha forsikring",
      "-Kr 30000 i bank konto",
    ],
    correctAnswers: [0],
  },
  {
    question: "73 Hvilken lov sikrer trygghet og sikkerhet av a",
    options: ["-Regnskapsloven", "-Arbeidsmiljoloven", "-Yrketransportloven"],
    correctAnswers: [1],
  },
  {
    question: "74 Hva dekker ansvarforsikring?",
    options: [
      "-Drosie kan ikke ha ansvarforsikrin",
      "-Ansvarsforskring dekker skade pa din bil og motparts bil og eiendeler",
      "-Ansvarforsikring er akkurat som Del-kasko forskring",
      "-Ansvarsforskring dekker skade pa motparts bil og eiendeler",
    ],
    correctAnswers: [3],
  },
  {
    question: "75 Hem har krav pa feriepenger?",
    options: ["-Arbeidsgiver", "-Tillitsvalgt", "-Arbeidtaker"],
    correctAnswers: [2],
  },
  {
    question: "76 Hvilken forsikring er lovpälagt for drosje?",
    options: [
      "-Bilglassforskring",
      "-Kaskoforskring",
      "-Del-kasko forskring",
      "-Ansvarsforskring / Trafikkforsikring.",
    ],
    correctAnswers: [3],
  },
  {
    question: "77 Hvor kan du registrere enkeltperson foreta?",
    options: [
      "-Foretakregister, Bronnaysund register, altinn",
      "-Statensvegvesen",
      "-NAV",
      "-Samferselsaetaten",
    ],
    correctAnswers: [0],
  },
  {
    question: "78 Hem har ansvar for bruk av taksamete.",
    options: [
      "- Eier",
      "-Justervesnet",
      "-Sjäforen, dersom loyvehaveren er en annen enn den som kforer bilen",
      "-﻿Sentral",
    ],
    correctAnswers: [2],
  },
  {
    question: "79 Nar er det tillatt & ta i bruk et taksameter kjoretoyet?",
    options: [
      "-﻿﻿Nar tollvesenet har kontrollert og godkjent installasjonen, Samt aktuelle tilleggsinnretninger -Nar justervesent har kontrollert o godkient installasionen. Samt aktuelle tilleggsinnretninger",
      "-  Nár konkurransetilsynet har kontrollert o godkjent installasjonen, Og nadvendige tilleggsinnretninger -Nar statens vegvesen har kontrollert og godkjent installasjonen, Og nadvendige tilleggsinnretninger",
    ],
    correctAnswers: [0],
  },
  {
    question: "80 Ha er riktig om loyvenummer pà en diosie?",
    options: [
      "-Nummeret skal vare i en kontrasterende farge",
      "-Du trenger ikke loyvenummer pa en drosie",
      "-Nummeret skal veere i samme farge som drosien",
      "-Nummeret skal enten vare i svart eller hit skrift",
    ],
    correctAnswers: [0],
  },
  {
    question: "81 Ha er inkludert i likviditetsbudisert?",
    options: [
      "-Det inngär intekter og kostnader -Planlagte innbetalinger og utbetalinger i en fremtidig periode, evnen til a betale utgift ved forfall.R",
      "-﻿﻿Det viser eiendeler og gjeld",
    ],
    correctAnswers: [],
  },
  {
    question: "82 Hva er langsiktig gjeld ?",
    options: [
      "-Tilbakebetale periode pá mindre en ettár",
      "-Tilbakebetale periode pá over ettár",
      "-Tilbakebetale periode fra 6 maneder til 1 máneder",
    ],
    correctAnswers: [1],
  },
  {
    question: "83 Hva er regler for utbetaling av sykepenger i ansatte?",
    options: [
      "-Arbeidsgiver er pliktig à betale full lonn de forste 3 dager i en sykeperiode",
      "-Arbeidsgiver er pliktig à betale full lann fra forste dag til og med 16 kalenderdager i en sykeperiode",
      "-Det er NAV som er sykepengeransvarlig i hele sykeperiode",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "84 Hva er en av hovedhensiktene med kiore- og hviletidsbestemmelsene?",
    options: [
      "-Sorge for at transpoeten kommer raskere fram",
      "-Gi like konkurransevilkar som gir lavere transportkostnad",
      "- Forbedre trafikksikkerheten for alle trafikanter",
      "R",
      "-Fordele transportoppdrag til land med mindre restriktivt lowverk",
    ],
    correctAnswers: [],
  },
  {
    question: "85 Hva er maks timer en ansatt kan jobbe pen dogs",
    options: [
      "-Mä ikke overstige 14 timer inkludert overtid",
      "-En ansatt kan ikke jobbe mer en 8 timer",
      "- Ma ikke overstige 10 timer inkludert overtid",
      "-Ma ikke overstige 17 timer inkludert overtid",
    ],
    correctAnswers: [0],
  },
  {
    question: "86 Hva er riktig om GPS?",
    options: [
      "-Den benvttes for à snakke med drosjesentralen",
      "- Den viser alltid den mest fornuftige ruten til en destinasion",
      "-Den viser posisionen din i et digital kart i sanntid",
      "-Den regner ut hva prisen blir for en strekning",
    ],
    correctAnswers: [2],
  },
  {
    question: "87 Hva er et eksempel pá toveiskommunikasjor",
    options: [
      "- Nar to personer snakker med hverandre",
      "-Nyhetene pá radioen",
      "-När du fär en tekstmelding om at drosjen er pá vei",
      "-När du tekster noen men fär ikke svar",
      "-Nár du sier en ting, men mener noe helt annet",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "88 Du har fätt en plasstur med 5 personer men til 4 personer. Hva skal du gjore?",
    options: [
      "-Jeg tar siansen og kiorer dem",
      "-Jeg deler tur med en annen taxi og kjorer dem",
      "-Jeg bestiller en maxitaxi til kunde med nok plasser",
    ],
    correctAnswers: [2],
  },
  {
    question: "89 Oppsigelse ma blant annet innholde?",
    options: [
      "-Slutt dato og sted",
      "-Rett pá ferie og feriepenger",
      "- Lonn ferie og feriepenger",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "90 His du har en fast ansatt hva skal innholde arbeidskontrakten?",
    options: [
      "-Slutt dato",
      "-Tidspunktet for arbeidsforholdets begynnelse og slutt",
      "-De faglige kray som gjelder for stillingen.",
      "-Daglig og ukentlig arbeidstider",
    ],
    correctAnswers: [3],
  },
  {
    question: "91 Hvilke poster skal inngä i beregning av ferieperge",
    options: [
      "- Utbetalt kilometergodtgjorelse",
      "-Utbetalt vederlag som vikar i en begrenset tidsperiode",
      "-Utbetalt feriepenger",
      "-Utbetalt utlegg for bompenger.",
    ],
    correctAnswers: [1],
  },
  {
    question: "92 Hordan kan en eier ta sykepenger ved sykcom",
    options: [
      "- Eier har ikke krav pa sykepenger",
      "-Eier ma ha sykeforsikring gjennom NAV for à fä sykepenger",
      "-NAV kommer til à betale eier fra forste dagen han/hun blir sykemeldt",
    ],
    correctAnswers: [1],
  },
  {
    question: "93 Hva er riktig om sykepenger?",
    options: [
      "-Arbeidsgiver skal betale bare 16 dager og NAV skal betale utover denne perioden",
      "-Arbeidsgiver er pliktig á betale utover arbeidsgiverperioden",
      "-NAV kommer til a betale ansatt fra forste dagen han/hun blir sykemeldt",
    ],
    correctAnswers: [0],
  },
  {
    question: "94 Hva er Kapitalkostnader?",
    options: ["-Finanskostnader", "-Variablekostnader", "-Fastekostnader"],
    correctAnswers: [0],
  },
  {
    question: "95 Hva er hoved ferieperiode?",
    options: [
      "-﻿30 september til 31 desember",
      "-﻿01 juni til 30 september -01 april til 31 mai",
    ],
    correctAnswers: [1],
  },
  {
    question: "96 Hvor mange virkedager kan en ansatt ta fale?",
    options: ["-20", "-25", "-30", "-35"],
    correctAnswers: [1],
  },
  {
    question: "97 En vannlig drosie love tildeles for?",
    options: ["-5 personer", "-9 personer", "-12 personer", "-20 personer"],
    correctAnswers: [1],
  },
  {
    question: "98 Hva er avskrivning?",
    options: ["-Renter og kostnader", "-Verdiforringelse", "-Lan pà bilen"],
    correctAnswers: [1],
  },
  {
    question:
      "99 Hvor mange sitteplasser kan du ha i bilen, bar du b farerkert klasse B?",
    options: [
      "-8 passasjerplasser og én forerplass",
      "-7 passasjerplasser og n forerplass",
      "-9 passasierplasser og én forerplass",
      "-10 passasjerplasser og én forerplass.",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "100 Hem er ansvarlig hvis passajer har glemt handbagasje i bilen?",
    options: ["-Passasier selv", "- Sjäfor", "-Ingen"],
    correctAnswers: [1],
  },
  {
    question: "101 När kan en arbeidsgiver bruke avskjend?",
    options: [
      "-Avskjedd kan brukes his arbeidsgiver er ikke forneyd med arbeidstaker",
      "-Arbeidsgiver kan avskjedige en arbeidstaker med päbud om oveblikkelig fratreden dersom denne har giort en grovt pliktbrudd av arbeidavtale",
      "-Avskjedd er ikke lov folge arbeidmiljaloven",
      "-Ansatt kommer ikke pá riktig tid",
      "-Ansatt har kranglet",
      "-Arbeidseiver har bevis pa at ansatt har snakket hatefull med en kunde",
    ],
    correctAnswers: [1, 5],
  },
  {
    question: "102 Hva er riktig hvis arbeidstaker oversti timer i en uke?",
    options: [
      "-Folge arbeidsmiljoloven arbeidsgiver er pliktig a betale godtgjarelse for overtid som skat vaere 40 % ekstra i tillegg til vanlig lonn.",
      "-Arbeidstaker kan jobbe overtid uten à kreve tillegg for det",
      "-Det er ikke lov à jobbe over 40 timer i en uke",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "103 Hva kan tilkobles med taksameter? Oppoa kan ha flere rette svar",
    options: [
      "-Takskilt",
      "-Audioanlegg",
      "-Mobil",
      "-kommunikasionsenhet for overforing av data",
      "-Tachograf",
      "-Betalingsterminal",
    ],
    correctAnswers: [0, 5],
  },
  {
    question: "104 Hva er etterskudd skatt?",
    options: [
      "-Etterkuddskatt er skatt som en taxieier betaler etter bergning av inntekt. og kostnader",
      "- Etterskuddskatt er for aksjeselskap, skatt beregnes av ligningsmyndighetene forst etter àrets er omme",
      "-Etterskuddskatt betyr trekki lenn av en sjäfer",
    ],
    correctAnswers: [1],
  },
  {
    question: "105 Hva er forskuddskatt?",
    options: [
      "-Forskuddskatt er skatt som en taxieier betaler etter bergning av inntekt og kostnader",
      "-Forskuddskatt beregnes av ligningsmyndighetene for árets begynnelse pá bakgrunn av tidligere ars inntekt og formue",
      "-Forskuddskatt betvr trekk i lonn av en siäfor",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "106 Hem er ansvarlig hvis passajer har glemt handbagasje i bilen?",
    options: ["-Passasier selv", "-Sjäfor", "-Ingen"],
    correctAnswers: [1],
  },
  {
    question:
      "107 Avskjedd kan brukes his arbeidsgiver er ikke forneyd med arbeidstaker",
    options: [
      "-Arbeidsgiver kan avskjedige en arbeidstaker med päbud om oveblikkelig fratreden dersom denne har giort en grovt pliktbrudd av arbeidavtale",
      "-Avskjedd er ikke lov folge arbeidmiljaloven",
      "-Ansatt kommer ikke pá riktig tid",
      "-Ansatt har kranglet",
      "-Arbeidseiver har bevis pa at ansatt har snakket hatefull med en kunde",
    ],
    correctAnswers: [0, 4],
  },
  {
    question: "108 Hva er riktig hvis arbeidstaker oversti timer i en uke?",
    options: [
      "-Folge arbeidsmiljoloven arbeidsgiver er pliktig a betale godtgjarelse for overtid som skat vaere 40 % ekstra i tillegg til vanlig lonn.",
      "R",
      "-Arbeidstaker kan jobbe overtid uten à kreve tillegg for det",
      "-Det er ikke lov à jobbe over 40 timer i en uke",
    ],
    correctAnswers: [],
  },
  {
    question:
      "109 Hva er riktig om overväkning? Oppgaven kan he flere rette svar.",
    options: [
      "-Start- og sluttsted for hver betalte tur skal loggfores",
      "-Posisionen til drosien blir overvaket og loggfort",
      "- Posisionsloggen skal lagres i 60 dager",
      "-Som siäfor kan du nekte en hver form for overväkning",
    ],
    correctAnswers: [0, 1, 2],
  },
  {
    question: "110 Hem bestemmer ferietid?",
    options: ["-Tillitvalgte", "-Arbeidstaker", "-Arbeidsgiver"],
    correctAnswers: [2],
  },
  {
    question: "111 Hva betyr oppfolgingsplan?",
    options: [
      "-Oppfolgingsplanen betyr à flolge opp ansatt om han/hun er virkelig syk",
      "-Oppfolgingsplanen inneholde en vurdering av den ansattes arbeidsoppgaver og mulighet til à utfore dem",
      "-Oppfolgingsplanen helper ansatt à finne en ny jobb i jobbmarkedet",
    ],
    correctAnswers: [1],
  },
  {
    question: "112 Hilken krav er det for tildeling av drosjelovve?",
    options: [
      "-Du má ha ansienitet pá over 2 ár",
      "-Helseattest pá god helse",
      "-Ha god vandel , fast og varig virksomhet i Norge i tillegg til tilfredsstillende okonomisk",
      "evne",
    ],
    correctAnswers: [3],
  },
  {
    question: "113 Ha er riktig om enkeltpersonforetak?",
    options: [
      "-Du har kun ansvar for din egenkapital",
      "-Driver du selvstendig naeringsvirksomhet med enkeltpersonforetak betyr det ogsa at du har et ubegrenset ansvar",
      "-Eier av enkeltperson foretak er ikke ansvarlig for gjeld i firma",
    ],
    correctAnswers: [1],
  },
  {
    question: "114 Hva slags krav/vilkär stilles for Faglig dyktigher",
    options: [
      "-Dokumentasjon for à ha bestätt praksis og nodvendig eksamen",
      "- Dokumentasjon for à ha bestätt skriftlig kurs pa internet",
      "-Dokumentasjon for à ha bestätt muntlig eksammen",
    ],
    correctAnswers: [0],
  },
  {
    question: "115 Hva er selskap ANS?",
    options: [
      "-Deter et vanlig aksjelselskap",
      "-Aksjelselskap med en eller flere eiere som er ansvarlige for gjeld",
      "-Aksjelselskap med 2 eller flere eiere som er ansvarlige for gield",
    ],
    correctAnswers: [2],
  },
  {
    question: "116 Hva er selskap ANS?",
    options: [
      "-Det er et vanlig aksjelselskap",
      "-Aksjelselskap med en eller flere eiere som er ansvarlige for gield",
      "-Aksielselskap med 2 eller flere eiere som er ansvarlige for gjeld",
    ],
    correctAnswers: [2],
  },
  {
    question: "117 En kunde har glemt PC i drosje. Hva e",
    options: [
      "-Du kan bare beholde PC",
      "-Du kan gi den som gave til en venn",
      "-Du ma prove à levere den tilbake men hvis du ikke finner kunden da má du levere den tit hittegoods kontor hos Politi",
      "- Du kan bare kaste den",
    ],
    correctAnswers: [2],
  },
  {
    question: "118 Hva er riktig om bruk av mobiltelefon.",
    options: [
      "ares",
      "-Bruk av mobiltelefon er forbudt i drosie",
      "-Det er bare passasier som kan bruke mobiltelefon.",
      "-Siäfor kan kun bruke mobiltelefon for á se tekst melding",
      "-Mobil kan brukes his siäfor har handsfri / bluetooth i bilen",
    ],
    correctAnswers: [4],
  },
  {
    question: "119 Hva er konsekevenser for à ikke betal. arbeidgiveravgift?",
    options: [
      "-En taxieier kan selv bestemme om han onsker a betale arbeidsgiveravgift",
      "-Tvanginnkreving av okonomiske bot.",
      "-En taxieir ma betale arbeidgiveravgift selv om har ansatter eller ikke.",
    ],
    correctAnswers: [1],
  },
  {
    question: "120 Ha er ansettelesekontrakt ?",
    options: [
      "-Arbeidskontrakt",
      "-Dette er leiekontrakt av en bil mellom eier og sjäfor",
      "-Ansattelsekontrakt er kontrakt for en frivillig job",
      "121 Hvorfor kalles det for variable kostnad",
      "•Fordi vi kan ikke sette den inn i budsjett",
      "Variable kostnader henger sammen med kilometer",
      "Variable kostnader heter ogsa faste kostnader",
    ],
    correctAnswers: [0],
  },
  {
    question: "122 Hva stär OTP for?",
    options: [
      "-Original tjeneste penger",
      "-Obligatorisk tjeneste pensjon",
      "-Olav Thomas Petter",
    ],
    correctAnswers: [1],
  },
  {
    question: "123 Hva er et regnskap?",
    options: [
      "-Regnskap viser inntekter og kostnader",
      "-Gjeld og egenkapital",
      "Regnskap er investering som et firma har giort I ett är",
    ],
    correctAnswers: [0],
  },
  {
    question: "124 Hva betyr egenmelding?",
    options: [
      "-Det er ikke rett pa egenmelding hvis du ikke har jobbet 2 mäneder hos arbeidsgiver",
      "-Du kan bruke egenmelding opp til 3 dager med lonn",
      "-Du kan bruke egenmelding uten lonn",
      "-Deter viktig à levere sykemelding for á bruke egenmelding",
      "-Din arbeidsgiver kan ikke kreve sykemelding hvis du er borte mer enn 3 dager",
    ],
    correctAnswers: [0, 1],
  },
  {
    question:
      "125 Hvilken loyvetype skal du registere den som bilen har mer enn 9 bilseter?",
    options: ["-Drosielove", "-Godstransport", "-Turvogn", "-Handikapplayve"],
    correctAnswers: [2],
  },
  {
    question: "126 Hva er pliktmessig avhold?",
    options: [
      "-Ikke lov til a drikke alkohol",
      "-Det er ikke lov à drikke alkohol mindre enn 8 timer for man skal kjare",
      "-Det er ikke lov a drikke alkohol mindre enn 8 timer etter kjoring",
      "-Pliktmaessig avhold betyr à ta pause etter 4.5 timer kjoring",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "127  Hvilken loyvetype skal du registere den som bilen har mer enn 9 bilseter?",
    options: ["- Drosielove", "-Godstransport", "-Turvogn", "-Handikapplayve"],
    correctAnswers: [2],
  },
  {
    question:
      "128 Du har investert kr 400000 i en bil for ¿ blir rest verdi pà bilen?",
    options: ["- Kr0", "-Kr40000", "-Kr 50000", "-Kr 100000"],
    correctAnswers: [2],
  },
  {
    question: "129 Hva betyr egenmelding?",
    options: [
      "* ﻿﻿Deter ikke rett pa egenmelding hvis du ikke har jobbet 2 mäneder hos arbeidsgiver",
      "* ﻿﻿Du kan bruke egenmelding opp til 3 dager med lonn",
      "* ﻿﻿Du kan bruke egenmelding uten lonn",
      "* ﻿﻿Det er viktig & levere sykemelding for a bruke egenmelding",
      "* ﻿﻿Din arbeidsgiver kan ikke kreve sykemelding his du er borte mer enn 3 dager",
    ],
    correctAnswers: [0, 1],
  },
  {
    question: "130 Hva er inntekt og kostnader?",
    options: [
      "-Inntekt er alt du tjener inn mens kostnader er alt du betaler",
      "-Inntekt er eindeler du eier og kostnader er alt jeld du har",
      "-Inntekt er det som gar ut av firma mens kostnad er det som kommer inn i firma",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "131 Den eller de som ensker a etablere et aksjeselskap, mà stille til rädighet en aksjekapital pä?",
    options: [
      "* ﻿﻿kr. 30.000",
      "* ﻿﻿kr. 100.000",
      "* ﻿﻿kr. 500.000",
      "* kr. 70.000",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "132 Hvor stor sum er den enkelt aksjonaer okonomisk ansvarlig for i et aksjeselskap?",
    options: [
      "-Solidar ansvar",
      "-Etableringskapital/ aksjeinnskudd /innskudd egenkapital",
      "-Intet ansvar",
    ],
    correctAnswers: [1],
  },
  {
    question: "132 Hva er kalkulatorisk kostnader?",
    options: [
      "-Direkte kostnader",
      "-Faktura",
      "-Beregnes pa slutten av aret (enter og avskrivning )",
      "-Betales pa slutten av äret",
    ],
    correctAnswers: [2],
  },
  {
    question: "133 Hva er riktig om enerett?",
    options: [
      "-﻿Ordningen med enerett ble avskaffet 1. november 2020",
      "-Deter opp til her enkelt kommune à bestemme om det skal vare enerett for drosjevirksomhet i kommunen",
      "-Enerett omfatter ogsa kontraktskjoringen i en kommune",
      "-Fylkeskommunen kan tildele eneretter i enkelte kommuner eller oräder med fa innbyggere nemelig under 20000 innbysere eller mindre enn 80 innbysere per kvadret meter",
    ],
    correctAnswers: [3],
  },
  {
    question: "134  Hivilken ansvar har deltakere i selskapform DA?",
    options: [
      "- kr. 100.000",
      "-kr. 600.000",
      "-Selskap eies av to personer eller flere med ubegrenset ansvar",
      "-Ansvarlig for egenandel pä kr 30000",
    ],
    correctAnswers: [2],
  },
  {
    question: "135 Hva er eksemple pä direkte skatt?",
    options: [
      "-Merverdiagift",
      "-Bomagift",
      "-Arsavgift pa motorvogn",
      "-Trygdeavgift og Toppskatt",
      "-Inntektskatt",
    ],
    correctAnswers: [3, 4],
  },
  {
    question: "136 Hva er Leasing?",
    options: [
      "-Leasing er ikke lov i taxinaring",
      "-A lease bil er akkurat som à kjope en bil",
      "-Leasing betyr at lanegiver er eier i driftsmidler",
      "-Husleie",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "137 Hvor lenge har en ansatt vart i arbeid for a t 2 maneder oppsigelsetid ?",
    options: ["-Ett ar", "-är", "-5àr-10 ar"],
    correctAnswers: [2],
  },
  {
    question: "138  Hva er arbeidsgiveravgift?",
    options: [
      "-ArbeidsgiveDet er avgift som bedrift betaler for lonnsmottakere ansatte",
      "-Deter skatt som arbeidsr betaler for lonnsmottakere ansatte",
      "-Skattetrekk",
      "-Det heter ogsä OTP",
    ],
    correctAnswers: [0],
  },
  {
    question: "139 Hva er de storste kostnadene pa en taxibil?",
    options: [
      "-Drifstoffkostnader",
      "-Forsikring",
      "-Verdiforringelse/ verditap pa bilen",
      "-Rentekostnader pä billän",
    ],
    correctAnswers: [2],
  },
  {
    question: "140 Hva er de storste kostnadene av en bedrift?",
    options: [
      "-Driftkostnader",
      "-Forsikring",
      "-Verdiforringelse",
      "-Rentekostnader pa billän",
    ],
    correctAnswers: [0],
  },
  {
    question: "141 Ha er inngäende merverdiavgift?",
    options: [
      "-Kjop av kjoretoy",
      "-Forskudd skatt",
      "-Mva pä Kjop av driftsmidler",
    ],
    correctAnswers: [2],
  },
  {
    question: "142 Hva er merverdiavgifts oppgjor?",
    options: [
      "-Utedende mva minus (trekkes fra) inngäende mva",
      "-Inngäende mva minus utgiende mva",
      "-Direkte skatt minus Indirekte skat",
      "-Utgäende mva pluss inngäende mva",
    ],
    correctAnswers: [0],
  },
  {
    question: "143 Hem dekker hvis din ansatt blir skadet pä jobb?",
    options: [
      "-Arbeidsgiver",
      "-Yrkeskadetforsikring",
      "-Nav",
      "-Trygdekontor",
    ],
    correctAnswers: [1],
  },
  {
    question: "144 Hva er resultat budsjett ?",
    options: [
      "Inntekt minus kostnader",
      "Forventet Inntekt minus forventet kostnader ( I fremtiden )",
      "Forskuddskatt minus etterskatt",
      "Inntekt plus kostnader",
    ],
    correctAnswers: [1],
  },
  {
    question: "145 Hvor lenge skal du beholde billag for bokfering ?",
    options: [
      "-Regnskapsmateriale og bilagsdokumentasjon skal oppbevares i Norge i fem är etter regnskapsärets slutt",
      "-Regnskapsmateriale skal oppbevares i Norge i ett &r etter regnskapsärets slutt og, skattemeldingen er innsendt og skatteoppsjoret er foretatt",
      "-Regnskapsmateriale anbefales oppbevart i tre ar dersom det foreligger ubetalte regninger",
      "-Regnskapsmateriale skal oppbevares i Norge i tiär etter regnskapsärets slutt",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "146 Du har en ny bil. Ett r senere selger du den som bruktbil. Hva er prisen i henhold til prisliste?",
    options: ["-75%", "-65%", "-55%", "-45%"],
    correctAnswers: [0],
  },
  {
    question: "147 Nar kan du oke pris pa en tur?",
    options: [
      "-Nar det er 4 personer i bilen",
      "-Nar det er behov for barnesete",
      "-Rullestol",
    ],
    correctAnswers: [2],
  },
  {
    question: "148 När kan en ansatte gi oppsigelse?",
    options: [
      "-En ansatt kan si opp nar hans helse er i fare",
      "-Eier kan bare si opp nar som helst",
      "-Eier kan si opp med 30 dager oppsigelse tid uten grunn",
    ],
    correctAnswers: [0],
  },
  {
    question: "149 Hva er regel for levering av oppsigelse?",
    options: [
      "-Muntlig",
      "-Pa telefon",
      "-Oppsigelsen skal leveres personlig eller sendes rekommandert",
      "-Oppsigelsen skal sendes enten per brev, eller som -post til arbeidstakerens",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "150 Hvor lenge skal arbeidsgiver vente hvis en ansatt blir sykemeldt over 6 maneder ?",
    options: [
      "-Arbeidsgiver kan si opp arbeidstaker etter 6 maneder",
      "-Arbeidsgiver kan si opp arbeidstaker etter 9 maneder",
      "-Arbeidsgiver kan ikke si opp arbeidstaker pä grunn av sykemelding",
      "-Arbeidsgiver ma vente minst 12 maneder",
    ],
    correctAnswers: [3],
  },
  {
    question: "160 Hvor ofte gjennomfores HMS?",
    options: [
      "-Kontinuerlig",
      "-En gang hver 6. maned",
      "-En gang i aret",
      "-Hver maned",
    ],
    correctAnswers: [0],
  },
  {
    question: "161 Hvor lenge er enerett tildelt om gangen ?",
    options: [
      "-Eneretten kan tildeles for maksimalt 5 är",
      "- Eneretten kan tildeles for maksimalt 10 är",
      "-Eneretten kan tildeles for maksimalt 3 r",
      "-Eneretten kan tildeles for ubegrenset tid",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "162 Hvilken loyvetype skal du registere densom bilen har mer enn 9 bilseter?",
    options: ["-Drosjeloyve", "-Godstransport", "-Turvogn", "-Handikapployve"],
    correctAnswers: [2],
  },
  {
    question: "163 Hva betyr egenmelding?",
    options: [
      "-Deter ikke rett pa egenmelding hvis du ikke har jobbet 2 mäneder hos arbeidsgiver",
      "-Du kan bruke egenmelding opp til 3 dager med lonn",
      "-Du kan bruke egenmelding uten lonn",
      "-Deter viktig a levere sykemelding for a bruke egenmelding",
      "-Din arbeidsgiver kan ikke kreve sykemelding his du er borte mer enn 3 dager",
    ],
    correctAnswers: [0, 1],
  },
  {
    question: "164 Hva star OTP for?",
    options: [
      "-Original tjeneste penger",
      "-Obligatorisk tjeneste pensjon",
      "-Olav Thomas Petter",
    ],
    correctAnswers: [1],
  },
  {
    question: "165 Hva er pliktmessig avhold?",
    options: [
      "-Ikke lov til à drikke alkohol",
      "-Det er ikke lov à drikke alkohol mindre enn 8 timer for man skal kjore",
      "-Deter ikke lov a drikke alkohol mindre enn 8 timer etter kjoring",
      "-Pliktmaessig avhold betyr a ta pause etter 4.5 timer kjoring",
    ],
    correctAnswers: [1],
  },
  {
    question: "166 Hvorfor kalles det for variable kostnader?",
    options: [
      "-Fordi vi kan ikke sette den inn i budsjett",
      "-Variable kostnader henger sammen med kilometer",
      "-Variable kostnader heter ogsa faste kostnaderR",
    ],
    correctAnswers: [],
  },
  {
    question: "167 Hva er ansettelesekontrakt ?",
    options: [
      "-Arbeidskontrakt",
      "-Dette er leiekontrakt av en bil mellom eier og sjäfor",
      "-Ansattelsekontrakt er kontrakt for en frivillig job",
    ],
    correctAnswers: [0],
  },
  {
    question: "168 Hva er et regnskap?",
    options: [
      "-Regnskap viser inntekter og kostnader",
      "-Gjeld og egenkapital",
      "-Regnskap er investering som et firma har gjort i ett ar",
    ],
    correctAnswers: [0],
  },
  {
    question: "169 Ha betyr hviletidsbestemmelser?",
    options: [
      "-Etter maksimalt 3 og en halv times kjoring skal ta 45 minutters pause.",
      "-Hovedregelen er at du etter maksimalt 4.5 times kjoring skal ta 45 minutters pause.",
      "-En taxisiafer kan Kjore et skift pa 14 timer uten a ta pause.",
    ],
    correctAnswers: [1],
  },
  {
    question: "170 Hva er riktig om pause?",
    options: [
      "-En ansatt har ikke krav pa 30 minutter pause hvis ansatt skal jobbe mindre en 5.5 timer skift",
      "-Arbeidsgiver ma ordnet pauserom for ansatter",
      "-En ansatt har krav pa 45 minutter pause i sin skift pä 8 timer",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "171  Hvilken rettigheter en midlertidig ansatt har nar han har jobbet over 3 ar?",
    options: [
      "-Han ma jobbe minst 5 ar for à kreve fast stilling",
      "- Han kan kreve fast stilling",
      "-Han kan ikke kreve fast stilling",
    ],
    correctAnswers: [1],
  },
  {
    question: "172 Hvordan kan du beregne feriepenger?",
    options: [
      "-Feriepenger er beregnet med 10.2 % for organisert og 12 % for organisert av total inkjort i opptjent är ( siste àr ).",
      "-Prosentdel 10.2 % for organisert og 12 % for organisert av fjorarets utbetalt brutto lonn",
      "-Feriepenger er beregnet med 12 % for organisert og 14.2 % for organisert av total lonn i opptjent är ( siste är ).",
      "173Hva er konsekevenser for a ikke betalle arbeidgiveravgift?",
      "-En taxieier kan selv bestemme om han onsker i betale arbeidsgiveravgift",
      "-Tvanginnkreving av okonomiske bot.",
      "-En taxieir ma betale arbeidgiveravgift selv om har ansatter eller ikke.",
    ],
    correctAnswers: [1, 6],
  },
  {
    question: "174  Hva er riktig om bruk av mobiltelefon i drosje?",
    options: [
      "* Bruk av mobiltelefon er forbudt i drosje",
      "* Deter bare passasjer som kan bruke mobiltelefon",
      "* Sjäfor kan kun bruke mobiltelefon for à se tekst melding",
      "* Mobil kan brukes hvis sjäfor har handsfri / bluetooth i bilen",
    ],
    correctAnswers: [3],
  },
  {
    question: "175 En kunde har glemt PC i drosje. Hva er riktig?",
    options: [
      "* Du kan bare beholde PC",
      "* Du kan gi den som gave til en venn",
      "* Du ma prove à levere den tilbake men hvis du ikke finner kunden da ma du levere den til hittegoods kontor hos Politi",
      "* Du kan bare kaste den",
    ],
    correctAnswers: [2],
  },
  {
    question: "176 Hva er selskap ANS?",
    options: [
      "-Det er et vanlig aks jelselskap.",
      "-Aksjelselskap med en eller flere eiere som er ansvarlige for gjeld",
      "-Aksjelselskap med 2 eller flere eiere som er ansvarlige for gjeld",
    ],
    correctAnswers: [2],
  },
  {
    question: "177 Hva slags krav/vilkar stilles for Faglig dyktighet ?",
    options: [
      "-Dokumentasjon for a ha bestatt praksis og nodvendig eksamen",
      "-Dokumentasjon for a ha bestätt skriftlig kurs pa internet",
      "-Dokumentasjon for à ha bestätt muntlig eksammen",
    ],
    correctAnswers: [0],
  },
  {
    question: "178 Hva er riktig om enkeltpersonforetak?",
    options: [
      "-Du har kun ansvar for din egenkapital",
      "- Driver du selvstendig naringsvirksomhet med enkeltpersonforetak betyr det ogsä at du har et ubegrenset ansvar",
      "-Eier av enkeltperson foretak er ikke ansvarlig for gjeld i firma",
    ],
    correctAnswers: [1],
  },
  {
    question: "178 Hvilken krav er det for tildeling av drosjeloyve?",
    options: [
      "- Du ma ha ansienitet pa over 2àr",
      "-Helseattest pa god helse",
      "-Ha god vandel, fast og varig virksomhet i Norge i tillegg til tilfredsstillende okonomisk evne",
    ],
    correctAnswers: [2],
  },
  {
    question: "179 Hva betyr oppfolgingsplan ?",
    options: [
      "Oppfolgingsplanen betyr a flolge opp ansatt om han/hun er virkelig syk",
      "Oppfolgingsplanen inneholde en vurdering av den ansattes arbeidsoppgaver o mulighet till à utfore dem",
      "Oppfolgingsplanen helper ansatt à finne en ny jobb i jobbmarkedet",
    ],
    correctAnswers: [1],
  },
  {
    question: "180 Hvem bestemmer ferietid?",
    options: ["-Tillitvalgte", "-Arbeidstaker", "-Arbeidsgiver"],
    correctAnswers: [2],
  },
  {
    question:
      "181 Hva er riktig om overväkning? Oppgaven kan ha flere rette svar.",
    options: [
      "-Start- og sluttsted for hver betalte tur skal loggfores",
      "-Posisjonen til drosjen blir overväket og loggfort",
      "-Posisjonsloggen skal lagres i 60 dager",
      "-Som siäfor kan du nekte en hver form for overväkning",
    ],
    correctAnswers: [0, 2],
  },
  {
    question: "182 Hva er forskuddskatt?",
    options: [
      "-Forskuddskatt er skatt som en taxieier betaler etter bergning av inntekt og -kostnader Forskuddskatt beregnes av ligningsmyndighetene for arets begynnelse pä bakgrunn ay tidligere ars inntekt og formue",
      "-Forskuddskatt betyr trekk i lonn av en siäfor",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "183 Hva kan tilkobles med taksameter? Oppgaven kan ha flere rette svar",
    options: [
      "* Takskilt",
      "* Audioantegg",
      "* Mobil",
      "* kommunikasjonsenhet for overforing av data",
      "Tachograf",
      "* Betalingsterminal",
    ],
    correctAnswers: [0, 5],
  },
  {
    question:
      "184 Hva er riktig his arbeidstaker overstiger 40 timer i en uke?",
    options: [
      "-Folge arbeidsmiljaloven arbeidsgiver er pliktig a betale godtgjorelse for overtid som skal vare 40 % ekstra i tillegg til vanlig lonn.",
      "-  Arbeidstaker kan jobbe overtid uten à kreve tillegg for det",
      "-﻿Deter ikke lov à jobbe over 40 timer i en uke",
    ],
    correctAnswers: [0],
  },
  {
    question: "184 Nar kan en arbeidsgiver bruke avskjedd?",
    options: [
      "-Avskjedd kan brukes his arbeidsgiver er ikke fornoyd med arbeidstaker",
      "-Arbeidsgiver kan avskjedige en arbeidstaker med päbud om dyeblikkelig fratreden dersom denne har gjort en grovt pliktbrudd av arbeidavtale",
      "-Avskjedd er ikke lov folge arbeidmiljoloven",
      "-﻿Ansatt kommer ikke pa riktig tid",
      "-﻿Ansatt har kranglet",
      "-Arbeidsgiver har bevis pa at ansatt har snakket hatefull med en kunde",
    ],
    correctAnswers: [1, 5],
  },
  {
    question:
      "185 Hvem er ansvarlig his passajer har glemi handbagasje i bilen?",
    options: ["-Passasjer selv", "-Siafor", "-Ingen"],
    correctAnswers: [],
  },
  {
    question: "186 Hva er en insolvent firma?",
    options: [
      "-När firma er i underskudd",
      "-Nar firma er i overskudd",
      "-Firma ikke er i stand til à gjore opp sine okonomiske forpliktelser ved forfall, os at det heller ikke er eiendeler i virksomheten til à dekke gjelden",
    ],
    correctAnswers: [2],
  },
  {
    question: "187 Hva betyr kassekreditt? Hivor kan det brukes:",
    options: [
      "-Betale skatt og avgift",
      "-Betale langsiktig tan",
      "-Betale gjeld",
      "-Bedriften har ett bevilget belop innenfor en läneramme til finansiering av driften",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "188 Hva er riktig om arbeidsgivers rett til & si opp arbeidstakeren som vert sykmeldt i seks maneder?",
    options: [
      "-Arbeidstakere kan sies opp dersom fravzeret er pa grunn av ulykke eller sykdom",
      "-Arbeidstakeren er pliktig & levere oppsigelse ved alvorlig sykdom",
      "•-Arbeidstakeren kan sies op i perioden arbeidsgiveren betaler sykepenger (de forst 16 dagene)",
      "-Arbeidstakere som er borte fra arbeidet pa grunn av ulykke eller sykdom kan ikke sies opp ay denne grunn",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "189 Du har en personlig aksjeselskap, hva skjer med din aksjekapital his du har mindre inntekt?",
    options: [
      "-Aksjekapital kommer til ä oke",
      "-Verdi pa aksjekapital kommer til à synke",
      "-Den har ingen effekt",
    ],
    correctAnswers: [],
  },
  {
    question: "190 For hem gjelder bestemmelsen om pliktmessig avhold?",
    options: [
      "- For buss- og taxisiäforer, men ikke for lastebilsjäforer",
      "-Alle som er yrkesäforer og kjorer personer eller gods",
      "- Kun for dem som befordrer personer",
      "-Loven gjelder for alle forere",
    ],
    correctAnswers: [1],
  },
  {
    question: "191 Hvor skal du sette forskuddstrekk?",
    options: [
      "-Forskuddtrekk er forskudd pa skatt som eier ma betalei lopet av aret",
      "-Settes inn i skattetrekkskonto i banken senest forste virkedag etter lonnsutbetaling",
      "-Forkuddtrekk skal betales direkte til staten",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "192 Hva er riktig om arbeidsgivers rett til & si opp arbeidstakeren som vert sykmeldt i seks maneder?",
    options: [
      "-Arbeidstakere kan sies opp dersom fravzeret er pa grunn av ulykke eller sykdom",
      "-Arbeidstakeren er pliktig & levere oppsigelse ved alvorlig sykdom",
      "- Arbeidstakeren kan sies op i perioden arbeidsgiveren betaler sykepenger (de forst 16 dagene)",
      "-Arbeidstakere som er borte fra arbeidet pa grunn av ulykke eller sykdom kan ikke sies opp ay denne grunn",
    ],
    correctAnswers: [3],
  },
  {
    question:
      "193 Du har en personlig aksjeselskap, hva skjer med din aksjekapital his du har mindre inntekt?",
    options: [
      "-Aksjekapital kommer til ä oke",
      "-Verdi pa aksjekapital kommer til à synke",
      "-Den har ingen effekt",
    ],
    correctAnswers: [1],
  },
  {
    question: "194 For hem gjelder bestemmelsen om pliktmessig avhold?",
    options: [
      "-For buss- og taxisiäforer, men ikke for lastebilsjäforer",
      "-Alle som er yrkesäforer og kjorer personer eller gods",
      "- Kun for dem som befordrer personer",
      "-Loven gjelder for alle forere",
    ],
    correctAnswers: [1],
  },
  {
    question: "195 Hvor skal du sette forskuddstrekk?",
    options: [
      "-Forskuddtrekk er forskudd pa skatt som eier ma betalei lopet av aret",
      "-Settes inn i skattetrekkskonto i banken senest forste virkedag etter lonnsutbetaling",
      "-Forkuddtrekk skal betales direkte til staten",
    ],
    correctAnswers: [1],
  },
  {
    question: "196 I en aksjeselskap er aksjonaer ansvarlig for?",
    options: [
      "-Ubegrenset",
      "-Aksjekapitalen / Aksjeinnskudd",
      "-60000",
      "-100000",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "197 Hva skal vare synlig fra passasjerplass? Oppaven kan ha flere rette svar.",
    options: [
      "Siäforens sertifikat",
      "Loyvenummer",
      "GPS som viser bilens posisjon",
      "Kioreseddel",
      "Yrkesiäfor bevis",
    ],
    correctAnswers: [1, 3],
  },
  {
    question: "199 Hva er avskrivning?",
    options: ["-Renter og kostnader", "-Verdiforringelse", "- Län pa bilen"],
    correctAnswers: [1],
  },
  {
    question: "200 En vannlig drosje loyve tildeles for?",
    options: ["- 5 personer", "-9 personer", "-12 personer", "-20 personer"],
    correctAnswers: [1],
  },
  {
    question: "201 Hvor mange virkedager kan en ansatt ta ferie?",
    options: ["-20", "-25", "-30", "-35"],
    correctAnswers: [1],
  },
  {
    question: "202 Hva er hoved ferieperiode ?",
    options: [
      "-30 september til 31 desember",
      "-01 juni til 30 september",
      "- 01 april til 31 mai",
    ],
    correctAnswers: [1],
  },
  {
    question: "203 Hva er Kapitalkostnader ?",
    options: [
      "-Finanskostnader/entekostnader",
      "-Variablekostnader",
      "-Fastekostnader",
    ],
    correctAnswers: [0],
  },
  {
    question: "204 Hva er riktig om sykepenger ?",
    options: [
      "-Arbeidsgiver skal betale bare 16 dager og NAV skal betale utover denne perioden",
      "-Arbeidsgiver er pliktig a betale utover arbeidsgiverperioden",
      "-NAV kommer til á betale ansatt fra forste dagen han/hun blir sykemeldt",
    ],
    correctAnswers: [0],
  },
  {
    question: "205 Hvordan kan en eier ta sykepenger ved sykdom?",
    options: [
      "-Eier har ikke krav pa sykepenger",
      "-Eier ma ha sykeforsikring gjennom NAV for a fä sykepenger",
      "-NAV kommer til à betale eier fra forste dagen han/hun blir sykemeldt",
    ],
    correctAnswers: [1],
  },
  {
    question: "206 Hvilke poster skal inng& i beregning av feriepengen?",
    options: [
      "-Utbetalt kilometergodtgjorelse",
      "-Utbetalt vederlag som vikar i en begrenset tidsperiode  -Utbetalt feriepenger",
      "-Utbetalt utlegg for bompenger.",
    ],
    correctAnswers: [],
  },
  {
    question:
      "207 Hvis du har en fast ansatt hva skal innholde I arbeidskontrakten?",
    options: [
      "-Slutt dato",
      "-Tidspunktet for arbeidsforholdets begynnelse og slutt",
      "-De faglige krav som gjelder for stillingen.",
      "-Daglig og ukentlig arbeidstider",
    ],
    correctAnswers: [3],
  },
  {
    question: "208 Oppsigelse ma blant annet innholde?",
    options: [
      "-﻿Slutt dato og sted",
      "-Rett pa ferie og feriepenger",
      "-Lonn ferie og feriepenger",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "209 Hva er riktig om kravene til tilfredsstillende [skonomisk evne ved tildeling av drosjelove?",
    options: [
      "-Det skal innbetales en garantisum til loyvemyndigheten",
      "-Det ma opplyses om to private kausjonister som garantister",
      "-Det ma fremlegges en garantierklaring fra bank eller forsikringsselskap til loyvemyndigheten",
      "-Det skal framlesges dokumentasjon pa at kjoretoyet er betalt",
    ],
    correctAnswers: [2],
  },
  {
    question:
      "210 Hvor lenge en drosjesjafor kan ta pause his han kjore en skift pà 8 timer?",
    options: [
      "-2 pause pa 10 minutter",
      "-20 minutter",
      "-30 minutter",
      "-Trenger ikke pause fordi han har flere pauser mellom turer",
    ],
    correctAnswers: [2],
  },
  {
    question: "211 Hiva er okonomisk bilalder av en drosjebil?",
    options: [
      "- Garanti",
      "-Tilstand pa kjoretoy",
      "-När total forventet gjennomsnitlig kostnader pa ny bil er lavere enn gammel bil",
    ],
    correctAnswers: [2],
  },
  {
    question: "212 Hva er en arbeidsplan?",
    options: [
      "-Oversikt over total ansatte i en bedrift",
      "-Oversikt over nar arbeidet skal utfores",
      "- Oversikt over total drosiebiler i firma",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "213 Hva skal en arbeidsgiver gjore nar en ansatt har 2 ulike skift ?",
    options: [
      "-Arbeidstaker skal ikke jobbe like tider pa dogn",
      "-Arbeidsgiver ma utarbeide arbeidsplan som skal vare tilgjengelig senest",
    ],
    correctAnswers: [],
  },
  {
    question: "2 uker for den skal iverksettes. R",
    options: [
      "-Arbeidgiver er ikke pliktig a betale overtidstillegg om arbeidstaker overtiger 40 timer i uka ved skiftarbeid.",
    ],
    correctAnswers: [],
  },
  {
    question: "214 Hva er godtgjorelse ?",
    options: [
      "-Arbeidsgiver skal beregne skattetrekk av lonn og annet vederlag for utfort arbeid i bedriften",
      "-Godtgjorelse er avgifter, skatt eller andre forpliktelser som arbeidgiver betaler for sine ansatter",
      "-Godtgjorelse er pengene du skal leve av nar du ikke lenger mottar lonn.",
    ],
    correctAnswers: [0],
  },
  {
    question: "215 Hvor mange timer kan en ansatt jobbe I en uke?",
    options: [
      "-37.5 timer i 5 dager",
      "-40 timer i 7 dager",
      "- 15 timer i 3 dager",
    ],
    correctAnswers: [1],
  },
  {
    question: "216 Hvor skal drosjeturer loggfores?",
    options: [
      "-Dagen egenrapport",
      "-Satellite kommunikasjon GNSS",
      "-Passasjerns navn og adresse i egen rapport",
      "217Hvor mange maks sitteplasser i en bil kan vaere registrert som taxi?",
      "-17 passasjerplasser og n foreplass",
      "-16 passasjerplasser og n forerplass",
      "-7 passasjerplasser og én foreplass",
      "-10 passasjerplasser og én forerplass",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "218 Du har fätt en plasstur med 5 personer men du har plass til 4 personer . Hva skal du gore?",
    options: [
      "-Jeg tar sjansen og kjorer dem",
      "-Jeg deler tur med en annen taxi og kjorer dem",
      "-Jeg bestiller en maxitaxi til kunde med nok plasser",
    ],
    correctAnswers: [2],
  },
  {
    question: "219 Hva er et eksempel pa toveiskommunikasjon?",
    options: [
      "Nar to personer snakker med hverandre",
      "* Nyhetene pá radioen",
      "* När du fär en tekstmelding om at drosjen er pà vei",
      "* När du tekster noen men fär ikke svar",
      "* Nar du sier en ting, men mener noe helt annet",
    ],
    correctAnswers: [0],
  },
  {
    question: "220 Hva er riktig om GPS?",
    options: [
      "-Den benyttes for a snakke med drosiesentralen",
      "-Den viser alltid den mest fornuftige ruten til en destinasjon",
      "-Den viser posisjonen din i et digitalt kart i sanntid",
      "-Den regner ut hva prisen blir for en strekning",
    ],
    correctAnswers: [2],
  },
  {
    question: "221 Hva er maks timer en ansatt kan jobbe per dogn ?",
    options: [
      "-Má ikke overstige 14 timer inkludert overtid",
      "-En ansatt kan ikke jobbe mer en 8 timer",
      "-Ma ikke overstige 10 timer inkludert overtid",
      "-Ma ikke overstige 17 timer inkludert overtid",
    ],
    correctAnswers: [],
  },
  {
    question:
      "222 Hiva er en av hovedhensiktene med kjare- og hviletidsbestemmelsene?",
    options: [
      "* Serge for at transpoeten kommer raskere fram",
      "* Gi ulike konkurransevilkar som gir lavere transportkostnad",
      "* Forbedre trafikksikkerheten for alle trafikanter",
      "* Fordele transportoppdrag til land med mindre restriktivt lovverk",
    ],
    correctAnswers: [2],
  },
  {
    question: "223 Hva er regler for utbetaling av sykepenger til ansatte?",
    options: [
      "-Arbeidsgiver er pliktig a betale full lonn de forste 3 dager i en sykeperiode",
      "-Arbeidsgiver er pliktig à betale full lonn fra forste dag til og med 16 kalenderdager i en sykeperiode",
      "-Det er NAV som er sykepengeransvarlig i hele sykeperiode",
    ],
    correctAnswers: [1],
  },
  {
    question: "224 Hva er inkludert i likviditetsbudisert ?",
    options: [
      "* Det inngar intekter og kostnader",
      "* Planlagte innbetalinger og utbetalinger i en fremtidis periode, evnen til a betale utgift ved forfall",
      "* Det viser eiendeler og gjeld",
    ],
    correctAnswers: [1],
  },
  {
    question:
      "225 Hvilken forskrift skal oppbevares i drosjebilen o forvises pa",
    options: [
      "oppfordring fra Passasjerene?",
      "-Kunde kan kreve a sjekke forerkort",
      "-Kunde kan kreve à sjekke kompetanse dokumenter",
      "-Forskrift om takstberegning og maksimalpriser for loyvepliktig drosjetransport med motorvogn",
    ],
    correctAnswers: [3],
  },
  {
    question: "226 Hva er riktig om loyvenummer pà en drosje?",
    options: [
      "-Nummeret skal vare i en kontrasterende farge",
      "-Du trenger ikke layvenummer pä en drosje",
      "- Nummeret skal vare i samme farge som drosjen",
      "-Nummeret skal enten vare i svart eller hvit skrift",
    ],
    correctAnswers: [0],
  },
  {
    question: "227 Hva er langsiktig gjeld ?",
    options: [
      "Tilbakebetale periode pà mindre enn ett är",
      "ilbakebetale periode pà over ett är",
      "Tilbakebetale periode fra 6 maneder til 1 maneder",
    ],
    correctAnswers: [1],
  },
  {
    question: "228 Nar er det tillatt a ta i bruk et taksameter kjoretoyet?",
    options: [
      "-Nar tollvesenet har kontrollert o godkjent installasjonen,Samt aktuelle tilleggsinnretninger",
      "-Nar justervesent har kontrollert o godkjent installasjonen, Samt aktuelle tilleggsinnretninger",
      "-När konkurransetilsynet har kontrollert o godkjent installasjonen, 0g nodvendige tilleggsinnretninger",
      "-Nar statens vegvesen har kontrollert os godkjent installasjonen, 0g nodvendige tillegesinnretninger",
    ],
    correctAnswers: [1],
  },
  {
    question: "229 När skal du ta kontakt med justervesnet ?",
    options: [
      "-Ved endring av dekkdimensjon som pa virker maleresultatets i vesentlig grad",
      "-Nar du tar service pa bilen",
      "-Nar du far problem med taksameter",
    ],
    correctAnswers: [0],
  },
  {
    question: "230 Hem har ansvar for bruk av taksameter ?",
    options: [
      "-Eier",
      "-Justervesnet",
      "-Sjäferen, dersom loyvehaveren er en annen enn den som kiorer bilen",
      "- Sentral",
    ],
    correctAnswers: [2],
  },
  {
    question: "231 'Hvor kan du registrere enkeltperson foretak?",
    options: [
      "-Foretakregister, Bronnoysund register, altinn",
      "-Statensvegvesen",
      "-NAV",
      "-Samferselsaetaten",
    ],
    correctAnswers: [],
  },
  {
    question: "232 Hvor kan du registrere enkeltperson foretak?",
    options: ["-Nav. no", "-Altinn.no", "-Vegvesen.no"],
    correctAnswers: [1],
  },
  {
    question: "233 Hvilken forsikring er lovpälagt for drosje?",
    options: [
      "-Bilglassforskring",
      "-Kaskoforskring",
      "-Del-kasko forskring",
      "-Ansvarsforskring / Trafikkforsikring",
    ],
    correctAnswers: [3],
  },
  {
    question: "234 Hvem har krav pa feriepenger?",
    options: ["-Arbeidsgiver", "-Tillitsvalgt", "-Arbeidtaker"],
    correctAnswers: [2],
  },
  {
    question: "235 Ha dekker ansvarforsikring?",
    options: [
      "-Drosje kan ikke ha ansvarforsikrin",
      "-Ansvarsforskring dekker skade pa din bil og motparts bil og eindeler",
      "-Ansvarforsikring er akkurat som Del-kasko forskring",
      "-Ansvarsforskring dekker skade pa motparts bil og eiendeler",
    ],
    correctAnswers: [3],
  },
  {
    question: "236 Hvilken lov sikrer trygghet og sikkerhet av ansatte?",
    options: ["-Regnskapsloven", "-Arbeidsmilioloven", "-Vrketransportloven"],
    correctAnswers: [1],
  },
  {
    question: "237 Hva menes med at du ma ha okonomiske evne?",
    options: [
      "-Garanti fra bank eller forsikring",
      "-Drosje má ha forsikring",
      "-Kr 30000 i bank konto",
    ],
    correctAnswers: [0],
  },
  {
    question: "238 Hvor ofte skal bilens tilstand sjekkes?",
    options: [
      "-Kontrol skal utfores arlig",
      "-Kontrol skal utfores etter 2är",
      "-Kontrol skal utfores etter 4 ar",
    ],
    correctAnswers: [0],
  },
  {
    question: "239 Hvilken forskrift skal vare synlig for passasier i billen?",
    options: [
      "-Bilens vognkort",
      "-Godkjent kommunikasjonsutstyr",
      "-Takst beregning",
      "-Forerens dispensajonsrett",
    ],
    correctAnswers: [2],
  },
  {
    question: "240 Hva er riktig med en drosjebil?",
    options: [
      "-Bilen ma ha taksmeter",
      "-Bilen ma ha godkjent kommunikasjonsutstyr",
      "-Taklampe ma vare godkjent av vegvesensdirektoratet",
      "-Forer av bilen ma ha bevis pa dispensajonsrett",
    ],
    correctAnswers: [0],
  },
  {
    question: "241 Hva er riktig nar et kjoretoy benyttes som drosje?",
    options: [
      "-Skal ha taklykt med päskrift TAXI",
      "-Markers med leyvenummer pa begge sider utvendig pa sidedor",
      "-Loyvenummer skal ha samme farge som kjoretoyet",
      "-Taksameter er frivillig dersom drosjen er utstyret med betalingsterminal",
    ],
    correctAnswers: [1],
  },
  {
    question: "242 Hva betyr solidarisk ansvar?",
    options: [
      "-To eller flere debitorer er ansvarlige for samme gjeld, og kreditor kan kreve her og en av dem for hele gjelden",
      "- Ingen av medeiere er anvsvarlig for gjeld",
      "-Intet ansvar",
    ],
    correctAnswers: [0],
  },
  {
    question:
      "243 Fra hvilken dag er arbeidsgiver pliktig à betale sykepenger?",
    options: ["-Etter 16 dager", "-Fra forste dag", "-Fra tredje dag"],
    correctAnswers: [1],
  },
];

// Updated quiz app script.js with full dataset embedded

// Raw questions without explicit correctAnswers
const rawQuestions = [
  {
    question: "Aksjekapital ved etablering av AS",
    options: ["kr. 30000 R", "kr. 100000", "kr. 500000", "kr. 70000"],
  },
  {
    question: "Økonomisk ansvar i et aksjeselskap",
    options: [
      "Solidaransvar",
      "Etableringskapital / aksjeinnskudd / egenkapitalinnskudd R",
      "Intet ansvar",
    ],
  },
  {
    question: "Kalkulatoriske kostnader",
    options: [
      "Direkte kostnader",
      "Faktura",
      "Beregnes på slutten av året (renter og avskrivning) R",
      "Betales på slutten av året",
    ],
  },
];
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

  const split = [40, 40, 40, 40, 40, 43];
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
