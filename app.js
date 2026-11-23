/* ============================================================
   ΝΟΜΙΣΜΑΤΑ ΤΗΣ ΘΕΣΣΑΛΙΑΣ — Φάρσαλα & Σκοτούσσα
   Τύπος: B_js_data_driven
   Γλώσσα: Ελληνικά
   Ενημέρωση: Φόρτωση πραγματικών εικόνων από τον φάκελο /images/
   ============================================================ */

// === SLIDES DATA ===
const slidesData = [

  /* ---------- 1. COVER ---------- */
  {
    type: 'cover',
    eyebrow: 'Εκπαιδευτική Παρουσίαση · Δ΄ Δημοτικού',
    title: 'Από το Ανταλλακτικό Παζάρι στα <em>Ασημένια Νομίσματα</em> των Φαρσάλων & της Σκοτούσσας',
    subtitle: 'Ένα ταξίδι 2.500 χρόνων στην ιστορία του χρήματος',
    meta: 'Διάρκεια: 50 λεπτά · Φάρσαλα, Θεσσαλία'
  },

  /* ---------- 2. Η ΓΕΝΝΗΣΗ ΤΟΥ ΧΡΗΜΑΤΟΣ ---------- */
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

  /* ---------- 3. ΓΙΑΤΙ ΜΕΤΑΛΛΟ; ---------- */
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

  /* ---------- 4. ΝΟΜΙΣΜΑΤΟΚΟΠΕΙΑ ---------- */
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

  /* ---------- 5. ΦΑΡΣΑΛΑ — ΕΜΠΡΟΣΘΙΑ ΟΨΗ (ΑΘΗΝΑ) ---------- */
  {
    type: 'coin',
    title: 'Φάρσαλα — Η Θεά Αθηνά',
    subtitle: 'Εμπρόσθια όψη νομίσματος (5ος – 4ος αι. π.Χ.)',
    imageId: 'coin-pharsala-athena-front',
    imageCaption: 'Ασημένιο νόμισμα Φαρσάλων — κεφάλι Αθηνάς με κράνος',
    imagePosition: 'center', // 'center', 'left', ή 'right' για το κόλπο με τις 2 όψεις
    paragraphs: [
      'Στην <strong>μπροστινή πλευρά</strong> του νομίσματος βλέπουμε το <strong>κεφάλι της θεάς Αθηνάς</strong> να φορά ένα περίτεχνο <strong>πολεμικό κράνος</strong>, συχνά διακοσμημένο με φτερά ή <em>γρύπες</em> — τα μυθικά πλάσματα με σώμα λιονταριού και κεφάλι αετού.'
    ],
    highlight: '<strong>Τι σημαίνει;</strong> Η Αθηνά ήταν η <em>προστάτιδα θεά</em> της πόλης — σύμβολο σοφίας, στρατηγικής και δύναμης. Η πόλη ήθελε να δείξει ότι έχει τη θεά στο πλευρό της.'
  },

  /* ---------- 6. ΦΑΡΣΑΛΑ — ΟΠΙΣΘΙΑ ΟΨΗ (ΙΠΠΕΑΣ) ---------- */
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

  /* ---------- 7. ΓΙΑΤΙ ΑΛΟΓΟ; ---------- */
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

  /* ---------- 8. ΣΚΟΤΟΥΣΣΑ — ΕΙΣΑΓΩΓΗ ---------- */
  {
    type: 'content',
    title: 'Ο Θησαυρός της Γειτονικής Σκοτούσσας',
    subtitle: 'Λίγα χιλιόμετρα έξω από τα Φάρσαλα',
    imageId: 'skotoussa-map', // Αυτό λείπει από τον φάκελο, θα δείξει placeholder
    imageCaption: 'Χάρτης επαρχίας Φαρσάλων — θέση Σκοτούσσας',
    paragraphs: [
      'Η <strong>Σκοτούσσα</strong> ήταν μια μικρότερη πόλη κοντά στα Φάρσαλα. Τα νομίσματά της είναι η <strong>πιο ζωντανή απόδειξη</strong> της ιστορίας της — γιατί πάνω τους χάραζαν ό,τι ήταν σημαντικό για τους κατοίκους.',
      'Καθώς περνούσαν τα χρόνια, οι εικόνες στα νομίσματα <strong>άλλαζαν</strong> ανάλογα με τις ανάγκες και τις αξίες της εποχής.'
    ],
    highlight: 'Τα νομίσματα ήταν σαν <strong>μικρές εφημερίδες</strong>: έλεγαν σε όλους τι αγαπούσε, τι φοβόταν και τι περηφανευόταν η πόλη.'
  },

  /* ---------- 9. ΣΚΟΤΟΥΣΣΑ — ΤΑΥΡΟΚΑΘΑΨΙΑ ---------- */
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

  /* ---------- 10. ΣΚΟΤΟΥΣΣΑ — ΣΙΤΑΡΙ & ΑΛΟΓΟ ---------- */
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

  /* ---------- 11. ΣΚΟΤΟΥΣΣΑ — ΗΡΑΚΛΗΣ & ΔΙΟΝΥΣΟΣ ---------- */
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

  /* ---------- 12. ΣΥΓΚΡΙΣΗ ---------- */
  {
    type: 'content',
    title: 'Φάρσαλα vs Σκοτούσσα',
    subtitle: 'Δύο πόλεις, δύο ιστορίες',
    imageId: 'comparison-coins',
    imageCaption: 'Δύο νομίσματα δίπλα-δίπλα — Φάρσαλα & Σκοτούσσα',
    paragraphs: [
      '<strong>Φάρσαλα:</strong> Αθηνά (σοφία & προστασία) + Ιππέας (στρατιωτική δύναμη). Έμφαση στην <em>ηγεμονία</em> και το <em>ιππικό</em>.',
      '<strong>Σκοτούσσα:</strong> Ταύρος (θρησκεία), Σιτάρι & Άλογο (πλούτος γης), Ηρακλής & Διόνυσος (δύναμη & κρασί). Έμφαση στην <em>καθημερινή ζωή</em> και τη <em>γη</em>.'
    ],
    highlight: 'Και οι δύο πόλεις χρησιμοποιούσαν τα νομίσματα ως <strong>μέσο επικοινωνίας</strong>: έλεγαν στον κόσμο ποιοι ήταν και τι είχαν.'
  },

  /* ---------- 13. ΔΡΑΣΤΗΡΙΟΤΗΤΑ ---------- */
  {
    type: 'content',
    title: 'Γίνε Χαράκτης του Νομισματοκοπείου!',
    subtitle: 'Διαδραστική δραστηριότητα (10 λεπτά)',
    imageId: 'activity-coins',
    imageCaption: 'Παιδιά ζωγραφίζουν νομίσματα σε χαρτόνι',
    paragraphs: [
      'Χωριστείτε σε δύο «εργαστήρια»: το <strong>νομισματοκοπείο των Φαρσάλων</strong> και της <strong>Σκοτούσσας</strong>.',
      'Πάνω σε στρογγυλά χαρτόνια (ασημί και χάλκινα), σχεδιάστε τις <strong>δύο όψεις</strong> ενός δικού σας νομίσματος για τη <em>σύγχρονη πόλη σας</em>.',
      'Γράψτε γύρω-γύρω τα αρχικά της: <strong>ΦΑΡΣΑΛΙΩΝ</strong> ή <strong>ΣΚΟΤΟΥΣΣΑΙΩΝ</strong>.'
    ],
    highlight: 'Στο τέλος, αφήστε το χάρτινο νόμισμά σας πάνω στον <strong>μεγάλο χάρτη των Φαρσάλων</strong> — και πάρτε ως αναμνηστικό ένα κουλουράκι με σουσάμι σε σχήμα αρχαίου νομίσματος!'
  },

  /* ---------- 14. THANK YOU ---------- */
  {
    type: 'cover',
    eyebrow: 'Τέλος Παρουσίασης',
    title: 'Ευχαριστούμε!',
    subtitle: 'Από το ανταλλακτικό παζάρι… στα ασημένια νομίσματα των Φαρσάλων & της Σκοτούσσας',
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
        ${data.subtitle ? `<div class="cover-divider"></div><p style="max-width:600px;margin:0 auto;color:var(--text-secondary);">${data.subtitle}</p>` : ''}
        ${data.meta ? `<p class="cover-meta" style="margin-top:1.5rem;">${data.meta}</p>` : ''}
      `;
    } else {
      // Έλεγχος αν υπάρχει imageId. Αν ναι, φτιάχνουμε το HTML της εικόνας.
      let imageHtml = '';
      if (data.imageId) {
        // Χρησιμοποιούμε το imagePosition αν υπάρχει, αλλιώς 'center'
        const pos = data.imagePosition || 'center';
        
        imageHtml = `
          <div class="image-slot" style="position: relative; overflow: hidden;">
            <!-- Το onerror δείχνει το placeholder κείμενο αν η εικόνα λείπει -->
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

  // Scroll στο top του slide
  slides[currentPageIndex].scrollTop = 0;

  // Progress bar
  const progress = ((currentPageIndex + 1) / totalPages) * 100;
  progressBar.style.width = progress + '%';
  progressBar.setAttribute('aria-valuenow', Math.round(progress));

  // Page indicator
  currentPageEl.textContent = currentPageIndex + 1;
  totalPagesEl.textContent = totalPages;

  // Buttons state
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