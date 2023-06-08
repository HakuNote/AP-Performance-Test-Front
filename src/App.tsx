import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { v4 as uuid4 } from 'uuid';

import AppRouter from './router/AppRouter';
import { cookieState } from './recoil/Atom';

const HandleCookie = () => {
  const [cookies, setCookie] = useCookies(['userIdentify']);
  const setRecoilCookie = useSetRecoilState(cookieState);

  useEffect(() => {
    const setCookieFunc = async () => {
      const random = uuid4();
      setCookie('userIdentify', random);
      setRecoilCookie(random);
    };

    if (!cookies.userIdentify) {
      setCookieFunc();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

function App() {
  HandleCookie();
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
