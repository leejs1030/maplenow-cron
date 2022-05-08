import { NextPage } from 'next';
import { mapletype, Paragraphs, Probs } from 'maplenow-tool';
import { colMapper } from '../../constants';

Paragraphs.Cube.getRankUpParagraphList;
Probs.getBaseProbsWithUuid;

const generateTable = (
  t: mapletype.AutoTable,
  x: mapletype.AutoTableItem[][][],
  colArr: string[],
  GenerateBody: NextPage<{ TableItem: mapletype.AutoTableItem[][][]; colArr: string[] }>,
) => {
  return (
    <table>
      <thead>
        <tr>
          {t.contentColActive ? <th>{t.contentColAlias}</th> : null}
          {t.trialresultColActive ? <th>{t.trialresultColAlias}</th> : null}
          {t.probtableColActive ? <th>{t.probtableColAlias}</th> : null}
          {t.trialresultColActive ? <th>{t.trialresultColAlias}</th> : null}
          {t.countColActive ? <th>{t.countColAlias}</th> : null}
          {t.probColActive ? <th>{t.probColAlias}</th> : null}
          {t.realProbColActive ? <th>{t.realProbColAlias}</th> : null}
        </tr>
      </thead>
      <GenerateBody TableItem={x} colArr={colArr} />
    </table>
  );
};

const GenerateBody: NextPage<{ TableItem: mapletype.AutoTableItem[][][]; colArr: string[] }> = ({
  TableItem,
  colArr,
}) => {
  return (
    <tbody>
      {TableItem.map((d2arr) => {
        return d2arr.map((arr) => {
          return arr.map((tableItem: any) => {
            return (
              <tr>
                {colArr.map((value) => {
                  return tableItem[value];
                })}
              </tr>
            );
          });
        });
      })}
    </tbody>
  );
};

const GenerateTable: NextPage<{
  TableItem: mapletype.AutoTableItem[][][];
  TableTitle: string[];
  TableInfo: { uuid: string; autoTable: mapletype.AutoTable }[];
}> = ({ TableItem, TableTitle, TableInfo }) => {
  const colArr: string[][] = [];
  return (
    <div id={'tables'}>
      {TableInfo.map((value, index) => {
        colArr.push([]);
        const t = value.autoTable;
        if (t.contentColActive) colArr[index].push(colMapper.contentColActive);
        if (t.trialresultColActive) colArr[index].push(colMapper.contentColActive);
        if (t.probtableColActive) colArr[index].push(colMapper.probtableColActive);
        if (t.trialresultColActive) colArr[index].push(colMapper.trialresultColActive);
        if (t.countColActive) colArr[index].push(colMapper.countColActive);
        if (t.probColActive) colArr[index].push(colMapper.probColActive);
        if (t.realProbColActive) colArr[index].push(colMapper.realProbColActive);
        generateTable(t, TableItem, colArr[index], GenerateBody);
        return <div></div>;
      })}
    </div>
  );
};
