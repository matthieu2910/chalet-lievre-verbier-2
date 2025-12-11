import fs from 'fs';
import path from 'path';

export interface AboutData {
  image: string;
  alt: string;
}

export function getAboutData(): AboutData | null {
  try {
    const aboutFile = path.join(process.cwd(), 'content/about.json');
    
    if (!fs.existsSync(aboutFile)) {
      return null;
    }

    const fileContents = fs.readFileSync(aboutFile, 'utf8');
    const data = JSON.parse(fileContents);

    if (data.image && data.alt) {
      return {
        image: data.image,
        alt: data.alt,
      };
    }

    return null;
  } catch (error) {
    console.error('Error loading about data:', error);
    return null;
  }
}


