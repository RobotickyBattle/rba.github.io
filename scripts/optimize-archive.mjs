import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const archiveDir = path.resolve('public/archive');
const maxWidth = 800;
const quality = 78;

const files = (await readdir(archiveDir)).filter((file) => /\.jpe?g$/i.test(file));

for (const file of files) {
	const filePath = path.join(archiveDir, file);
	const before = (await stat(filePath)).size;

	await sharp(filePath)
		.rotate()
		.resize({ width: maxWidth, withoutEnlargement: true })
		.jpeg({ quality, mozjpeg: true })
		.toFile(`${filePath}.tmp`);

	const { rename, unlink } = await import('node:fs/promises');
	await unlink(filePath);
	await rename(`${filePath}.tmp`, filePath);

	const after = (await stat(filePath)).size;
	console.log(`${file}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB`);
}
