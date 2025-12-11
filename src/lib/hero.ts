import fs from 'fs';
import path from 'path';

export interface HeroData {
  image: string;
  alt: string;
}

export function getHeroData(): HeroData | null {
  try {
    const heroFile = path.join(process.cwd(), 'content/hero.json');
    
    if (!fs.existsSync(heroFile)) {
      return null;
    }

    const fileContents = fs.readFileSync(heroFile, 'utf8');
    const data = JSON.parse(fileContents);

    if (data.image && data.alt) {
      return {
        image: data.image,
        alt: data.alt,
      };
    }

    return null;
  } catch (error) {
    console.error('Error loading hero data:', error);
    return null;
  }
}


