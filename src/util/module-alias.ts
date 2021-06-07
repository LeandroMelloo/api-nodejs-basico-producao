import * as path from 'path';
import moduleAlias from 'module-alias';

// pega o diretorio que a gente está, volta duas pastas e importa todos os arquivos
const files = path.resolve(__dirname, '../..');

// adicionando alias para pasta src e para pasta test
moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test')
});