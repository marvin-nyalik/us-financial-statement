import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchReport, clearReports } from '../redux/company/companySlice';
import Header from './header';
import css from './detail.module.css';
import statementImage from '../images/statement.jpg';
import Showcase from './showcase';
import LoadingSpinner from './Loading';

const Detail = () => {
  const dispatch = useDispatch();
  const { symbol } = useParams();

  useEffect(() => {
    dispatch(fetchReport(symbol));
    return () => {
      dispatch(clearReports());
    };
  },
  [symbol, dispatch]);

  const report = useSelector((state) => state.company.report);
  const loading = useSelector((state) => state.company.loading);
  const headline = 'Company Statement';
  const back = <i className="bx bx-chevron-left-circle" />;
  const showlineBase = 'Company statement report for ';
  const showline = showlineBase.concat(symbol);

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }
  return (
    <>
      <Header back={back} headline={headline} />
      <Showcase image={statementImage} showline={showline} />

      {report.length === 0 ? (
        <p className={css.noReports}>
          No Reports - INVALID CODE !!!
        </p>
      ) : (
        <div className={css.reports}>
          {report.map((report, index) => (
            <div key={`${report.researchExpenses}${report.date}`} className={css.cover}>
              <h3 className={css.reportName}>
                Report
                {' '}
                {index + 1}
              </h3>
              <p>
                <span> Report Date: </span>
                <span>
                  {' '}
                  {report.date}
                  <i className="bx bx-chevron-right-circle" />
                </span>
              </p>
              <p>
                <span> Currency:</span>
                <span>
                  {' '}
                  {report.currency}
                  <i className="bx bx-chevron-right-circle" />
                </span>
              </p>
              <p>
                <span> Year:</span>
                <span>
                  {' '}
                  {report.year}
                  <i className="bx bx-chevron-right-circle" />
                </span>
              </p>
              <p>
                <span> Expenses:</span>
                <span>
                  {' '}
                  {report.researchExpenses}
                  <i className="bx bx-chevron-right-circle" />
                </span>
              </p>
              <p>
                <span> Income: </span>
                <span>
                  {' '}
                  {report.income}
                  <i className="bx bx-chevron-right-circle" />
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

    </>
  );
};

export default Detail;
