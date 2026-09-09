// ============================================================
//  CONFIGURATION DU SITE — le SEUL fichier à adapter pour votre club
//  (voir GUIDE_INSTALLATION.pdf, étapes 3 et 5)
// ============================================================
const CONFIG = {
  // 1) Nom affiché dans les titres, l'en-tête et la barre latérale
  clubName: "Club de Tir de Saint-Gaudens",

  // 1bis) Sous-titre affiché sous le titre de la saisie (optionnel)
  subtitle: "Saint-Gaudens — Ligue Midi-Pyrénées",

  // 2) Identifiant technique = dossier des compétitions dans Firebase.
  //    SANS espaces ni accents (lettres, chiffres, _). Ne plus changer une fois des compétitions créées.
  clubKey: "TIR_SAINT_GAUDENS",

  // 3) Adresse du site sur GitHub Pages (sert à fabriquer les QR codes)
  //    Forme : https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT
  githubBase: "https://tir-stgaudens.github.io/resultats-tir-stgaudens",

  // 4) Clés Firebase — à copier depuis la console Firebase :
  //    Paramètres du projet ⚙️ → Général → Vos applications → Configuration du SDK (firebaseConfig)
  firebase: {
    apiKey: "AIzaSyD1W1IA9olPZ9OmRWi7GA08y4wcy1b2rZg",
    authDomain: "resultats-tir-stgaudens.firebaseapp.com",
    databaseURL: "https://resultats-tir-stgaudens-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "resultats-tir-stgaudens",
    storageBucket: "resultats-tir-stgaudens.firebasestorage.app",
    appId: "1:203082056155:web:f15a1d9d1d45c9c5ea27fe"
  }
};
