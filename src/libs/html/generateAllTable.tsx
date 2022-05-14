import { NextPage } from 'next';
import { mapletype } from 'maplenow-tool';
import { colMapper } from '../../constants';
import UseInnerHtml from 'libs/html/useInnerHtml';

const translateCommaNumber = (str: string | number) => {
  if (typeof str === 'number') return str.toLocaleString();
  try {
    if (parseInt(str, 10).toString() !== str) return str;
    return parseInt(str, 10).toLocaleString();
  } catch (err) {
    return str;
  }
};

const GenerateBody: NextPage<{
  TableItem: mapletype.AutoTableItem[][];
  colArr: string[];
  index: number;
}> = ({ TableItem, colArr, index }) => {
  return (
    <tbody className={'table-body'} id={`table-body-${index}`} key={`table-body-${index}`}>
      {TableItem.map((arr) => {
        // 근본적으로 2차원 배열 + 내부 테이블도 반복문으로 생성이기에 코드가 복잡.
        return arr.map((tableItem: any, rowidx) => {
          // 여기서부터 tableItem이 개별 객체가 됨.
          return (
            <tr
              className={'table-body table-body-row'}
              id={`table-body-${index}-row-${rowidx}`}
              key={`table-body-${index}-row-${rowidx}`}
            >
              {colArr.map((value, colidx) => (
                <td
                  className={'table-body table-body-row table-body-row-col'}
                  id={`table-body-${index}-row-${rowidx}-col-${colidx}`}
                  key={`table-body-${index}-row-${rowidx}-col-${colidx}`}
                >
                  {translateCommaNumber(tableItem[value])}
                </td>
                // 실제로 사용될 col은 모두 colArr에 저장되어 있음.
                // tableItem으로부터 실제로 사용할 col을 뽑아오기.
              ))}
            </tr>
          );
        });
      })}
    </tbody>
  );
};

const generateTable = (
  title: string,
  t: mapletype.AutoTable,
  x: mapletype.AutoTableItem[][],
  colArr: string[],
  index: number,
) => {
  return (
    <div className={'table-wrapper'} id={`table-wrapper-${index}`} key={`table-wrapper-${index}`}>
      <UseInnerHtml str={title} />
      <div className={'last-window'} id={`window-${index}`}>
        마지막 집계: {x[0][0].windowEnd}
      </div>
      <div className={'last-update'} id={`update-${index}`}>
        마지막 갱신: {x[0][0].updateDt}
      </div>
      <table className={'table'} id={`table-${index}`}>
        <thead className={'table-head'} id={`table-head-${index}`}>
          <tr>
            {t.contentColActive ? <th>{t.contentColAlias || '시도 내역'}</th> : null}
            {t.trialColActive ? <th>{t.trialColAlias || '시행 정보'}</th> : null}
            {t.probtableColActive ? <th>{t.probtableColAlias || '구분'}</th> : null}
            {t.trialresultColActive ? <th>{t.trialresultColAlias || '결과'}</th> : null}
            {t.countColActive ? <th>{t.countColAlias || '횟수'}</th> : null}
            {t.probColActive ? <th>{t.probColAlias || '설정 확률'}</th> : null}
            {t.realProbColActive ? <th>{t.realProbColAlias || '실제 확률'}</th> : null}
          </tr>
        </thead>
        <GenerateBody TableItem={x} colArr={colArr} index={index} />
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
    <div id={`all-tables`}>
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
        return generateTable(TableTitle[index], t, TableItem[index], colArr[index], index);
      })}
      <br />
      <br />
      <br />
    </div>
  );
};

export default GenerateAllTable;
