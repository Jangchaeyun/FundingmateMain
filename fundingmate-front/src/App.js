import "./App.css";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import * as React from "react";
import FindIdPw from "./pages/Login/FindIdPw";
import Join from "./pages/Login/Join";
import FindId from "./pages/Login/FindId";
import FindPw from "./pages/Login/FindPw";
import FindIdResult from "./pages/Login/FindIdResult";
import FindPwNext from "./pages/Login/FindPwNext";
import FindPwResult from "./pages/Login/FindPwResult";
import Search from "./pages/Home/Search";
import Reward from "./pages/Reward/Reward";
import Story from "./Component/RewardDetail/Detail/Story";
import Contact from "./Component/RewardDetail/Detail/Contact";
import Guide from "./Component/RewardDetail/Detail/Guide";
import Fund from "./pages/Fund/Fund";
import FundStory from "./Component/FundDetail/Detail/FundStroy";
import FundContact from "./Component/FundDetail/Detail/FundContact";
import FundGuide from "./Component/FundDetail/Detail/FundGuide";
import CheckCategory from "./Component/Checkout/CheckCategory";
import Checkout from "./Component/Checkout/Checkout";
import CheckoutComplete from "./Component/Checkout/CheckoutComplete";
import FundPeople from "./Component/Checkout/FundPeople";
import Checkfund from "./Component/Checkout/Checkfund";
import FundCheckout from "./Component/Checkout/FundCheckout";
import MakeReward1 from "./Component/MakeReward/MakeReward1";
import MakeReward2 from "./Component/MakeReward/MakeReward2";
import MakeReward3 from "./Component/MakeReward/MakeReward3";
import MakeReward4 from "./Component/MakeReward/MakeReward4";
import MakeReward5 from "./Component/MakeReward/MakeReward5";
import MakeInvest1 from "./Component/MakeInvest/MakeInvest1";
import MakeInvest2 from "./Component/MakeInvest/MakeInvest2";
import MakeInvest3 from "./Component/MakeInvest/MakeInvest3";
import MakeInvest4 from "./Component/MakeInvest/MakeInvest4";
import MakeInvest5 from "./Component/MakeInvest/MakeInvest5";
import Founder from "./pages/MyPage/Founder";
import Investor from "./pages/MyPage/Investor";
import MyPage from "./pages/MyPage/MyPage";
import RewardFundMain from "./Component/RewardFund/RewardFundMain";
import Desc from "./Component/RewardDetail/Desc/Desc";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./persist-store";
import SocialLogin from "./pages/Login/SocialLogin";
import { useEffect, useState } from "react";
import { AuthProvider } from "./Component/Login/Auth/AuthContext";

const persister = persistStore(store);
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부를 판단하는 상태 값
  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const token = localStorage.getItem("token");

    // 토큰이 있으면 로그인 상태로 설정
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <React.Fragment>
      {/*<Reset />*/}
      <div className="App">
        <AuthProvider>
          <Provider store={store}>
            <PersistGate persistor={persister}>
              <BrowserRouter>
                {/* 은총 부분 */}
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/login" element={<Login />} />
                  {/* <Route
                    exact
                    path="/login"
                    element={isLoggedIn ? <Home /> : <Login />}
                  /> */}
                  <Route exact path="/findIdPw" element={<FindIdPw />} />
                  <Route exact path="/findId" element={<FindId />} />
                  <Route
                    exact
                    path="/findIdResult"
                    element={<FindIdResult />}
                  />
                  <Route exact path="/findPw" element={<FindPw />} />
                  <Route exact path="/findPwNext" element={<FindPwNext />} />
                  <Route
                    exact
                    path="/findPwResult"
                    element={<FindPwResult />}
                  />
                  <Route exact path="/join" element={<Join />} />
                  <Route exact path="/search/:keyword" element={<Search />} />
                  <Route exact path="/reward" element={<Reward />} />
                  {/*<Route exact path="/reward-detail" element={<Rewarddetail />} />*/}
                </Routes>
                {/* 은총 부분 */}
                <Routes>
                  <Route
                    exact
                    path="/rewarddetail/story/:rewardId"
                    element={<Story />}
                  />
                  <Route
                    exact
                    path="/rewarddetail/contact/:rewardId"
                    element={<Contact />}
                  />
                  <Route
                    exact
                    path="/rewarddetail/guide/:rewardId"
                    element={<Guide />}
                  />
                </Routes>
                <Routes>
                  <Route exact path="/fund" element={<Fund />} />
                </Routes>
                <Routes>
                  <Route
                    exact
                    path="/fund-detail/story"
                    element={<FundStory />}
                  />
                  <Route
                    exact
                    path="/fund-detail/contact"
                    element={<FundContact />}
                  />
                  <Route
                    exact
                    path="/fund-detail/guide"
                    element={<FundGuide />}
                  />
                </Routes>
                <Routes>
                  <Route
                    exact
                    path="/checkout/check/:rewardId"
                    element={<CheckCategory />}
                  />
                  <Route
                    exact
                    path="/reward-checkout/:rewardId/:rewardTypeId"
                    element={<Checkout />}
                  />
                  <Route
                    exact
                    path="/reward-checkout/complete"
                    element={<CheckoutComplete />}
                  />
                </Routes>
                <Routes>
                  <Route
                    exact
                    path="/fund-checkout/fundpeople"
                    element={<FundPeople />}
                  />
                  <Route
                    exact
                    path="/fund-checkout/checkfund"
                    element={<Checkfund />}
                  />
                  <Route
                    exact
                    path="/fund-checkout/checkout"
                    element={<FundCheckout />}
                  />
                  <Route
                    exact
                    path="/fund-checkout/complete"
                    element={<CheckoutComplete />}
                  />
                </Routes>
                <Routes>
                  <Route
                    exact
                    path="/rewardfund"
                    element={<RewardFundMain />}
                  />
                </Routes>
                {/* 태희 부분 */}
                <Routes>
                  <Route
                    exact
                    path="/makeRewardBasicinfo"
                    element={<MakeReward1 />}
                  />
                  <Route
                    exact
                    path="/makeRewardStory"
                    element={<MakeReward2 />}
                  />
                  <Route
                    exact
                    path="/makeRewardTypelist"
                    element={<MakeReward3 />}
                  />
                  <Route
                    exact
                    path="/makeRewardGoodsinfo"
                    element={<MakeReward4 />}
                  />
                  <Route
                    exact
                    path="/makeRewardHostinfo"
                    element={<MakeReward5 />}
                  />
                  <Route
                    exact
                    path="/makeInvestBasicinfo"
                    element={<MakeInvest1 />}
                  />
                  <Route
                    exact
                    path="/makeInvestMoneyinfo"
                    element={<MakeInvest2 />}
                  />
                  <Route
                    exact
                    path="/makeInvestStory"
                    element={<MakeInvest3 />}
                  />
                  <Route
                    exact
                    path="/makeInvestTypelist"
                    element={<MakeInvest4 />}
                  />
                  <Route
                    exact
                    path="/makeInvestHostinfo"
                    element={<MakeInvest5 />}
                  />
                </Routes>
                {/* 태희 부분 */}

                {/* My Page */}
                <Routes>
                  <Route exact path="/myPage" element={<MyPage />} />
                  <Route exact path="/myPageForFounder" element={<Founder />} />
                  <Route
                    exact
                    path="/myPageForInvestor"
                    element={<Investor />}
                  />
                </Routes>
                {/* My Page */}
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </AuthProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
