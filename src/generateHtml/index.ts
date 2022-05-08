import Hello from './basePage';
import ReactDOMServer from 'react-dom/server';
import { Paragraphs } from 'maplenow-tool';
import fs from 'fs';
import prettier from 'prettier';

const generateHtml = async () => {
  const description = (await Paragraphs.Cube.getRankUpParagraphList()).paragraphs[0].autoTable
    .header;
  const html = ReactDOMServer.renderToStaticMarkup(Hello(description));
  const htmlWDoc = '<!DOCTYPE html>' + html;
  const prettyHtml = prettier.format(htmlWDoc, { parser: 'html' });
  fs.writeFileSync('./a.html', prettyHtml);
};

export default generateHtml;
