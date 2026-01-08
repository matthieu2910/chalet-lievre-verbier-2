# Ajout du système bilingue (FR/EN)

## Nouveaux fichiers créés :
- `src/lib/translations.ts` - Fichier de traductions français/anglais
- `src/contexts/LanguageContext.tsx` - Contexte React pour la gestion des langues

## Fichiers modifiés :
- `src/app/layout.tsx` - Ajout du LanguageProvider
- `src/components/Header.tsx` - Ajout du sélecteur de langue (bouton FR/EN)
- `src/components/Hero.tsx` - Utilisation des traductions
- `src/components/About.tsx` - Utilisation des traductions
- `src/components/Amenities.tsx` - Utilisation des traductions
- `src/components/Gallery.tsx` - Utilisation des traductions
- `src/components/Bedrooms.tsx` - Utilisation des traductions
- `src/components/Location.tsx` - Utilisation des traductions
- `src/components/Contact.tsx` - Utilisation des traductions
- `src/components/Footer.tsx` - Utilisation des traductions
- `src/components/BookingCalendar.tsx` - Utilisation des traductions

## Fonctionnalités ajoutées :
- Système de traduction bilingue (français/anglais)
- Sélecteur de langue dans le header (desktop et mobile)
- Détection automatique de la langue du navigateur
- Sauvegarde de la préférence de langue dans localStorage
- Tous les textes de l'interface sont maintenant traduits

