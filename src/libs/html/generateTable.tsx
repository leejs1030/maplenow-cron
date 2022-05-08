import { NextPage } from 'next';
import { mapletype } from 'maplenow-tool';
import { colMapper } from '../../constants';
import UseInnerHtml from 'libs/html/useInnerHtml';

const generateTable = (
  title: string,
  t: mapletype.AutoTable,
  x: mapletype.AutoTableItem[][][],
  colArr: string[],
  GenerateBody: NextPage<{ TableItem: mapletype.AutoTableItem[][][]; colArr: string[] }>,
) => {
  return (
    <div>
      <UseInnerHtml str={title} />
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
    </div>
  );
};

const GenerateBody: NextPage<{ TableItem: mapletype.AutoTableItem[][][]; colArr: string[] }> = ({
  TableItem,
  colArr,
}) => {
  return (
    <tbody>
      {TableItem.map((d2arr) => {
        // 근본적으로 3차원 배열이기에 코드가 복잡.
        return d2arr.map((arr) => {
          return arr.map((tableItem: any) => {
            // 여기서부터 tableItem이 개별 객체가 됨.
            return (
              <tr>
                {colArr.map((value) => {
                  // 실제로 사용될 col은 모두 colArr에 저장되어 있음.
                  return tableItem[value]; // tableItem으로부터 실제로 사용할 col을 뽑아오기.
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
        return generateTable(TableTitle[index], t, TableItem, colArr[index], GenerateBody);
      })}
    </div>
  );
};

export default GenerateTable;
