import { ReactNode, createContext, useState, useEffect } from 'react';

// 이전에는 data.json 파일에서 데이터를 불러왔다고 가정합니다.
// const numname = require('./data.json'); // Node.js 환경에서 사용
import numname from './data.json';

export const TestContext = createContext<any>(null);

type Props = {
  children: ReactNode;
};

const MyContext = ({ children }: Props) => {
  const [data, setData] = useState<any[]>([]);

  // 컴포넌트가 처음 렌더링될 때 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  // 데이터가 변경될 때 로컬 스토리지에 데이터 저장
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <TestContext.Provider value={{ data, setData }}>
      {children}
    </TestContext.Provider>
  );
};

export default MyContext;
