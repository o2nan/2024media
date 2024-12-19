module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const imageRule = webpackConfig.module.rules.find(rule => 
        rule.test && rule.test.test('.svg')
      );
      
      if (imageRule) {
        // webp 확장자 추가
        imageRule.test = /\.(svg|png|jpe?g|gif|webp)$/i;
        
        // 파일 로더 설정 수정
        const fileLoader = imageRule.oneOf.find(loader => 
          loader.type === 'asset/resource'
        );
        
        if (fileLoader) {
          fileLoader.generator = {
            ...fileLoader.generator,
            filename: 'static/media/[name].[hash:8][ext]'
          };
        }
      }
      
      return webpackConfig;
    }
  }
}; 