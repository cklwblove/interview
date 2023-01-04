import fs from 'fs';
import { compile, compileFromFile } from 'json-schema-to-typescript'

// compile from file
compileFromFile('source.json')
  .then(ts => fs.writeFileSync('foo.d.ts', ts))
