/* ============================================================
   ΝΟΜΙΣΜΑΤΑ ΤΗΣ ΘΕΣΣΑΛΙΑΣ — Φαρσάλων, Σκοτούσσας και Πεύματος
   Σύνολο διαφανειών: 16 (Διορθωμένη ορθογραφία: του Πευμάτος)
   ============================================================ */

const slidesData = [

  /* ---------- ΔΙΑΦΑΝΕΙΑ 1: ΕΞΩΦΥΛΛΟ ---------- */
  {
    type: 'cover',
    eyebrow: 'Εκπαιδευτική Παρουσίαση',
    title: 'Από το Ανταλλακτικό Παζάρι στα <em>Αρχαία Νομίσματα</em> Φαρσάλων, Σκοτούσσας και Πεύματος',
    subtitle: 'Ένα ταξίδι 2.500 χρόνων στην ιστορία του χρήματος',
    meta: 'Φάρσαλα, Θεσσαλία'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 2: Η ΓΕΝΝΗΣΗ ΤΟΥ ΧΡΗΜΑΤΟΣ ---------- */
  {
    type: 'content',
    title: 'Η Γέννηση του Χρήματος',
    subtitle: 'Γιατί φτιάχτηκαν τα νομίσματα;',
    imageId: 'barter-scene',
    imageCaption: 'Ανταλλαγή σιταριού με πήλινο κύπελλο',
    paragraphs: [
      'Φαντάσου ότι είσαι αγρότης και κρατάς <strong>σιτάρι</strong>. Θέλεις να το ανταλλάξεις με ένα <strong>πήλινο κύπελλο</strong> από τον αγγειοπλάστη. Τι γίνεται όμως αν ο αγγειοπλάστης δεν θέλει σιτάρι, αλλά <em>ψάρι</em>;',
      'Αυτό το πρόβλημα λέγεται <strong>αντιπραγματισμός</strong> — δηλαδή η απευθείας ανταλλαγή προϊόντων <em>χωρίς λεφτά</em>. Ήταν δύσκολο, γιατί έπρεπε και οι δύο να θέλουν αυτό που έχει ο άλλος.'
    ],
    highlight: 'Ο αντιπραγματισμός ήταν ο λόγος που οι άνθρωποι άρχισαν να ψάχνουν έναν <strong>κοινό μετρητή αξίας</strong> — κάτι που όλοι δέχονταν ως πληρωμή.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 3: ΓΙΑΤΙ ΜΕΤΑΛΛΟ; ---------- */
  {
    type: 'content',
    title: 'Γιατί Μέταλλο και όχι… Κατσίκες;',
    subtitle: 'Η λύση των πολύτιμων μετάλλων',
    imageId: 'metal-ingots',
    imageCaption: 'Ράβδοι ασημιού και χαλκού',
    paragraphs: [
      'Οι άνθρωποι σκέφτηκαν να χρησιμοποιήσουν <strong>πολύτιμα μέταλλα</strong>, όπως το <em>ασήμι</em> και τον <em>χαλκό</em>, γιατί:',
      '<strong>• Δεν χαλούσαν</strong> με τον χρόνο (σε αντίθεση με το σιτάρι ή το ψάρι).<br><strong>• Μεταφέρονταν εύκολα</strong> και χωρούσαν στην τσέπη.<br><strong>• Είχαν σταθερή αξία</strong> που όλοι αναγνώριζαν.'
    ],
    highlight: 'Όμως κάθε φορά στην αγορά έπρεπε να <strong>ζυγίζουν</strong> το μέταλλο. Αυτό ήταν κουραστικό — γι’ αυτό οι πόλεις βρήκαν μια πιο έξυπνη λύση.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 4: ΝΟΜΙΣΜΑΤΟΚΟΠΕΙΑ ---------- */
  {
    type: 'content',
    title: 'Τα Νομισματοκοπεία',
    subtitle: 'Τα επίσημα εργαστήρια της πόλης',
    imageId: 'mint-workshop',
    imageCaption: 'Αρχαίο νομισματοκοπείο — σφυρί και μήτρα',
    paragraphs: [
      'Οι πόλεις έφτιαξαν τα <strong>νομισματοκοπεία</strong> — δηλαδή τα επίσημα κρατικά εργαστήρια όπου <em>έλιωναν</em> το μέταλλο και του έδιναν <em>στρογγυλό σχήμα</em>.',
      'Με ένα <strong>σφυρί</strong> και μια <strong>μήτρα</strong> (μεταλλική σφραγίδα), χτυπούσαν πάνω στο μέταλλο το σχήμα της πόλης. Αυτή η <strong>σφραγίδα</strong> εγγυόταν την αξία του νομίσματος σε όλη την Ελλάδα.'
    ],
    highlight: 'Η σφραγίδα ήταν σαν την «υπογραφή» της πόλης: <em>«Αυτό το ασήμι είναι δικό μας και έχει την αξία που λέει»</em>.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 5: ΦΑΡΣΑΛΑ — ΑΘΗΝΑ ---------- */
  {
    type: 'coin',
    title: '1. Φάρσαλα — Η Θεά Αθηνά',
    subtitle: 'Εμπρόσθια όψη νομίσματος (5ος – 4ος αι. π.Χ.)',
    imageId: 'coin-pharsala-athena-front',
    imageCaption: 'Ασημένιο νόμισμα Φαρσάλων — κεφάλι Αθηνάς με κράνος',
    imagePosition: 'center',
    paragraphs: [
      'Στην <strong>μπροστινή πλευρά</strong> του νομίσματος βλέπουμε το <strong>κεφάλι της θεάς Αθηνάς</strong> να φορά ένα περίτεχνο <strong>πολεμικό κράνος</strong>, συχνά διακοσμημένο με φτερά ή <em>γρύπες</em> — τα μυθικά πλάσματα με σώμα λιονταριού και κεφάλι αετού.'
    ],
    highlight: '<strong>Τι σημαίνει;</strong> Η Αθηνά ήταν η <em>προστάτιδα θεά</em> της πόλης — σύμβολο σοφίας, στρατηγικής και δύναμης. Η πόλη ήθελε να δείξει ότι έχει τη θεά στο πλευρό της.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 6: ΦΑΡΣΑΛΑ — ΙΠΠΕΑΣ ---------- */
  {
    type: 'coin',
    title: 'Φάρσαλα — Ο Ιππέας και το Άλογο',
    subtitle: 'Οπίσθια όψη νομίσματος',
    imageId: 'coin-pharsala-horseman-back',
    imageCaption: 'Ασημένιο νόμισμα Φαρσάλων — ιππέας σε καλπασμό + γράμματα ΦΑΡ',
    imagePosition: 'center',
    paragraphs: [
      'Στην <strong>πίσω πλευρά</strong> βλέπουμε έναν περήφανο <strong>Θεσσαλό ιππέα</strong> πάνω σε καλπάζον άλογο — ή μόνο το κεφάλι του αλόγου — μαζί με τα γράμματα <strong>ΦΑΡ</strong> (από το όνομα «Φάρσαλα»).'
    ],
    highlight: '<strong>Τι σημαίνει;</strong> Η Φάρσαλος φημιζόταν σε όλη την Ελλάδα για το <em>ανίκητο ιππικό</em> της — τους Φαρσάλιους ιππείς του Αχιλλέα και αργότερα του Μεγάλου Αλεξάνδρου. Το άλογο διαφήμιζε τον <strong>πλούτο και τη στρατιωτική υπεροχή</strong> της περιοχής.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 7: ΓΙΑΤΙ ΑΛΟΓΟ; ---------- */
  {
    type: 'content',
    title: 'Γιατί Άλογο;',
    subtitle: 'Το μυστικό των Θεσσαλών ιππέων',
    imageId: 'thessalian-horse',
    imageCaption: 'Θεσσαλός ιππέας σε αρχαία αγγειογραφία',
    paragraphs: [
      'Η Θεσσαλία ήταν <strong>η καλύτερη περιοχή της Ελλάδας για άλογα</strong>. Οι κάμποι της ήταν ιδανικοί για εκτροφή, και οι ιππείς της ήταν περιζήτητοι σε όλες τις μάχες.',
      'Ο <strong>Αχιλλέας</strong> — ο μεγαλύτερος ήρωας του Τρωικού πολέμου — καταγόταν από τα Φάρσαλα, την αρχαία <em>Φθία</em>. Οι Φαρσάλιοι ιππείς πολέμησαν δίπλα στον <strong>Μέγα Αλέξανδρο</strong>.'
    ],
    highlight: 'Το άλογο στο νόμισμα ήταν σαν διαφήμιση: <em>«Εμείς έχουμε τα καλύτερα άλογα — και τους καλύτερους ιππείς!»</em>'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 8: ΣΚΟΤΟΥΣΣΑ — ΕΙΣΑΓΩΓΗ ---------- */
  {
    type: 'content',
    title: '2. Ο Θησαυρός της Γειτονικής Σκοτούσσας',
    subtitle: 'Λίγα χιλιόμετρα έξω από τα Φάρσαλα',
    imageId: 'skotoussa-map',
    imageCaption: 'Χάρτης επαρχίας Φαρσάλων — θέση Σκοτούσσας',
    paragraphs: [
      'Η <strong>Σκοτούσσα</strong> ήταν μια σημαντική πόλη κοντά στα Φάρσαλα. Τα νομίσματά της είναι η <strong>πιο ζωντανή απόδειξη</strong> της ιστορίας της — γιατί πάνω τους χάραζαν ό,τι ήταν πολύτιμο για τους κατοίκους.',
      'Καθώς περνούσαν τα χρόνια, οι εικόνες στα νομίσματα <strong>άλλαζαν</strong> ανάλογα με τις ανάγκες και τις αξίες της εποχής.'
    ],
    highlight: 'Τα νομίσματα ήταν σαν <strong>μικρές εφημερίδες</strong>: έλεγαν σε όλους τι αγαπούσε, τι φοβόταν και τι περηφανευόταν η πόλη.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 9: ΣΚΟΤΟΥΣΣΑ — ΤΑΥΡΟΚΑΘΑΨΙΑ ---------- */
  {
    type: 'coin',
    title: 'Σκοτούσσα — Τα Ταυροκαθάψια',
    subtitle: 'Ασημένιο νόμισμα, 5ος αιώνας π.Χ.',
    imageId: 'coin-skotoussa-taurokathapsia',
    imageCaption: 'Νόμισμα Σκοτούσσας — νέος παλεύει με ταύρο',
    imagePosition: 'center',
    paragraphs: [
      'Στα πρώτα ασημένια νομίσματα της Σκοτούσσας βλέπουμε έναν <strong>γενναίο νέο</strong> — πιθανώς τον μυθικό ήρωα <strong>Θεσσαλό</strong> — να παλεύει με έναν άγριο <strong>ταύρο</strong>, δένοντάς τον από τα κέρατα με μια ταινία.'
    ],
    highlight: '<strong>Τι σημαίνει;</strong> Απεικονίζει τα <em>Ταυροκαθάψια</em> — το επικίνδυνο αγώνισμα που γινόταν στις γιορτές των <strong>Ταυρείων</strong>, προς τιμήν του θεού <strong>Ποσειδώνα</strong>. Το ίδιο σχέδιο υπήρχε και στα νομίσματα των Φερών και της Λάρισας — δείγμα ότι οι θεσσαλικές πόλεις <strong>συνεργάζονταν στενά</strong>.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 10: ΣΚΟΤΟΥΣΣΑ — ΣΙΤΑΡΙ & ΑΛΟΓΟ ---------- */
  {
    type: 'coin',
    title: 'Σκοτούσσα — Κόκκος Σιταριού & Άλογο',
    subtitle: 'Η δύναμη της γης και των αλόγων',
    imageId: 'coin-skotoussa-wheat-horse',
    imageCaption: 'Νόμισμα Σκοτούσσας — κόκκος σιταριού + άλογο',
    imagePosition: 'center',
    paragraphs: [
      'Αργότερα, η Σκοτούσσα έβαλε στην πίσω όψη του νομίσματος έναν <strong>κόκκο σιταριού</strong> με τη φλούδα του — δίπλα στο άλογο.'
    ],
    highlight: '<strong>Τι σημαίνει;</strong> Ο συνδυασμός <em>αλόγου + σιταριού</em> ύμνησε τα δύο μεγαλύτερα μυστικά του πλούτου της επαρχίας: την <strong>εκτροφή αλόγων</strong> και την <strong>εύφορη γη</strong> που έδινε άφθονο ψωμί.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 11: ΣΚΟΤΟΥΣΣΑ — ΗΡΑΚΛΗΣ & ΔΙΟΝΥΣΟΣ ---------- */
  {
    type: 'coin',
    title: 'Σκοτούσσα — Ηρακλής, Διόνυσος & Σταφύλια',
    subtitle: 'Χάλκινα νομίσματα, 4ος αιώνας π.Χ.',
    imageId: 'coin-skotoussa-herakles-dionysos',
    imageCaption: 'Νόμισμα Σκοτούσσας — Ηρακλής με λεοντή + τσαμπί σταφύλι & κάνθαρος',
    imagePosition: 'center',
    paragraphs: [
      'Όταν φτιάχτηκαν τα πρώτα <strong>χάλκινα νομίσματα</strong> — για τα καθημερινά, μικρά ψώνια στην αγορά — εμφανίστηκε ο ήρωας <strong>Ηρακλής</strong> με τη <em>λεοντή</em> (το δέρμα του λιονταριού που φορούσε στο κεφάλι) και το <em>ρόπαλό</em> του: σύμβολα δύναμης και προστασίας.',
      'Στην πίσω όψη μπήκαν <strong>τσαμπιά σταφύλια</strong> και ο <strong>κάνθαρος</strong> — το αρχαίο βαθύ κύπελλο με τα δύο ψηλά χερούλια που έπιναν κρασί.'
    ],
    highlight: '<strong>Τι σημαίνει;</strong> Τιμούσαν τον θεό <strong>Διόνυσο</strong> και τα φημισμένα <em>αμπέλια</em> της περιοχής. Το νόμισμα έλεγε: «Έχουμε δύναμη (Ηρακλής) και καλό κρασί (Διόνυσος)!»'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 12: ΠΕΥΜΑ — ΕΙΣΑΓΩΓΗ ---------- */
  {
    type: 'content',
    title: '3. Το Αρχαίο Πεύμα (Κάστρο Καλλιθέας)',
    subtitle: 'Η καστροπολιτεία που φύλαγε τον θεσσαλικό κάμπο',
    imageId: 'peuma-kastro-kallitheas',
    imageCaption: 'Αρχαίο Πεύμα — τα τείχη στο Κάστρο Καλλιθέας Φαρσάλων',
    paragraphs: [
      'Ψηλά στον λόφο πάνω από τη σημερινή <strong>Καλλιθέα Φαρσάλων</strong> βρισκόταν το αρχαίο <strong>Πεύμα</strong> (οι κάτοικοί του λέγονταν <em>Πευμάτιοι</em>) — μια καστροπολιτεία χτισμένη σε στρατηγικό σημείο που έβλεπε όλο τον θεσσαλικό κάμπο.',
      'Στις αρχές του <strong>3ου αιώνα π.Χ.</strong> (γύρω στο 302–286 π.Χ.), το Πεύμα έκοψε το δικό του <strong>χάλκινο νόμισμα</strong> — τον <em>χαλκούν</em> (το μικρό καθημερινό νόμισμα της αγοράς) — δείχνοντας ότι ήταν μια ζωντανή, ανεξάρτητη πόλη.'
    ],
    highlight: 'Ας δούμε από κοντά τις <strong>δύο πλευρές</strong> αυτού του σπάνιου νομίσματος και τα μυστικά που κρύβουν!'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 13: ΠΕΥΜΑ — ΕΜΠΡΟΣΘΙΑ ΟΨΗ (ΑΧΙΛΛΕΑΣ) ---------- */
  {
    type: 'coin',
    title: 'Πεύμα — Ο Νεαρός Αχιλλέας',
    subtitle: 'Εμπρόσθια όψη χάλκινου νομίσματος (302 – 286 π.Χ.)',
    imageId: 'coin-peuma-obverse',
    imageCaption: 'Χάλκινο νόμισμα Πευμάτος — δαφνοστεφανωμένο κεφάλι νεαρού άνδρα (Αχιλλέας)',
    imagePosition: 'center',
    paragraphs: [
      'Στην <strong>μπροστινή όψη</strong> του νομίσματος βλέπουμε το <strong>προφίλ ενός νεαρού άνδρα</strong> στραμμένο προς τα δεξιά, που φορά <strong>στεφάνι δάφνης</strong> (<em>δαφνοστεφανωμένος</em> — σύμβολο νίκης, τιμής και δόξας).',
      'Οι αρχαιολόγοι πιστεύουν ότι απεικονίζει τον <strong>Αχιλλέα</strong> — τον μεγαλύτερο ήρωα της περιοχής μας, της αρχαίας <em>Φθίας</em>.'
    ],
    highlight: '<strong>Τι σημαίνει;</strong> Οι κάτοικοι του Πευμάτος ένιωθαν περήφανοι για την καταγωγή τους από τη γη του <em>Αχιλλέα</em> και έβαλαν τη μορφή του στο νόμισμά τους για να τους προστατεύει.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 14: ΠΕΥΜΑ — ΟΠΙΣΘΙΑ ΟΨΗ (ΜΟΝΟΓΡΑΜΜΑ ΑΧ & ΚΡΑΝΟΣ) ---------- */
  {
    type: 'coin',
    title: 'Πεύμα — Το Μονόγραμμα ΑΧ & το Κράνος',
    subtitle: 'Οπίσθια όψη χάλκινου νομίσματος (ΠΕΥΜΑΤΙΩΝ)',
    imageId: 'coin-peuma-reverse',
    imageCaption: 'Οπίσθια όψη — μονόγραμμα ΑΧ, φρυγικό κράνος και επιγραφή ΠΕΥΜΑΤΙΩΝ',
    imagePosition: 'center',
    paragraphs: [
      'Στην <strong>πίσω όψη</strong> δεσπόζει ένα μεγάλο <strong>μονόγραμμα ΑΧ</strong> (δηλαδή τα αρχικά γράμματα <em>Α</em> και <em>Χ</em> ενωμένα σε ένα σύμβολο, από το όνομα <strong>ΑΧ</strong>ΙΛΛΕΥΣ!).',
      'Δίπλα του διακρίνεται ένα μυτερό <strong>φρυγικό κράνος</strong> (το χαρακτηριστικό πολεμικό κράνος της εποχής) και γύρω-γύρω η επιγραφή <strong>ΠΕΥΜΑΤΙΩΝ</strong> — που σημαίνει «νόμισμα των κατοίκων του Πευμάτος».'
    ],
    highlight: '<strong>Τι σημαίνει;</strong> Το <em>μονόγραμμα ΑΧ</em> μαζί με το <em>κράνος</em> επιβεβαιώνουν τη λατρεία και τον σεβασμό της πόλης στον πολεμιστή <strong>Αχιλλέα</strong>, ενώ η επιγραφή <strong>ΠΕΥΜΑΤΙΩΝ</strong> ήταν η επίσημη «υπογραφή» της πόλης!'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 15: ΣΥΓΚΡΙΣΗ ΤΩΝ 3 ΠΟΛΕΩΝ ---------- */
  {
    type: 'content',
    title: 'Φάρσαλα, Σκοτούσσα & Πεύμα',
    subtitle: 'Τρεις γειτονικές πόλεις, τρεις μοναδικές ιστορίες',
    imageId: 'comparison-coins',
    imageCaption: 'Νομίσματα Φαρσάλων, Σκοτούσσας και Πεύματος δίπλα-δίπλα',
    paragraphs: [
      '<strong>Φάρσαλα:</strong> Αθηνά (σοφία & προστασία) + Ιππέας (στρατιωτική δύναμη). Έμφαση στην <em>ηγεμονία</em> και το <em>ιππικό</em>.',
      '<strong>Σκοτούσσα:</strong> Ταύρος (θρησκεία), Σιτάρι & Άλογο (πλούτος γης), Ηρακλής & Διόνυσος (δύναμη & κρασί). Έμφαση στην <em>καθημερινή ζωή</em> και τη <em>γη</em>.',
      '<strong>Πεύμα (Κάστρο Καλλιθέας):</strong> Αχιλλέας + Μονόγραμμα ΑΧ & Κράνος (ηρωική καταγωγή & προστασία). Έμφαση στον <em>ήρωα του τόπου</em>.'
    ],
    highlight: 'Και οι τρεις πόλεις της επαρχίας μας χρησιμοποιούσαν τα νομίσματα ως <strong>μέσο επικοινωνίας</strong>: έλεγαν στον κόσμο ποιοι ήταν, ποιους ήρωες τιμούσαν και τι πλούτο είχαν.'
  },

  /* ---------- ΔΙΑΦΑΝΕΙΑ 16: ΤΕΛΟΣ ΠΑΡΟΥΣΙΑΣΗΣ ---------- */
  {
    type: 'cover',
    eyebrow: 'Τέλος Παρουσίασης',
    title: 'Ευχαριστούμε!',
    subtitle: 'Από το ανταλλακτικό παζάρι… στα αρχαία νομίσματα Φαρσάλων, Σκοτούσσας και Πεύματος',
    meta: 'Δήμος Φαρσάλων · Αρχαιολογική Συλλογή Φαρσάλων'
  }
];

/* ============================================================
   STATE & DOM REFERENCES
   ============================================================ */
let currentPageIndex = 0;
const totalPages = slidesData.length;

const container = document.getElementById('slides-container');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentPageEl = document.getElementById('current-page');
const totalPagesEl = document.getElementById('total-pages');

/* ============================================================
   BUILD SLIDES
   ============================================================ */
function buildSlides() {
  container.innerHTML = '';
  slidesData.forEach((data, index) => {
    const slide = document.createElement('section');
    slide.className = 'slide' + (data.type === 'cover' ? ' cover' : '');
    slide.dataset.index = index;
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `Διαφάνεια ${index + 1} από ${totalPages}`);

    if (data.type === 'cover') {
      slide.innerHTML = `
        ${data.eyebrow ? `<p class="cover-eyebrow">${data.eyebrow}</p>` : ''}
        <h1 class="cover-title">${data.title}</h1>
        ${data.subtitle ? `<div class="cover-divider"></div><p style="max-width:680px;margin:0 auto;color:var(--text-secondary);">${data.subtitle}</p>` : ''}
        ${data.meta ? `<p class="cover-meta" style="margin-top:1.5rem;">${data.meta}</p>` : ''}
      `;
    } else {
      let imageHtml = '';
      if (data.imageId) {
        const pos = data.imagePosition || 'center';
        
        imageHtml = `
          <div class="image-slot" style="position: relative; overflow: hidden;">
            <img src="images/${data.imageId}.jpg" 
                 alt="${data.imageCaption || data.title}" 
                 style="object-position: ${pos};"
                 onerror="this.style.display='none'; this.parentElement.innerHTML='${data.imageCaption || 'Εικόνα'}';">
          </div>
        `;
      }

      const paragraphsHtml = (data.paragraphs || [])
        .map(p => `<p>${p}</p>`)
        .join('');

      const highlightHtml = data.highlight
        ? `<div class="highlight-box"><p>${data.highlight}</p></div>`
        : '';

      slide.innerHTML = `
        <h2 class="slide-title">${data.title}</h2>
        <p class="slide-subtitle">${data.subtitle || ''}</p>
        <div class="content-grid">
          <div>
            ${paragraphsHtml}
            ${highlightHtml}
          </div>
          <div>
            ${imageHtml}
          </div>
        </div>
      `;
    }

    container.appendChild(slide);
  });
}

/* ============================================================
   RENDER / NAVIGATION
   ============================================================ */
function showPage(index) {
  if (index < 0 || index >= totalPages) return;
  currentPageIndex = index;

  const slides = container.querySelectorAll('.slide');
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === currentPageIndex);
  });

  slides[currentPageIndex].scrollTop = 0;

  const progress = ((currentPageIndex + 1) / totalPages) * 100;
  progressBar.style.width = progress + '%';
  progressBar.setAttribute('aria-valuenow', Math.round(progress));

  currentPageEl.textContent = currentPageIndex + 1;
  totalPagesEl.textContent = totalPages;

  prevBtn.disabled = currentPageIndex === 0;
  nextBtn.disabled = currentPageIndex === totalPages - 1;
}

function nextPage() {
  if (currentPageIndex < totalPages - 1) showPage(currentPageIndex + 1);
}

function prevPage() {
  if (currentPageIndex > 0) showPage(currentPageIndex - 1);
}

/* ============================================================
   EVENTS
   ============================================================ */
nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', prevPage);

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowRight':
    case ' ':
    case 'PageDown':
      e.preventDefault();
      nextPage();
      break;
    case 'ArrowLeft':
    case 'PageUp':
      e.preventDefault();
      prevPage();
      break;
    case 'Home':
      e.preventDefault();
      showPage(0);
      break;
    case 'End':
      e.preventDefault();
      showPage(totalPages - 1);
      break;
  }
});

// Touch swipe
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

container.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextPage();
    else prevPage();
  }
}, { passive: true });

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildSlides();
  showPage(0);
});