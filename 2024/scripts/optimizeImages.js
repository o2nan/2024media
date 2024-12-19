const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const directory = {
  input: path.join(__dirname, '../public/images/sliderimg'),
  output: path.join(__dirname, '../public/images/sliderimg/optimized')
};

async function processDirectory() {
  try {
    // 출력 디렉토리 생성
    await fs.mkdir(directory.output, { recursive: true });
    
    const entries = await fs.readdir(directory.input, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.name === 'optimized') continue;
      
      if (entry.isFile() && entry.name.match(/\.(png|jpg|jpeg)$/i)) {
        const fullPath = path.join(directory.input, entry.name);
        const filename = path.parse(entry.name).name;
        
        // WebP 변환
        await sharp(fullPath)
          .resize(1920, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ 
            quality: 80,
            lossless: false // 손실 압축 사용
          })
          .toFile(path.join(directory.output, `${filename}.webp`));
          
        console.log(`✅ Created WebP: ${filename}.webp`);
      }
    }
    
    console.log('\n🎉 WebP conversion complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

processDirectory(); 