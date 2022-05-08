import { NextPage } from 'next';
import { mapletype } from 'maplenow-tool';
import { colMapper } from '../../constants';
import UseInnerHtml from 'libs/html/useInnerHtml';

const GenerateBody: NextPage<{ TableItem: mapletype.AutoTableItem[][]; colArr: string[] }> = ({
  TableItem,
  colArr,
}) => {
  return (
    <div>
      <tbody>
        {TableItem.map((arr) => {
          // 근본적으로 2차원 배열 + 내부 테이블도 반복문으로 생성이기에 코드가 복잡.
          return arr.map((tableItem: any) => {
            // 여기서부터 tableItem이 개별 객체가 됨.
            return (
              <tr className={'check'}>
                {colArr.map((value) => (
                  <td>{tableItem[value]}</td>
                  // 실제로 사용될 col은 모두 colArr에 저장되어 있음.
                  // tableItem으로부터 실제로 사용할 col을 뽑아오기.
                ))}
              </tr>
            );
          });
        })}
      </tbody>
    </div>
  );
};

const generateTable = (
  title: string,
  t: mapletype.AutoTable,
  x: mapletype.AutoTableItem[][],
  colArr: string[],
) => {
  return (
    <div className={'innerbefore'} id={`${Math.random()}`}>
      <UseInnerHtml str={title} />
      <div>마지막 집계: {x[0][0].windowEnd}</div>
      <div>마지막 갱신: {x[0][0].updateDt}</div>
      <table>
        <thead>
          <tr>
            {t.contentColActive ? <th>{t.contentColAlias}</th> : null}
            {t.trialColActive ? <th>{t.trialColAlias}</th> : null}
            {t.probtableColActive ? <th>{t.probtableColAlias}</th> : null}
            {t.trialresultColActive ? <th>{t.trialresultColAlias}</th> : null}
            {t.countColActive ? <th>{t.countColAlias}</th> : null}
            {t.probColActive ? <th>{t.probColAlias}</th> : null}
            {t.realProbColActive ? <th>{t.realProbColAlias}</th> : null}
          </tr>
        </thead>
        <span className={'afds'}>
          <GenerateBody TableItem={x} colArr={colArr} />
        </span>
      </table>
      <br />
      <br />
      <br />
    </div>
  );
};

const GenerateAllTable: NextPage<{
  TableItem: mapletype.AutoTableItem[][][];
  TableTitle: string[];
  TableInfo: { uuid: string; autoTable: mapletype.AutoTable }[];
}> = ({ TableItem, TableTitle, TableInfo }) => {
  const colArr: string[][] = [];
  return (
    <div id={`tables${Math.random()}`}>
      {TableInfo.map((value, index) => {
        colArr.push([]);
        const t = value.autoTable;
        if (t.contentColActive) colArr[index].push(colMapper.contentColActive);
        if (t.trialColActive) colArr[index].push(colMapper.trialColActive);
        if (t.probtableColActive) colArr[index].push(colMapper.probtableColActive);
        if (t.trialresultColActive) colArr[index].push(colMapper.trialresultColActive);
        if (t.countColActive) colArr[index].push(colMapper.countColActive);
        if (t.probColActive) colArr[index].push(colMapper.probColActive);
        if (t.realProbColActive) colArr[index].push(colMapper.realProbColActive);
        return generateTable(TableTitle[index], t, TableItem[index], colArr[index]);
      })}
      <br />
      <br />
      <br />
    </div>
  );
};

export default GenerateAllTable;
