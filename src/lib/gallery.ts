import fs from 'fs';
import path from 'path';

export interface GalleryImage {
  src: string;
  alt: string;
  span: string;
  order: number;
}

export function getGalleryImages(): GalleryImage[] {
  try {
    const galleryDir = path.join(process.cwd(), 'content/gallery');
    
    if (!fs.existsSync(galleryDir)) {
      return [];
    }

    const files = fs.readdirSync(galleryDir);
    const galleryImages: GalleryImage[] = [];

    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      try {
        const filePath = path.join(galleryDir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        // Parse frontmatter manually (simple YAML parser)
        const frontmatterMatch = fileContents.match(/^---\s*\n([\s\S]*?)\n---/);
        if (!frontmatterMatch) continue;

        const frontmatter = frontmatterMatch[1];
        const data: Record<string, string | number> = {};
        
        frontmatter.split('\n').forEach(line => {
          const match = line.match(/^(\w+):\s*(.+)$/);
          if (match) {
            const key = match[1].trim();
            let value: string | number = match[2].trim().replace(/^["']|["']$/g, '');
            
            // Try to parse as number
            if (key === 'order' && !isNaN(Number(value))) {
              value = Number(value);
            }
            
            data[key] = value;
          }
        });

        if (data.image && data.alt) {
          galleryImages.push({
            src: String(data.image),
            alt: String(data.alt),
            span: String(data.span || 'col-span-1 row-span-1'),
            order: Number(data.order) || 999,
          });
        }
      } catch (error) {
        console.error(`Error reading gallery file ${file}:`, error);
      }
    }

    // Sort by order
    galleryImages.sort((a, b) => a.order - b.order);

    return galleryImages;
  } catch (error) {
    console.error('Error loading gallery images:', error);
    return [];
  }
}
