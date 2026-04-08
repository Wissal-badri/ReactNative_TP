# Projet React Native SDDI 4

Ce projet est une application React Native simple démontrant l'utilisation des composants, des états (State), des propriétés (Props) et de la navigation personnalisée entre plusieurs écrans.

## 🚀 Écrans inclus
1.  **Menu Principal (Home)** : Point d'entrée avec navigation vers les autres pages.
2.  **Exemple UI** : Démonstration d'un formulaire de connexion à l'aide de composants de classe.
3.  **Calculs** : Exemple pratique d'interaction avec calculatrice d'addition.

---

## 🛠️ Étapes pour exécuter le projet (Windows)

### 1. Préparation (Correction Erreur Chemins Longs)
Comme Windows limite la longueur des chemins de fichiers, nous avons redirigé la compilation vers un dossier court. **Vous devez créer ce dossier manuellement une seule fois :**

Ouvrez un terminal (PowerShell ou Invite de commandes) et tapez :
```powershell
mkdir C:\tmp\rn-cxx
```

*Optionnel (Recommandé) : Activez les chemins longs dans Windows (nécessite les droits Admin) :*
```powershell
New-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

### 2. Installation des dépendances
Dans la racine du projet, installez les modules nécessaires :
```bash
npm install
```

### 3. Lancement du serveur Metro
Ouvrez votre premier terminal et lancez le serveur React Native :
```bash
npx react-native start
```

### 4. Lancement sur Android
Dans un **deuxième terminal**, assurez-vous que votre émulateur Android est ouvert, puis exécutez :
```bash
npx react-native run-android
```

---

## 🏗️ Structure du Projet
- **`App.tsx`** : Gestionnaire de navigation principal.
- **`screens/`** : Contient les différents écrans de l'application.
- **`components/`** : Contient les composants réutilisables (exemple: `CustomButton`).

## 🧹 Nettoyage du Projet (Clean Methods)

Si vous rencontrez des problèmes de compilation après des modifications, utilisez ces commandes :

### 1. Nettoyage de Gradle (Android)
C'est la méthode la plus courante pour résoudre les erreurs de build :
```powershell
cd android
.\gradlew clean
cd ..
```

### 2. Réinitialisation du Cache Metro
Parfois, le code ne se met pas à jour dans l'émulateur :
```bash
npx react-native start --reset-cache
```

### 3. Réinstallation complète des modules (Dernier recours)
Si vous avez des erreurs de dépendances (`Module not found`) :
```powershell
# Supprimer les dossiers
Remove-Item -Recurse -Force node_modules
# Réinstaller
npm install
```

### 4. Nettoyage du dossier temporaire de compilation
Si vous avez toujours des erreurs de chemin long après avoir déplacé votre projet :
```powershell
Remove-Item -Recurse -Force C:\tmp\rn-cxx
mkdir C:\tmp\rn-cxx
```

### 5. Réinitialisation de l'émulateur (Wipe Data)
Si l'émulateur refuse de démarrer :
Ouvrez votre gestionnaire d'appareils dans Android Studio, cliquez sur les trois points `...` à côté de votre émulateur et sélectionnez **Wipe Data**.

---
