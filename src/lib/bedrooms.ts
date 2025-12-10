import fs from 'fs';
import path from 'path';

export interface BedroomData {
  name: string;
  image: string;
  bedType?: string;
  guests?: number;
  features?: string[];
  hasEnsuite?: boolean;
}

export function getBedroomsData(): BedroomData[] {
  try {
    const bedroomsDir = path.join(process.cwd(), 'content/bedrooms');
    
    if (!fs.existsSync(bedroomsDir)) {
      return [];
    }

    const files = fs.readdirSync(bedroomsDir);
    const bedrooms: BedroomData[] = [];

    for (const file of files) {
      if (!file.endsWith('.json')) continue;

      try {
        const filePath = path.join(bedroomsDir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        if (data.name && data.image) {
          bedrooms.push({
            name: data.name,
            image: data.image,
            bedType: data.bedType || '',
            guests: data.guests || 2,
            features: data.features || [],
            hasEnsuite: data.hasEnsuite || false,
          });
        }
      } catch (error) {
        console.error(`Error reading bedroom file ${file}:`, error);
      }
    }

    return bedrooms;
  } catch (error) {
    console.error('Error loading bedrooms data:', error);
    return [];
  }
}

