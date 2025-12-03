fetch('/content/home.md')
  .then(r => r.text())
  .then(text => {
    const data = parseFrontMatter(text);

    document.getElementById('title').innerText = data.title;
    document.getElementById('description').innerText = data.description;

    const c = document.getElementById('carousel');
    c.innerHTML = data.carousel.map(src => `<img src="${src}" />`).join('');

    const a = document.getElementById('amenities');
    a.innerHTML = data.amenities.map(i => `<li>${i}</li>`).join('');
  });

function parseFrontMatter(text) {
  const lines = text.split('\n');
  const obj = {};
  let key = null;

  lines.forEach(line => {
    if (line.includes(':') && !line.startsWith(' ')) {
      const [k, v] = line.split(':');
      key = k.trim();
      obj[key] = v.trim();
    } else if (line.startsWith('  -')) {
      if (!Array.isArray(obj[key])) obj[key] = [];
      obj[key].push(line.replace('-', '').trim());
    }
  });

  return obj;
}
